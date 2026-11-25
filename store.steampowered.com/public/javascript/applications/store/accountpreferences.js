/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./chunk~25b8cff72c.js",
      "./chunk~f025431ab0.js",
      "./chunk~01cfc309bf.js",
      "./chunk~6b8ddcaac8.js",
      "./chunk~68b7e78d68.js",
      "./chunk~f57d770d64.js",
      "./chunk~e867464c75.js",
      "./chunk~521597d5f9.js",
      "./main.js",
      "../../../css/applications/store/chunk~bcf59b1f6b.css",
      "./chunk~4eed35ad1f.js",
      "../../../css/applications/store/chunk~0c0e8c89c4.css",
      "./chunk~8c66e1c7a5.js",
      "./chunk~4c13037b22.js",
      "./chunk~8681f5c764.js",
      "./chunk~2f085f1384.js",
      "../../../css/applications/store/chunk~504d82f1b0.css",
      "./chunk~92931c6310.js",
      "./chunk~af36c62e9f.js",
      "./chunk~eefd71512b.js",
      "../../../css/applications/store/chunk~73d2876771.css",
      "./chunk~593a6b8ddc.js",
      "./chunk~2f8c67b4de.js",
      "../../../css/applications/store/chunk~bc10934db3.css",
      "./chunk~7b4b9eb713.js",
      "./chunk~b7c2818157.js",
      "./chunk~0278ae6236.js",
      "./chunk~90b9831ad2.js",
      "../../../css/applications/store/chunk~0e41f12ba5.css",
      "./chunk~f162f235ea.js",
      "../../../css/applications/store/chunk~7e3e341a02.css",
      "./chunk~466a63c735.js",
      "./chunk~c0171774da.js",
      "./chunk~d382bdf2cf.js",
      "./chunk~a35e3605eb.js",
      "./chunk~c55d6473b2.js",
      "./chunk~19394a4118.js",
      "./chunk~cc40f6af5e.js",
      "./chunk~a7c5e71e12.js",
      "./chunk~a6c148633d.js",
      "./chunk~73f829e6f9.js",
      "./chunk~aeb15068c6.js",
      "./chunk~dfd7856dfa.js",
      "../../../css/applications/store/chunk~186cbd6ad9.css",
      "./chunk~ec93a260ba.js",
      "./chunk~0ef7cd9db7.js",
      "./chunk~65da1d3223.js",
      "./chunk~f0141d9521.js",
      "../../../css/applications/store/chunk~64876e5ad6.css",
      "./chunk~1f9175251c.js",
      "./chunk~7e995db925.js",
      "./chunk~e3c69795ea.js",
      "../../../css/applications/store/chunk~b67e503730.css",
      "./chunk~f6ebb80c8b.js",
      "./chunk~0411c935a1.js",
      "../../../css/applications/store/chunk~9a4b036952.css",
      "./chunk~915930a63a.js",
      "../../../css/applications/store/chunk~14131c2b6b.css",
      "../../../css/applications/store/chunk~25b8cff72c.css",
    ]),
) => i.map((i) => d[i]);
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./chunk~f025431ab0.js";
import {
  B as n,
  I as r,
  It as i,
  Ot as a,
  P as o,
  c as s,
  dt as c,
  et as l,
  kt as u,
  u as d,
} from "./chunk~01cfc309bf.js";
import { n as f } from "./chunk~5adf866415.js";
import { r as p, t as m } from "./chunk~2f085f1384.js";
import { t as h } from "./chunk~eefd71512b.js";
import { i as g } from "./chunk~0111fcd096.js";
import { n as _ } from "./chunk~d382bdf2cf.js";
import { n as v } from "./chunk~a7c5e71e12.js";
import {
  Ai as y,
  Cr as b,
  Cy as x,
  Dl as S,
  Er as C,
  FS as w,
  Gu as T,
  Hn as ee,
  In as te,
  Lb as ne,
  Mi as re,
  Mr as ie,
  Pb as ae,
  Pc as E,
  Pn as oe,
  S as D,
  St as O,
  Un as se,
  Vc as k,
  Xr as ce,
  Zy as le,
  _b as ue,
  _r as de,
  ab as A,
  bb as fe,
  bi as pe,
  cx as j,
  di as me,
  dr as he,
  eb as ge,
  fi as _e,
  fr as ve,
  gl as M,
  gr as ye,
  ib as N,
  ji as P,
  kb as be,
  lb as F,
  lr as I,
  lx as L,
  mi as xe,
  mo as Se,
  mr as Ce,
  ni as R,
  ol as z,
  os as B,
  qb as we,
  ri as Te,
  vl as Ee,
  vx as V,
  wb as De,
  xi as Oe,
  xr as ke,
  yr as Ae,
} from "./main.js";
import "./chunk~7cbe6011f7.js";
import { i as je } from "./chunk~65da1d3223.js";
import { r as Me, t as Ne } from "./chunk~9eea33c2a2.js";
var H = e(i()),
  Pe = e(l()),
  Fe = class {
    m_Preferences = void 0;
    constructor(e) {
      (a(this),
        (this.m_Preferences = e),
        (!this.m_Preferences.content_customization ||
          Array.isArray(this.m_Preferences.content_customization)) &&
          (this.m_Preferences.content_customization = {}),
        (!this.m_Preferences.third_party_analytics ||
          Array.isArray(this.m_Preferences.third_party_analytics)) &&
          (this.m_Preferences.third_party_analytics = {}),
        (!this.m_Preferences.third_party_content ||
          Array.isArray(this.m_Preferences.third_party_content)) &&
          (this.m_Preferences.third_party_content = {}),
        (!this.m_Preferences.valve_analytics ||
          Array.isArray(this.m_Preferences.valve_analytics)) &&
          (this.m_Preferences.valve_analytics = {}),
        (this.m_Preferences.utm_enabled === void 0 ||
          this.m_Preferences.utm_enabled === null) &&
          (this.m_Preferences.utm_enabled = !0),
        (this.m_Preferences.preference_state == 0 ||
          this.m_Preferences.preference_state == 1) &&
          ((this.m_Preferences.valve_analytics.product_impressions_tracking =
            !0),
          (this.m_Preferences.content_customization.recentapps = !0),
          (this.m_Preferences.third_party_analytics.google_analytics = !0),
          (this.m_Preferences.third_party_content.sketchfab = !0),
          (this.m_Preferences.third_party_content.twitter = !0),
          (this.m_Preferences.third_party_content.vimeo = !0),
          (this.m_Preferences.third_party_content.youtube = !0)),
        this.m_Preferences.version == 0 && (this.m_Preferences.version = 1));
    }
    GetVersion() {
      return this.m_Preferences.version;
    }
    GetPreferenceState() {
      return this.m_Preferences.preference_state;
    }
    BIsAllowAll() {
      return (
        this.m_Preferences.preference_state == 1 ||
        this.m_Preferences.preference_state == 0
      );
    }
    BIsRejectAll() {
      return this.m_Preferences.preference_state == 2;
    }
    SetPreferenceState(e) {
      if (this.m_Preferences.preference_state != e) {
        if (((this.m_Preferences.preference_state = e), e == 1 || e == 2)) {
          let t = e == 1;
          ((this.m_Preferences.content_customization.recentapps = t),
            (this.m_Preferences.third_party_analytics.google_analytics = t),
            (this.m_Preferences.third_party_content.sketchfab = t),
            (this.m_Preferences.third_party_content.twitter = t),
            (this.m_Preferences.third_party_content.vimeo = t),
            (this.m_Preferences.third_party_content.youtube = t),
            (this.m_Preferences.valve_analytics.product_impressions_tracking =
              t));
        }
        this.PostCookieSettings();
      }
    }
    GetRecentApps() {
      return this.m_Preferences.content_customization.recentapps;
    }
    ToggleRecentApps() {
      ((this.m_Preferences.content_customization.recentapps =
        !this.m_Preferences.content_customization.recentapps),
        this.ProcessToggle());
    }
    GetImpressions() {
      return this.m_Preferences.valve_analytics.product_impressions_tracking;
    }
    ToggleImpressions() {
      ((this.m_Preferences.valve_analytics.product_impressions_tracking =
        !this.m_Preferences.valve_analytics.product_impressions_tracking),
        this.ProcessToggle());
    }
    GetSketchfab() {
      return this.m_Preferences.third_party_content.sketchfab;
    }
    ToggleSketchfab() {
      ((this.m_Preferences.third_party_content.sketchfab =
        !this.m_Preferences.third_party_content.sketchfab),
        this.ProcessToggle());
    }
    GetVimeo() {
      return this.m_Preferences.third_party_content.vimeo;
    }
    ToggleVimeo() {
      ((this.m_Preferences.third_party_content.vimeo =
        !this.m_Preferences.third_party_content.vimeo),
        this.ProcessToggle());
    }
    GetYouTube() {
      return this.m_Preferences.third_party_content.youtube;
    }
    ToggleYouTube() {
      ((this.m_Preferences.third_party_content.youtube =
        !this.m_Preferences.third_party_content.youtube),
        this.ProcessToggle());
    }
    GetUTMEnabled() {
      return this.m_Preferences.utm_enabled;
    }
    ToggleUTMEnabled() {
      ((this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
        this.PostCookieSettings());
    }
    ProcessToggle() {
      ((this.m_Preferences.preference_state = 3), this.PostCookieSettings());
    }
    async PostCookieSettings() {
      let e = V.STORE_BASE_URL + `account/ajaxsetcookiepreferences`,
        t = new FormData();
      (t.set(`sessionid`, j()),
        t.append(`cookiepreferences`, JSON.stringify(this.m_Preferences)));
      try {
        let n = await Pe.default.post(e, t, { withCredentials: !0 });
        if (n.status != 200 || n?.data?.success != 1)
          window.ShowAlertDialog(
            N(`#CookiePref_Error`),
            N(`#CookiePref_ErrorNotSaved`),
          );
        else if (n?.data?.success == 1) {
          let { transfer_urls: e, transfer_params: t } = n.data;
          e && t && this.TransferCookiePreferencesToSites(e, t);
        }
      } catch {
        window.ShowAlertDialog(
          N(`#CookiePref_Error`),
          N(`#CookiePref_ErrorNotSaved`),
        );
      }
    }
    TransferCookiePreferencesToSites(e, t) {
      let n = new FormData();
      n.set(`transfer_params`, t);
      for (let t of e) Pe.default.post(t, n);
    }
  };
we([u], Fe.prototype, `m_Preferences`, void 0);
var Ie = `VK34WouHuaw-`,
  Le = `_5poRwjVM2xA-`,
  Re = `f5Yon4sBMms-`,
  ze = `dAbDU2dWSc8-`,
  U = `FhWHeCBXNTE-`,
  W = `_1jidsj59ecM-`,
  G = `nsVR689da2w-`,
  K = `KRR6D4MqfmI-`,
  q = `ianSd3EEgC4-`,
  J = `GNihUgwOi5E-`,
  Be = `-vGnfVpkS8E-`,
  Ve = `xexqER2-FTo-`,
  He = `YBWuxM9Y7u8-`,
  Ue = `_4ZnBPObA-Zo-`,
  We = `i9VafgXk4E0-`,
  Ge = `wH9bvzYo4Oo-`,
  Ke = `TLijdnKtJ-U-`,
  qe = class {
    m_Preferences = void 0;
    constructor(e) {
      (a(this), (this.m_Preferences = e));
    }
    SetDeckFeedback(e) {
      ((this.m_Preferences.provide_deck_feedback = e),
        this.PostStorePreferences());
    }
    SetGameFrameRateReporting(e) {
      ((this.m_Preferences.game_frame_rate_reporting = e),
        this.PostStorePreferences());
    }
    GetProvideDeckFeedbackEnabled() {
      return this.m_Preferences.provide_deck_feedback == 1;
    }
    GetGameFrameRateReportingEnabled() {
      return this.m_Preferences.game_frame_rate_reporting == 2;
    }
    ToggleProvideDeckFeeback() {
      ((this.m_Preferences.provide_deck_feedback =
        this.m_Preferences.provide_deck_feedback == 1 ? 2 : 1),
        this.PostStorePreferences());
    }
    ToggleGameFrameRateReporting() {
      ((this.m_Preferences.game_frame_rate_reporting =
        this.m_Preferences.game_frame_rate_reporting == 2 ? 1 : 2),
        this.PostStorePreferences());
    }
    async PostStorePreferences() {
      let e = V.STORE_BASE_URL + `account/savepreferences`,
        t = new FormData();
      (t.set(`sessionid`, j()),
        t.set(
          `provide_deck_feedback`,
          this.m_Preferences.provide_deck_feedback.toString(),
        ),
        t.set(
          `game_frame_rate_reporting`,
          this.m_Preferences.game_frame_rate_reporting.toString(),
        ));
      try {
        let n = await Pe.default.post(e, t, { withCredentials: !0 });
        n.status != 200 || n?.data?.success != 1
          ? window.ShowAlertDialog(
              N(`#DataCollectionPref_Error`),
              N(`#DataCollectionPref_ErrorNotSaved`),
            )
          : n?.data?.success;
      } catch {
        window.ShowAlertDialog(
          N(`#DataCollectionPref_Error`),
          N(`#DataCollectionPref_ErrorNotSaved`),
        );
      }
    }
  };
we([u], qe.prototype, `m_Preferences`, void 0);
var Je = class e {
  m_rgSavedHardware = [];
  static s_AccountSavedHardwareStore;
  constructor() {
    a(this);
  }
  static Get() {
    return (
      e.s_AccountSavedHardwareStore ||
        ((e.s_AccountSavedHardwareStore = new e()),
        e.s_AccountSavedHardwareStore.Init()),
      e.s_AccountSavedHardwareStore
    );
  }
  Init() {
    this.m_rgSavedHardware = L(`saved_hardware`, `application_config`);
  }
  GetSavedHardware() {
    return this.m_rgSavedHardware;
  }
  async PostRequest(e, t) {
    try {
      let n = await Pe.default.post(e, t, { withCredentials: !0 });
      return n.status != 200 || n?.data?.success != 1
        ? (window.ShowAlertDialog(
            N(`#SavedHardware_Error_Title`),
            N(`#SavedHardware_Error_Desc`),
          ),
          !1)
        : !0;
    } catch {
      return (
        window.ShowAlertDialog(
          N(`#SavedHardware_Error_Title`),
          N(`#SavedHardware_Error_Desc`),
        ),
        !1
      );
    }
  }
  async RenameHardware(e, t) {
    let n = V.STORE_BASE_URL + `account/ajaxhardwarerename`,
      r = new FormData();
    if (
      (r.set(`sessionid`, j()),
      r.set(`savedHardwareID`, e),
      r.set(`strFriendlyName`, t),
      await this.PostRequest(n, r))
    )
      for (let n = 0; n < this.m_rgSavedHardware.length; ++n)
        this.m_rgSavedHardware[n].hardware_id == e &&
          (this.m_rgSavedHardware[n].friendly_name = t);
  }
  async DeleteHardware(e) {
    let t = V.STORE_BASE_URL + `account/ajaxhardwaredelete`,
      n = new FormData();
    if (
      (n.set(`sessionid`, j()),
      n.set(`savedHardwareID`, e),
      await this.PostRequest(t, n))
    ) {
      for (let t = 0; t < this.m_rgSavedHardware.length; ++t)
        if (this.m_rgSavedHardware[t].hardware_id == e) {
          this.m_rgSavedHardware.splice(t, 1);
          return;
        }
    }
  }
};
we([u], Je.prototype, `m_rgSavedHardware`, void 0);
function Ye() {
  return Je.Get().GetSavedHardware();
}
var Y = c();
function Xe(e) {
  let { hw: t, closeModal: n } = e,
    r = H.useCallback(() => {
      (Je.Get().DeleteHardware(t.hardware_id), n());
    }, [n, t.hardware_id]);
  return (0, Y.jsx)(te, {
    bDisableBackgroundDismiss: !0,
    strTitle: N(`#SavedHardware_Delete_Confirm_Title`),
    onCancel: n,
    onOK: r,
    strOKButtonText: N(`#SavedHardware_Delete`),
    children: N(`#SavedHardware_Delete_Confirm_Desc`, t.friendly_name),
  });
}
function Ze(e) {
  let { hw: t, closeModal: n } = e,
    [r, i] = H.useState(t.friendly_name),
    a = H.useCallback(() => {
      (Je.Get().RenameHardware(t.hardware_id, r.trim()), n());
    }, [r, n, t.hardware_id]);
  return (0, Y.jsx)(te, {
    bDisableBackgroundDismiss: !0,
    strTitle: N(`#SavedHardware_Rename_Confirm_Title`),
    onCancel: n,
    onOK: a,
    bOKDisabled: r.trim().length == 0,
    strOKButtonText: N(`#SavedHardware_Rename`),
    children: (0, Y.jsx)(oe, {
      label: N(`#SavedHardware_Rename_Confirm_Label`),
      value: r,
      onChange: (e) => {
        i(e.target.value);
      },
      maxLength: 100,
    }),
  });
}
var Qe = d((e) => {
    let { hw: t } = e,
      n;
    switch (t.system_info.gaming_device_type) {
      case 544:
        n = N(`#HardwareVariant_SteamDeck`);
        break;
      case 545:
        n = N(`#HardwareVariant_LegionGoS`);
        break;
      case 546:
        n = N(`#HardwareVariant_SteamMachine`);
    }
    return (0, Y.jsxs)(`div`, {
      className: Ve,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsxs)(`div`, {
              className: He,
              children: [t.friendly_name, ` `],
            }),
            (0, Y.jsxs)(`div`, {
              className: Ue,
              children: [
                n && (0, Y.jsx)(`div`, { children: n }),
                (0, Y.jsx)(`div`, { children: t.system_info.os }),
                (0, Y.jsxs)(`div`, {
                  children: [
                    t.system_info.cpu_name,
                    ` - `,
                    O(parseInt(t.system_info.system_ram) * 1024 * 1024, 0),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  children: [
                    t.system_info.adapter_description,
                    ` - `,
                    O(t.system_info.vram_size * 1024 * 1024, 0),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(`div`, {
              className: void 0,
              children: N(`#SavedHardware_Timestamp`, De(t.timestamp_created)),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: We,
          children: [
            (0, Y.jsx)(ve, {
              className: Ke,
              onClick: (e) => ee((0, Y.jsx)(Ze, { hw: t }), T(e)),
              children: N(`#SavedHardware_Rename`),
            }),
            (0, Y.jsx)(ve, {
              className: Ge,
              onClick: (e) => ee((0, Y.jsx)(Xe, { hw: t }), T(e)),
              children: N(`#SavedHardware_Delete`),
            }),
          ],
        }),
      ],
    });
  }),
  $e = d(() => {
    let e = Ye(),
      t = typeof SteamClient < `u`,
      n = H.useCallback(() => {
        window.location.reload();
      }, []),
      r = H.useCallback(() => {
        (window.SteamClient.BrowserView.RegisterForMessageFromParent(n),
          SteamClient.BrowserView.PostMessageToParent(
            `ShowSavedHardwareDialog`,
            ``,
          ));
      }, [n]);
    return (0, Y.jsxs)(`div`, {
      className: U,
      children: [
        (0, Y.jsxs)(`div`, {
          className: W,
          children: [
            (0, Y.jsx)(`h2`, { children: N(`#SavedHardware_Title`) }),
            (0, Y.jsx)(`p`, {
              className: G,
              children: N(`#SavedHardware_Desc`),
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: Be,
          children: e.map((e) => (0, Y.jsx)(Qe, { hw: e }, e.hardware_id)),
        }),
        (0, Y.jsx)(`div`, {
          className: We,
          children:
            t &&
            (0, Y.jsxs)(ve, {
              className: `_6xNO-D5DinA-`,
              onClick: r,
              children: [N(`#SavedHardware_AddNew`), ` `],
            }),
        }),
      ],
    });
  }),
  et = null,
  tt = null;
function nt() {
  return (
    (et ||= new Fe(L(`cookiepreferences`, `application_config`))),
    (tt ||= new qe(L(`storedatapreferences`, `application_config`))),
    [et, tt]
  );
}
var rt = s(() => {
    let [e, t] = nt(),
      n = (0, H.useCallback)(() => {
        e.SetPreferenceState(1);
      }, [e]),
      r = (0, H.useCallback)(() => {
        e.SetPreferenceState(2);
      }, [e]),
      i = x();
    return (0, Y.jsxs)(`div`, {
      children: [
        (0, Y.jsx)(`div`, {
          className: E(Re, `account_header_line noicon`),
          children: (0, Y.jsx)(`div`, {
            children: N(`#CookiePref_OptionalCookies_Title`),
          }),
        }),
        (0, Y.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, Y.jsxs)(k, {
              "flow-children": `row`,
              className: ze,
              children: [
                (0, Y.jsx)(Ee, {
                  className: E(Ie, e.BIsRejectAll() ? Le : ``),
                  onClick: r,
                  children: N(`#CookiePref_RejectAll`),
                }),
                (0, Y.jsx)(Ee, {
                  className: E(Ie, e.BIsAllowAll() ? Le : ``),
                  onClick: n,
                  children: N(`#CookiePref_AcceptAll`),
                }),
              ],
            }),
            (0, Y.jsx)(it, { settings: e }),
            (0, Y.jsx)(at, { settings: e }),
            (0, Y.jsx)(ot, { settings: e }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: E(Re, `account_header_line noicon`),
          children: (0, Y.jsx)(`div`, {
            children: N(`#CookiePref_TechnicallyNeccesary_Title`),
          }),
        }),
        (0, Y.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, Y.jsx)(`p`, {
              children: N(`#CookiePref_TechnicallyNeccesary_Desc`),
            }),
            (0, Y.jsxs)(`div`, {
              className: U,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_SessionID_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_SessionID_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_ShoppingCart_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_ShoppingCart_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_SteamCountry_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_SteamCountry_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_Timezone_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_Timezone_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_BirthTime_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_BirthTime_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_Login_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_Login_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_Language_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_Language_Desc`),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: K,
                  children: [
                    (0, Y.jsx)(`span`, {
                      className: q,
                      children: N(`#CookiePref_CookieSettings_Title`),
                    }),
                    (0, Y.jsx)(`span`, {
                      className: J,
                      children: N(`#CookiePref_CookieSettings_Desc`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: E(Re, `account_header_line noicon`),
          children: (0, Y.jsx)(`div`, {
            children: N(`#PrivacySettings_Marketing_Header`),
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: `account_settings_container`,
          children: (0, Y.jsx)(st, { settings: e }),
        }),
        !!i &&
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`div`, {
                className: E(`_64aHmRjJ5Ns-`, `account_header_line noicon`),
                children: (0, Y.jsx)(`div`, {
                  children: N(`#DataPreferences_Header`),
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: `account_settings_container`,
                children: (0, Y.jsx)(ct, { settings: t }),
              }),
            ],
          }),
        null,
      ],
    });
  }),
  it = s((e) => {
    let { settings: t } = e,
      n = (0, H.useCallback)(() => {
        t.ToggleRecentApps();
      }, [t]);
    return (0, Y.jsx)(`div`, {
      className: U,
      children: (0, Y.jsxs)(`div`, {
        className: W,
        children: [
          (0, Y.jsx)(`h2`, { children: N(`#CookiePref_Content_Title`) }),
          (0, Y.jsx)(`p`, {
            className: G,
            children: N(`#CookiePref_Content_Desc`),
          }),
          (0, Y.jsx)(C, {
            onChange: n,
            label: N(`#CookiePref_Content_ToggleTitle`),
            checked: t.GetRecentApps(),
            description: N(`#CookiePref_Content_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  at = s((e) => {
    let { settings: t } = e,
      n = (0, H.useCallback)(() => {
        t.ToggleImpressions();
      }, [t]);
    return (0, Y.jsx)(`div`, {
      className: U,
      children: (0, Y.jsxs)(`div`, {
        className: W,
        children: [
          (0, Y.jsx)(`h2`, { children: N(`#CookiePref_ValveAnalytics_Title`) }),
          (0, Y.jsx)(`p`, {
            className: G,
            children: N(`#CookiePref_ValveAnalytics_Desc`),
          }),
          (0, Y.jsx)(C, {
            onChange: n,
            label: N(`#CookiePref_ValveAnalytics_ToggleTitle`),
            checked: t.GetImpressions(),
            description: N(`#CookiePref_ValveAnalytics_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  ot = s((e) => {
    let { settings: t } = e,
      n = (0, H.useCallback)(() => {
        t.ToggleYouTube();
      }, [t]),
      r = (0, H.useCallback)(() => {
        t.ToggleVimeo();
      }, [t]),
      i = (0, H.useCallback)(() => {
        t.ToggleSketchfab();
      }, [t]);
    return (0, Y.jsx)(`div`, {
      className: U,
      children: (0, Y.jsxs)(`div`, {
        className: W,
        children: [
          (0, Y.jsx)(`h2`, { children: N(`#CookiePref_ThirdParty_Title`) }),
          (0, Y.jsx)(`p`, {
            className: G,
            children: N(`#CookiePref_ThirdParty_Desc`),
          }),
          (0, Y.jsx)(C, {
            onChange: n,
            label: N(`#CookiePref_YouTube_Title`),
            checked: t.GetYouTube(),
            description: F(
              `#CookiePref_YouTube_Desc`,
              (0, Y.jsx)(`a`, {
                href: `https://policies.google.com/privacy`,
                target: `_blank`,
                children: N(`#CookiePref_YouTube_TogglePolicyName`),
              }),
            ),
          }),
          (0, Y.jsx)(C, {
            onChange: r,
            label: N(`#CookiePref_Vimeo_Title`),
            checked: t.GetVimeo(),
            description: F(
              `#CookiePref_Vimeo_Desc`,
              (0, Y.jsx)(`a`, {
                href: `https://vimeo.com/privacy`,
                target: `_blank`,
                children: N(`#CookiePref_Vimeo_TogglePolicyName`),
              }),
            ),
          }),
          (0, Y.jsx)(C, {
            onChange: i,
            label: N(`#CookiePref_Sketchfab_Title`),
            checked: t.GetSketchfab(),
            description: F(
              `#CookiePref_Sketchfab_Desc`,
              (0, Y.jsx)(`a`, {
                href: `https://sketchfab.com/privacy`,
                target: `_blank`,
                children: N(`#CookiePref_Sketchfab_TogglePolicyName`),
              }),
            ),
          }),
        ],
      }),
    });
  }),
  st = s((e) => {
    let { settings: t } = e,
      n = (0, H.useCallback)(() => {
        t.ToggleUTMEnabled();
      }, [t]);
    return (0, Y.jsx)(`div`, {
      className: U,
      children: (0, Y.jsxs)(`div`, {
        className: W,
        children: [
          (0, Y.jsx)(`h2`, { children: N(`#PrivacySettings_Marketing_Title`) }),
          (0, Y.jsx)(`p`, {
            className: G,
            children: N(`#PrivacySettings_Marketing_Desc`),
          }),
          (0, Y.jsx)(C, {
            onChange: n,
            label: N(`#PrivacySettings_UTM_ToggleLabel`),
            checked: t.GetUTMEnabled(),
            description: N(`#PrivacySettings_UTM_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  ct = s((e) => {
    let { settings: t } = e,
      n = (0, H.useCallback)(() => {
        t.ToggleProvideDeckFeeback();
      }, [t]),
      r = (0, H.useCallback)(() => {
        t.ToggleGameFrameRateReporting();
      }, [t]);
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`div`, {
          className: U,
          children: (0, Y.jsxs)(`div`, {
            className: W,
            children: [
              (0, Y.jsx)(`h2`, {
                children: N(`#DataPreferences_Provide_SteamOS_Feedback_Title`),
              }),
              (0, Y.jsx)(`p`, {
                className: G,
                children: N(`#DataPreferences_Provide_SteamOS_Feedback_Desc`),
              }),
              (0, Y.jsx)(C, {
                onChange: n,
                checked: t.GetProvideDeckFeedbackEnabled(),
                description: N(
                  `#DataPreferences_Provide_SteamOS_Feedback_Label`,
                ),
              }),
            ],
          }),
        }),
        (0, Y.jsx)(`div`, {
          className: U,
          children: (0, Y.jsxs)(`div`, {
            className: W,
            children: [
              (0, Y.jsx)(`h2`, {
                id: `FrameRateReporting`,
                children: N(`#DataPreferences_FrameRateReporting_Title`),
              }),
              (0, Y.jsx)(`p`, {
                className: G,
                children: N(`#DataPreferences_FrameRateReporting_Description`),
              }),
              (0, Y.jsx)(C, {
                onChange: r,
                checked: t.GetGameFrameRateReportingEnabled(),
                description: N(`#DataPreferences_FrameRateReporting_Label`),
              }),
            ],
          }),
        }),
        (0, Y.jsx)($e, {}),
      ],
    });
  }),
  lt = `sML4yrXupis-`,
  ut = `PN-BLDRmOi8-`,
  dt = `dbVek-y66VM-`,
  ft = `G9YiArwIWMc-`,
  pt = `RLZi3mFotC8-`,
  mt = `pF1Nwx-LELQ-`,
  ht = `oWGsep6hjnY-`,
  gt = `F5865fLuKas-`,
  _t = `FrKp3u6aEXY-`,
  vt = `Ygu4WfbzVL8-`,
  yt = `qpPlg5ibwQY-`,
  bt = `jR5Et-4d2rw-`,
  xt = 1422450;
function St(e) {
  let { bShowPlaytestOverview: t } = e,
    n = Ne(),
    r = [];
  return (
    n.isSuccess &&
      (r = n.data
        .filter((e) => e.status === 1 || e.status === 3)
        .map((e) => {
          switch (e.status) {
            case 3:
              return (0, Y.jsx)(Ct, { invite: e }, e.invite_id);
            default:
              return (0, Y.jsx)(wt, { invite: e }, e.invite_id);
          }
        })),
    (0, Y.jsxs)(`div`, {
      children: [
        (0, Y.jsx)(`div`, {
          className: `account_header_line noicon`,
          children: N(`#PlaytestInvites_Title`),
        }),
        (0, Y.jsx)(`div`, {
          className: E(lt, `account_settings_container`),
          children:
            n.isLoading || r.length > 0 ? r : N(`#PlaytestInvites_NoInvites`),
        }),
        t &&
          (0, Y.jsxs)(`div`, {
            className: `account_settings_container`,
            children: [
              (0, Y.jsx)(`h2`, { children: N(`#PlaytestInvites_Desc_Title`) }),
              (0, Y.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: N(`#PlaytestInvites_Desc1`),
              }),
              (0, Y.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: N(`#PlaytestInvites_Desc2`),
              }),
            ],
          }),
      ],
    })
  );
}
function Ct(e) {
  let { invite: t } = e,
    n = t.appid,
    r = kt(t.appid)?.GetName() ?? t.app_name,
    i = H.useCallback(
      (e) => {
        ie(T(e), `steam://open/games/details/${n}`);
      },
      [n],
    );
  return (0, Y.jsxs)(`div`, {
    className: ut,
    children: [
      (0, Y.jsx)(`div`, {
        className: dt,
        children: (0, Y.jsx)(`span`, {
          children: N(`#PlaytestInvites_Welcome`, r),
        }),
      }),
      !V.IN_MOBILE_WEBVIEW &&
        (0, Y.jsx)(`div`, {
          className: `pF1Nwx-LELQ-`,
          children: (0, Y.jsx)(k, {
            className: `oWGsep6hjnY-`,
            children: (0, Y.jsx)(ke, {
              className: `Bq8C8lENGmc-`,
              noFocusRing: !1,
              onClick: i,
              children: N(`#PlaytestInvites_ViewLibrary`),
            }),
          }),
        }),
    ],
  });
}
function wt(e) {
  let { invite: t } = e,
    n = g(),
    r = kt(t.appid),
    i = r?.GetName() ?? t.app_name,
    a = Me(t.invite_id),
    o = H.useCallback(
      (e) => {
        a.mutate({ bAccept: e });
      },
      [a],
    ),
    s = new le(t.steamid_inviter);
  return (0, Y.jsx)(z, {
    children: (0, Y.jsxs)(k, {
      className: ut,
      navEntryPreferPosition: S.MAINTAIN_X,
      children: [
        (0, Y.jsxs)(`div`, {
          className: dt,
          children: [
            (0, Y.jsx)(Et, { steamIDInviter: s }),
            (0, Y.jsx)(Tt, { appStoreItem: r, strAppName: i, nAppID: t.appid }),
            (0, Y.jsx)(`div`, {
              className: pt,
              children: be(t.time_created ?? n),
            }),
          ],
        }),
        (0, Y.jsx)(`div`, {
          className: mt,
          children: a.isPending
            ? (0, Y.jsx)(h, {
                size: `medium`,
                position: `center`,
                msDelayAppear: 250,
              })
            : (0, Y.jsxs)(`div`, {
                className: ht,
                children: [
                  (0, Y.jsx)(ke, {
                    noFocusRing: !1,
                    onClick: () => o(!0),
                    children: N(`#PlaytestInvites_Accept`),
                  }),
                  (0, Y.jsx)(ve, {
                    noFocusRing: !1,
                    onClick: () => o(!1),
                    children: N(`#PlaytestInvites_Reject`),
                  }),
                ],
              }),
        }),
      ],
    }),
  });
}
function Tt(e) {
  let { appStoreItem: t, strAppName: n, nAppID: r } = e,
    i = t?.GetDeveloperNames()?.length ? t.GetDeveloperNames()[0] : null,
    a = t?.GetStorePageURL(),
    o = (0, Y.jsx)(`img`, {
      className: yt,
      src: t?.GetAssets().GetSmallCapsuleURL() ?? p,
    });
  return (
    r == xt && (i = `Valve`),
    (0, Y.jsxs)(`div`, {
      className: gt,
      children: [
        a ? (0, Y.jsxs)(M, { href: a, children: [` `, o, ` `] }) : o,
        (0, Y.jsxs)(`div`, {
          className: vt,
          children: [
            (0, Y.jsx)(`div`, { className: _t, children: n }),
            i &&
              (0, Y.jsx)(`div`, {
                className: `_5NumTItJbZc-`,
                children: N(`#PlaytestInvites_AppDeveloper`, i),
              }),
          ],
        }),
      ],
    })
  );
}
function Et(e) {
  let { steamIDInviter: t } = e;
  return t.BIsValid()
    ? (0, Y.jsx)(Dt, { steamIDInviter: t })
    : (0, Y.jsx)(Ot, {});
}
function Dt(e) {
  let { steamIDInviter: t } = e,
    n = _(t.ConvertTo64BitString()),
    r = n?.data;
  return n.isSuccess
    ? (0, Y.jsxs)(`div`, {
        className: E(bt, ft),
        children: [
          (0, Y.jsx)(je, {
            persona: r,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, Y.jsx)(`div`, {
            children: F(
              `#PlaytestInvites_InviteDescription_FromUser2`,
              (0, Y.jsx)(M, {
                href: r.GetCommunityProfileURL(),
                children: r?.m_strPlayerName,
              }),
            ),
          }),
        ],
      })
    : (0, Y.jsx)(Ot, {});
}
function Ot(e) {
  return (0, Y.jsx)(`div`, {
    className: ft,
    children: N(`#PlaytestInvites_InviteDescription_FromApp2`),
  });
}
function kt(e) {
  let [t, n] = v(e, { include_basic_info: !0, include_assets: !0 });
  return t && n == 3 ? t : null;
}
var At = `bCxa8Ii97Bk-`;
function jt(e) {
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(St, { bShowPlaytestOverview: !1 }),
      (0, Y.jsx)(`div`, {
        className: `account_header_line noicon`,
        children: N(`#PlaytestStatus_Title`),
      }),
      (0, Y.jsx)(`div`, {
        className: E(At, `account_settings_container`),
        children: N(`#PlaytestStatus_None`),
      }),
      (0, Y.jsxs)(`div`, {
        className: `account_settings_container`,
        children: [
          (0, Y.jsx)(`h2`, { children: N(`#PlaytestInvites_Desc_Title`) }),
          (0, Y.jsx)(`p`, {
            className: void 0,
            children: N(`#PlaytestInvites_Desc1`),
          }),
          (0, Y.jsx)(`p`, {
            className: void 0,
            children: N(`#PlaytestInvites_Desc2`),
          }),
        ],
      }),
    ],
  });
}
var X = class e {
  m_rgActiveDevices = [];
  m_rgRevokedDevices = [];
  m_strAccountName;
  m_strPhoneHint;
  m_strEmail;
  m_msgTwoFactorStatus;
  m_strLatestAndroidAppVersion;
  static s_AuthorizedDevicesStore;
  constructor() {
    a(this);
  }
  static Get() {
    return (
      e.s_AuthorizedDevicesStore ||
        ((e.s_AuthorizedDevicesStore = new e()),
        e.s_AuthorizedDevicesStore.Init()),
      e.s_AuthorizedDevicesStore
    );
  }
  Init() {
    ((this.m_rgActiveDevices = L(`active_devices`, `application_config`)),
      (this.m_rgRevokedDevices = L(`revoked_devices`, `application_config`)),
      (this.m_strAccountName = L(`accountName`, `application_config`)),
      (this.m_strPhoneHint = L(`phone_hint`, `application_config`)),
      (this.m_strEmail = L(`email`, `application_config`)),
      (this.m_msgTwoFactorStatus = L(
        `two_factor_status`,
        `application_config`,
      )),
      (this.m_strLatestAndroidAppVersion = L(
        `latest_android_app_version`,
        `application_config`,
      )));
  }
  GetActiveDevices() {
    return this.m_rgActiveDevices;
  }
  GetRevokedDevices() {
    return this.m_rgRevokedDevices;
  }
  GetAccountName() {
    return this.m_strAccountName;
  }
  GetPhoneHint() {
    return this.m_strPhoneHint;
  }
  GetEmailAddress() {
    return this.m_strEmail;
  }
  GetTwoFactorStatus() {
    return this.m_msgTwoFactorStatus;
  }
  GetLatestAndroidAppVersion() {
    return this.m_strLatestAndroidAppVersion;
  }
};
(we([u], X.prototype, `m_rgActiveDevices`, void 0),
  we([u], X.prototype, `m_rgRevokedDevices`, void 0));
var Mt = new URL(
    `../../../images/applications/store/sg_shield_off.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Nt = new URL(
    `../../../images/applications/store/sg_shield_on.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Pt = new URL(
    `../../../images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ft = t((e, t, n) => {
    (function (n, r) {
      var i = `1.0.41`,
        a = ``,
        o = `function`,
        s = `undefined`,
        c = `object`,
        l = `string`,
        u = `major`,
        d = `model`,
        f = `name`,
        p = `type`,
        m = `vendor`,
        h = `version`,
        g = `architecture`,
        _ = `console`,
        v = `mobile`,
        y = `tablet`,
        b = `smarttv`,
        x = `wearable`,
        S = `embedded`,
        C = `Amazon`,
        w = `Apple`,
        T = `ASUS`,
        ee = `BlackBerry`,
        te = `Browser`,
        ne = `Chrome`,
        re = `Edge`,
        ie = `Firefox`,
        ae = `Google`,
        E = `Honor`,
        oe = `Huawei`,
        D = `Lenovo`,
        O = `LG`,
        se = `Microsoft`,
        k = `Motorola`,
        ce = `Nvidia`,
        le = `OnePlus`,
        ue = `Opera`,
        de = `OPPO`,
        A = `Samsung`,
        fe = `Sharp`,
        pe = `Sony`,
        j = `Xiaomi`,
        me = `Zebra`,
        he = `Facebook`,
        ge = `Chromium OS`,
        _e = `Mac OS`,
        ve = ` Browser`,
        M = function (e, t) {
          var n = {};
          for (var r in e)
            n[r] = t[r] && t[r].length % 2 == 0 ? t[r].concat(e[r]) : e[r];
          return n;
        },
        ye = function (e) {
          for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
          return t;
        },
        N = function (e, t) {
          return typeof e == l && P(t).indexOf(P(e)) !== -1;
        },
        P = function (e) {
          return e.toLowerCase();
        },
        be = function (e) {
          return typeof e == l ? e.replace(/[^\d\.]/g, a).split(`.`)[0] : r;
        },
        F = function (e, t) {
          if (typeof e == l)
            return (
              (e = e.replace(/^\s\s*/, a)),
              typeof t === s ? e : e.substring(0, 500)
            );
        },
        I = function (e, t) {
          for (var n = 0, i, a, s, l, u, d; n < t.length && !u;) {
            var f = t[n],
              p = t[n + 1];
            for (i = a = 0; i < f.length && !u && f[i];)
              if (((u = f[i++].exec(e)), u))
                for (s = 0; s < p.length; s++)
                  ((d = u[++a]),
                    (l = p[s]),
                    typeof l == c && l.length > 0
                      ? l.length === 2
                        ? typeof l[1] == o
                          ? (this[l[0]] = l[1].call(this, d))
                          : (this[l[0]] = l[1])
                        : l.length === 3
                          ? typeof l[1] === o && !(l[1].exec && l[1].test)
                            ? (this[l[0]] = d ? l[1].call(this, d, l[2]) : r)
                            : (this[l[0]] = d ? d.replace(l[1], l[2]) : r)
                          : l.length === 4 &&
                            (this[l[0]] = d
                              ? l[3].call(this, d.replace(l[1], l[2]))
                              : r)
                      : (this[l] = d || r));
            n += 2;
          }
        },
        L = function (e, t) {
          for (var n in t)
            if (typeof t[n] == c && t[n].length > 0) {
              for (var i = 0; i < t[n].length; i++)
                if (N(t[n][i], e)) return n === `?` ? r : n;
            } else if (N(t[n], e)) return n === `?` ? r : n;
          return t.hasOwnProperty(`*`) ? t[`*`] : e;
        },
        xe = {
          "1.0": `/8`,
          1.2: `/1`,
          1.3: `/3`,
          "2.0": `/412`,
          "2.0.2": `/416`,
          "2.0.3": `/417`,
          "2.0.4": `/419`,
          "?": `/`,
        },
        Se = {
          ME: `4.90`,
          "NT 3.11": `NT3.51`,
          "NT 4.0": `NT4.0`,
          2e3: `NT 5.0`,
          XP: [`NT 5.1`, `NT 5.2`],
          Vista: `NT 6.0`,
          7: `NT 6.1`,
          8: `NT 6.2`,
          8.1: `NT 6.3`,
          10: [`NT 6.4`, `NT 10.0`],
          RT: `ARM`,
        },
        Ce = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [h, [f, `Chrome`]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [h, [f, `Edge`]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [f, h],
            [/opios[\/ ]+([\w\.]+)/i],
            [h, [f, ue + ` Mini`]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [h, [f, ue + ` GX`]],
            [/\bopr\/([\w\.]+)/i],
            [h, [f, ue]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [h, [f, `Baidu`]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [h, [f, `Maxthon`]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [f, h],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [h, [f, `Quark`]],
            [/\bddg\/([\w\.]+)/i],
            [h, [f, `DuckDuckGo`]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [h, [f, `UC` + te]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [h, [f, `WeChat`]],
            [/konqueror\/([\w\.]+)/i],
            [h, [f, `Konqueror`]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [h, [f, `IE`]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [h, [f, `Yandex`]],
            [/slbrowser\/([\w\.]+)/i],
            [h, [f, `Smart Lenovo ` + te]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1 Secure ` + te], h],
            [/\bfocus\/([\w\.]+)/i],
            [h, [f, ie + ` Focus`]],
            [/\bopt\/([\w\.]+)/i],
            [h, [f, ue + ` Touch`]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [h, [f, `Coc Coc`]],
            [/dolfin\/([\w\.]+)/i],
            [h, [f, `Dolphin`]],
            [/coast\/([\w\.]+)/i],
            [h, [f, ue + ` Coast`]],
            [/miuibrowser\/([\w\.]+)/i],
            [h, [f, `MIUI` + ve]],
            [/fxios\/([\w\.-]+)/i],
            [h, [f, ie]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [h, [f, `360`]],
            [/\b(qq)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1Browser`], h],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[f, /(.+)/, `$1` + ve], h],
            [/samsungbrowser\/([\w\.]+)/i],
            [h, [f, A + ` Internet`]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [h, [f, `Sogou Explorer`]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[f, `Sogou Mobile`], h],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [f, h],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [f],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [h, f],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[f, he], h],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /(daum)apps[\/ ]([\w\.]+)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [f, h],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [h, [f, `GSA`]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [h, [f, `TikTok`]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [h, [f, ne + ` Headless`]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[f, ne + ` WebView`], h],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [h, [f, `Android ` + te]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [f, h],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [h, [f, `Mobile Safari`]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [h, f],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [f, [h, L, xe]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [f, h],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[f, `Netscape`], h],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [f, h],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [h, [f, ie + ` Reality`]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /\b(links) \(([\w\.]+)/i,
            ],
            [f, [h, /_/g, `.`]],
            [/(cobalt)\/([\w\.]+)/i],
            [f, [h, /master.|lts./, ``]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[g, `amd64`]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[g, `ia32`]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[g, `arm64`]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[g, `armhf`]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[g, `arm`]],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [[g, /ower/, a, P]],
            [/ sun4\w[;\)]/i],
            [[g, `sparc`]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            ],
            [[g, P]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [d, [m, A], [p, y]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [d, [m, A], [p, v]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [d, [m, w], [p, v]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [d, [m, w], [p, y]],
            [/(macintosh);/i],
            [d, [m, w]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [d, [m, fe], [p, v]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [d, [m, E], [p, y]],
            [/honor([-\w ]+)[;\)]/i],
            [d, [m, E], [p, v]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [d, [m, oe], [p, y]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [d, [m, oe], [p, v]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [d, /_/g, ` `],
              [m, j],
              [p, y],
            ],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              / ([\w ]+) miui\/v?\d/i,
            ],
            [
              [d, /_/g, ` `],
              [m, j],
              [p, v],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [d, [m, de], [p, v]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [d, [m, L, { OnePlus: [`304`, `403`, `203`], "*": de }], [p, y]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [d, [m, `Vivo`], [p, v]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [d, [m, `Realme`], [p, v]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [d, [m, k], [p, v]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [d, [m, k], [p, y]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [d, [m, O], [p, y]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [d, [m, O], [p, v]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [d, [m, D], [p, y]],
            [/(nokia) (t[12][01])/i],
            [m, d, [p, y]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*))/i,
            ],
            [
              [d, /_/g, ` `],
              [p, v],
              [m, `Nokia`],
            ],
            [/(pixel (c|tablet))\b/i],
            [d, [m, ae], [p, y]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [d, [m, ae], [p, v]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [d, [m, pe], [p, v]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [d, `Xperia Tablet`],
              [m, pe],
              [p, y],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [d, [m, le], [p, v]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [d, [m, C], [p, y]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [d, /(.+)/g, `Fire Phone $1`],
              [m, C],
              [p, v],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [d, m, [p, y]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [d, [m, ee], [p, v]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [d, [m, T], [p, y]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [d, [m, T], [p, v]],
            [/(nexus 9)/i],
            [d, [m, `HTC`], [p, y]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [m, [d, /_/g, ` `], [p, v]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [d, [m, `TCL`], [p, y]],
            [/(itel) ((\w+))/i],
            [
              [m, P],
              d,
              [p, L, { tablet: [`p10001l`, `w7001`], "*": `mobile` }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [d, [m, `Acer`], [p, y]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [d, [m, `Meizu`], [p, v]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [d, [m, `Ulefone`], [p, v]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [d, [m, `Energizer`], [p, v]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [d, [m, `Cat`], [p, v]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [d, [m, `Smartfren`], [p, v]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [d, [m, `Nothing`], [p, v]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [d, [m, `Archos`], [p, y]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [d, [m, `Archos`], [p, v]],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [m, d, [p, y]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [m, d, [p, v]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [m, d, [p, y]],
            [/(surface duo)/i],
            [d, [m, se], [p, y]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [d, [m, `Fairphone`], [p, v]],
            [/(u304aa)/i],
            [d, [m, `AT&T`], [p, v]],
            [/\bsie-(\w*)/i],
            [d, [m, `Siemens`], [p, v]],
            [/\b(rct\w+) b/i],
            [d, [m, `RCA`], [p, y]],
            [/\b(venue[\d ]{2,7}) b/i],
            [d, [m, `Dell`], [p, y]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [d, [m, `Verizon`], [p, y]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [d, [m, `Barnes & Noble`], [p, y]],
            [/\b(tm\d{3}\w+) b/i],
            [d, [m, `NuVision`], [p, y]],
            [/\b(k88) b/i],
            [d, [m, `ZTE`], [p, y]],
            [/\b(nx\d{3}j) b/i],
            [d, [m, `ZTE`], [p, v]],
            [/\b(gen\d{3}) b.+49h/i],
            [d, [m, `Swiss`], [p, v]],
            [/\b(zur\d{3}) b/i],
            [d, [m, `Swiss`], [p, y]],
            [/\b((zeki)?tb.*\b) b/i],
            [d, [m, `Zeki`], [p, y]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[m, `Dragon Touch`], d, [p, y]],
            [/\b(ns-?\w{0,9}) b/i],
            [d, [m, `Insignia`], [p, y]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [d, [m, `NextBook`], [p, y]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[m, `Voice`], d, [p, v]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[m, `LvTel`], d, [p, v]],
            [/\b(ph-1) /i],
            [d, [m, `Essential`], [p, v]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [d, [m, `Envizen`], [p, y]],
            [/\b(trio[-\w\. ]+) b/i],
            [d, [m, `MachSpeed`], [p, y]],
            [/\btu_(1491) b/i],
            [d, [m, `Rotor`], [p, y]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [d, [m, ce], [p, y]],
            [/(sprint) (\w+)/i],
            [m, d, [p, v]],
            [/(kin\.[onetw]{3})/i],
            [
              [d, /\./g, ` `],
              [m, se],
              [p, v],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [d, [m, me], [p, y]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [d, [m, me], [p, v]],
            [/smart-tv.+(samsung)/i],
            [m, [p, b]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [d, /^/, `SmartTV`],
              [m, A],
              [p, b],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [m, O],
              [p, b],
            ],
            [/(apple) ?tv/i],
            [m, [d, w + ` TV`], [p, b]],
            [/crkey/i],
            [
              [d, ne + `cast`],
              [m, ae],
              [p, b],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [d, [m, C], [p, b]],
            [/(shield \w+ tv)/i],
            [d, [m, ce], [p, b]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [d, [m, fe], [p, b]],
            [/(bravia[\w ]+)( bui|\))/i],
            [d, [m, pe], [p, b]],
            [/(mi(tv|box)-?\w+) bui/i],
            [d, [m, j], [p, b]],
            [/Hbbtv.*(technisat) (.*);/i],
            [m, d, [p, b]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [m, F],
              [d, F],
              [p, b],
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [d, [p, b]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[p, b]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [m, d, [p, _]],
            [/droid.+; (shield)( bui|\))/i],
            [d, [m, ce], [p, _]],
            [/(playstation \w+)/i],
            [d, [m, pe], [p, _]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [d, [m, se], [p, _]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [d, [m, A], [p, x]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [m, d, [p, x]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [d, [m, de], [p, x]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [d, [m, w], [p, x]],
            [/(opwwe\d{3})/i],
            [d, [m, le], [p, x]],
            [/(moto 360)/i],
            [d, [m, k], [p, x]],
            [/(smartwatch 3)/i],
            [d, [m, pe], [p, x]],
            [/(g watch r)/i],
            [d, [m, O], [p, x]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [d, [m, me], [p, x]],
            [/droid.+; (glass) \d/i],
            [d, [m, ae], [p, x]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [m, d, [p, x]],
            [/; (quest( \d| pro)?)/i],
            [d, [m, he], [p, x]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [m, [p, S]],
            [/(aeobc)\b/i],
            [d, [m, C], [p, S]],
            [/(homepod).+mac os/i],
            [d, [m, w], [p, S]],
            [/windows iot/i],
            [[p, S]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [d, [p, v]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [d, [p, y]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[p, y]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[p, v]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [d, [m, `Generic`]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [h, [f, re + `HTML`]],
            [/(arkweb)\/([\w\.]+)/i],
            [f, h],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [h, [f, `Blink`]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [f, h],
            [/ladybird\//i],
            [[f, `LibWeb`]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [h, f],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [f, h],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [f, [h, L, Se]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [h, L, Se],
              [f, `Windows`],
            ],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [h, /_/g, `.`],
              [f, `iOS`],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [f, _e],
              [h, /_/g, `.`],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [h, f],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[f, /(.+)/, `$1 Touch`], h],
            [
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
            ],
            [f, h],
            [/\(bb(10);/i],
            [h, [f, ee]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [h, [f, `Symbian`]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [h, [f, ie + ` OS`]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [h, [f, `webOS`]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [h, [f, `watchOS`]],
            [/crkey\/([\d\.]+)/i],
            [h, [f, ne + `cast`]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[f, ge], h],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [f, h],
            [/(sunos) ?([\w\.\d]*)/i],
            [[f, `Solaris`], h],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [f, h],
          ],
        },
        R = function (e, t) {
          if ((typeof e == c && ((t = e), (e = r)), !(this instanceof R)))
            return new R(e, t).getResult();
          var i = typeof n !== s && n.navigator ? n.navigator : r,
            _ = e || (i && i.userAgent ? i.userAgent : a),
            b = i && i.userAgentData ? i.userAgentData : r,
            x = t ? M(Ce, t) : Ce,
            S = i && i.userAgent == _;
          return (
            (this.getBrowser = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                I.call(e, _, x.browser),
                (e[u] = be(e[h])),
                S &&
                  i &&
                  i.brave &&
                  typeof i.brave.isBrave == o &&
                  (e[f] = `Brave`),
                e
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return ((e[g] = r), I.call(e, _, x.cpu), e);
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[m] = r),
                (e[d] = r),
                (e[p] = r),
                I.call(e, _, x.device),
                S && !e[p] && b && b.mobile && (e[p] = v),
                S &&
                  e[d] == `Macintosh` &&
                  i &&
                  typeof i.standalone !== s &&
                  i.maxTouchPoints &&
                  i.maxTouchPoints > 2 &&
                  ((e[d] = `iPad`), (e[p] = y)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return ((e[f] = r), (e[h] = r), I.call(e, _, x.engine), e);
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                I.call(e, _, x.os),
                S &&
                  !e[f] &&
                  b &&
                  b.platform &&
                  b.platform != `Unknown` &&
                  (e[f] = b.platform
                    .replace(/chrome os/i, ge)
                    .replace(/macos/i, _e)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return _;
            }),
            (this.setUA = function (e) {
              return (
                (_ = typeof e == l && e.length > 500 ? F(e, 500) : e), this
              );
            }),
            this.setUA(_),
            this
          );
        };
      ((R.VERSION = i),
        (R.BROWSER = ye([f, h, u])),
        (R.CPU = ye([g])),
        (R.DEVICE = ye([d, m, p, _, v, b, y, x, S])),
        (R.ENGINE = R.OS = ye([f, h])),
        typeof e === s
          ? typeof define === o && define.amd
            ? define(function () {
                return R;
              })
            : typeof n !== s && (n.UAParser = R)
          : (typeof t !== s && t.exports && (e = t.exports = R),
            (e.UAParser = R)));
      var z = typeof n !== s && (n.jQuery || n.Zepto);
      if (z && !z.ua) {
        var B = new R();
        ((z.ua = B.getResult()),
          (z.ua.get = function () {
            return B.getUA();
          }),
          (z.ua.set = function (e) {
            B.setUA(e);
            var t = B.getResult();
            for (var n in t) z.ua[n] = t[n];
          }));
      }
    })(typeof window == `object` ? window : n);
  })(),
  It = `viqEyBlMfbY-`,
  Lt = `shgsJDaY3CY-`,
  Rt = `jYhMQWJDOI0-`,
  zt = `hjaE7AQsOK0-`,
  Bt = `xKL55sYr9nU-`,
  Z = `UhBY1FfjFrU-`,
  Vt = `qyZsB6JuVjY-`,
  Ht = `saDXcTipZ7A-`,
  Ut = `VLFX-mKqLNw-`,
  Wt = `YRwct28ezfU-`,
  Gt = `epOqB4sJsvo-`,
  Kt = `VXFw-xEFbdo-`,
  qt = `rkTP-9I7urk-`,
  Jt = `fz9qBoc1vQM-`,
  Yt = `tjO6BKRl12o-`,
  Xt = `ayE79te7Zzo-`,
  Zt = `_8EDXdeI-GJU-`,
  Qt = `L4f9mqbFIEU-`,
  $t = `G87uOZgrnCw-`,
  en = `CtCaOVl6dE0-`,
  tn = `_0tit-21mIgs-`,
  nn = `C7BpVBVjnOM-`,
  rn = `N-1Yp4EnJ8k-`,
  an = `urfarZbyAYI-`,
  on = `p-1G-Tb-pSA-`,
  sn = s(() => {
    let e = X.Get(),
      t = un(),
      n = (e) => {
        ee((0, Y.jsx)(Sn, {}), T(e));
      },
      r = Date.now() / 1e3,
      i = ln(e),
      a = e.GetTwoFactorStatus(),
      o = null;
    switch (a.steamguard_scheme) {
      default:
      case 0:
        o = `#accountpreferences_revoked_devices_revoked_description`;
        break;
      case 1:
        o = `#accountpreferences_revoked_devices_revoked_description_email`;
        break;
      case 2:
        o = `#accountpreferences_revoked_devices_revoked_description_auth`;
    }
    let s = [],
      c = [],
      l = [];
    for (let n of e.GetActiveDevices()) {
      let e = n.logged_in && n.last_seen?.time > r - 900,
        o = n.effective_token_state == 5 ? Bt : null,
        u = (0, Y.jsx)(
          fn,
          {
            className: o,
            device: n,
            bActiveNow: e,
            bCurrentDevice: t == n.token_id,
            strActiveCountry: i,
            msgTwoFactorStatus: a,
          },
          n.token_id,
        );
      n.platform_type == 4 ? l.push(u) : e ? s.push(u) : c.push(u);
    }
    let u = e
      .GetRevokedDevices()
      .map((e) =>
        (0, Y.jsx)(
          fn,
          {
            className: Vt,
            device: e,
            strActiveCountry: i,
            msgTwoFactorStatus: a,
          },
          e.token_id,
        ),
      );
    return (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsx)(`div`, {
          className: E(It, `account_header_line noicon`),
          children: (0, Y.jsx)(`div`, {
            children: N(`#accountpreferences_authorized_devices_header`),
          }),
        }),
        (0, Y.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, Y.jsx)(`div`, {
              className: Lt,
              children: F(
                `#accountpreferences_authorized_devices_description`,
                (0, Y.jsx)(`p`, {}),
              ),
            }),
            (0, Y.jsxs)(`div`, {
              className: Rt,
              children: [
                (0, Y.jsx)(cn, {
                  elHeader: (0, Y.jsxs)(`div`, {
                    className: en,
                    children: [
                      (0, Y.jsx)(Se, { className: tn }),
                      N(`#accountpreferences_authorized_device_active_now`),
                    ],
                  }),
                  rgDevices: s,
                }),
                (0, Y.jsx)(cn, {
                  elHeader: N(
                    `#accountpreferences_authorized_devices_recentseen_heading`,
                  ),
                  rgDevices: c,
                }),
                (0, Y.jsx)(cn, {
                  elHeader: N(
                    `#accountpreferences_authorized_devices_pat_heading`,
                  ),
                  rgDevices: l,
                }),
                (0, Y.jsx)(`div`, {
                  className: zt,
                  children: (0, Y.jsx)(`div`, {
                    className: an,
                    children: (0, Y.jsx)(b, {
                      className: on,
                      onClick: n,
                      children: N(
                        `#accountpreferences_authorized_devices_remove_button`,
                      ),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        u?.length > 0 &&
          (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(`div`, {
                className: E(`viqEyBlMfbY-`, `account_header_line noicon`),
                children: (0, Y.jsx)(`div`, {
                  children: N(
                    `#accountpreferences_revoked_devices_revoked_header`,
                  ),
                }),
              }),
              (0, Y.jsxs)(`div`, {
                className: `account_settings_container`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `shgsJDaY3CY-`,
                    children: F(o, (0, Y.jsx)(`p`, {})),
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `jYhMQWJDOI0-`,
                    children: (0, Y.jsx)(cn, { rgDevices: u }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  });
function cn(e) {
  let { rgDevices: t, elHeader: n } = e;
  return t.length == 0
    ? null
    : (0, Y.jsxs)(`div`, { className: zt, children: [n && n, t] });
}
function ln(e) {
  let t = Date.now() / 1e3;
  return bn(
    e
      .GetActiveDevices()
      .find((e) => e.logged_in && e.last_seen?.time > t - 900) ??
      e.GetActiveDevices()[0],
  ).country;
}
function un() {
  let [e] = H.useState(() => L(`requesting_token_id`, `application_config`));
  return e;
}
function dn(e, t) {
  return t?.state > 0 && e.token_id && e.token_id == t?.last_seen_auth_token_id;
}
function fn(e) {
  let {
      device: t,
      bActiveNow: n,
      bCurrentDevice: r,
      strActiveCountry: i,
      className: a,
      msgTwoFactorStatus: o,
      bShowAuthenticatorActivity: s,
    } = e,
    [c, l] = (0, H.useState)(!1),
    u = H.useRef(void 0);
  H.useEffect(() => {
    u.current?.BHasFocus() && u.current?.Node().ForceMeasureFocusRing();
  }, [c]);
  let d = yn(t);
  d.length &&
    (d = ` ${N(`#accountpreferences_authorized_devices_name_separator`)} "${d}"`);
  let f = bn(t),
    p = null;
  p =
    !f.country || !i || i == f.country
      ? (0, Y.jsx)(`div`, { className: void 0, children: f.location })
      : (0, Y.jsx)(ce, {
          className: void 0,
          toolTipContent: N(
            `#accountpreferences_authorized_devices_suspicous_tooltip`,
          ),
          direction: `top`,
          children: (0, Y.jsxs)(`div`, {
            className: qt,
            children: [f.location, (0, Y.jsx)(Oe, {})],
          }),
        });
  let m = dn(t, o);
  return (0, Y.jsxs)(
    k,
    {
      className: E(Ht, n && `fXJ1YocT7BI-`, a),
      navRef: u,
      onActivate: () => l(!c),
      children: [
        (0, Y.jsx)(vn, { device: t, bHasAuthenticator: m }),
        (0, Y.jsxs)(`div`, {
          className: Ut,
          children: [
            (0, Y.jsxs)(`div`, {
              className: Wt,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: Gt,
                  children: [
                    (0, Y.jsxs)(`div`, {
                      className: Kt,
                      children: [(0, Y.jsx)(xn, { device: t }), d],
                    }),
                    r &&
                      (0, Y.jsx)(`div`, {
                        className: `_9iz0N0Ekqfc-`,
                        children: N(
                          `#accountpreferences_authorized_devices_this_device`,
                        ),
                      }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: Zt,
                  children: [
                    p,
                    (0, Y.jsx)(`div`, {
                      className: Qt,
                      children: (0, Y.jsx)(b, {
                        className: E({ [Qt]: !0, [$t]: c }),
                        children: (0, Y.jsx)(xe, { direction: `down` }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, Y.jsx)(pn, {
              device: t,
              bActiveNow: n,
              msgTwoFactorStatus: s && o,
            }),
            c && (0, Y.jsx)(gn, { device: t }),
          ],
        }),
      ],
    },
    `id_` + t.token_id,
  );
}
function pn(e) {
  let { device: t, bActiveNow: n, msgTwoFactorStatus: r } = e;
  return r?.state > 0
    ? (0, Y.jsx)(mn, {
        msgTwoFactorUsage: r.usages?.length > 0 ? r.usages[0] : null,
      })
    : n
      ? null
      : (0, Y.jsx)(hn, { device: t });
}
function mn(e) {
  let { msgTwoFactorUsage: t } = e;
  if (!t || !t.time) return null;
  let n = be(t.time),
    r = null;
  if (t.usage_type == 3) r = N(`#authorized_devices_lasttwofactor_login`, n);
  else if (t.usage_type == 2) {
    let e = t.confirmation_action == 1 ? `_allow` : `_cancel`;
    switch (t.confirmation_type) {
      case 2:
        r = N(`#authorized_devices_lasttwofactor_confirmation_trade${e}`, n);
        break;
      case 3:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_marketlisting${e}`,
          n,
        );
        break;
      case 5:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_phonechange${e}`,
          n,
        );
        break;
      case 6:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_accountrecovery${e}`,
          n,
        );
        break;
      case 7:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_buildchange${e}`,
          n,
        );
        break;
      case 8:
        r = N(`#authorized_devices_lasttwofactor_confirmation_adduser${e}`, n);
        break;
      case 9:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_registerapikey${e}`,
          n,
        );
        break;
      case 10:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${e}`,
          n,
        );
        break;
      case 11:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${e}`,
          n,
        );
        break;
      case 12:
        r = N(
          `#authorized_devices_lasttwofactor_confirmation_marketpurchase${e}`,
          n,
        );
        break;
      case 13:
        r = N(`#authorized_devices_lasttwofactor_confirmation_refund${e}`, n);
        break;
      default:
        r = N(`#authorized_devices_lasttwofactor_confirmation_unknown${e}`, n);
    }
  }
  return r
    ? (0, Y.jsx)(`div`, {
        className: Jt,
        children: (0, Y.jsx)(`div`, { children: r }),
      })
    : null;
}
function hn(e) {
  let { device: t } = e,
    n =
      t.first_seen?.time &&
      t.first_seen.time + ae.PerWeek * 2 > Date.now() / 1e3,
    r = t.effective_token_state == 5,
    i = N(`#accountpreferences_authorized_devices_last_seen_max`);
  return (
    t.last_seen?.time
      ? (i = be(t.last_seen.time))
      : t.time_updated &&
        t.time_updated > Math.floor(Date.now() / 1e3 - 7776e3) &&
        (i = be(t.time_updated)),
    (0, Y.jsxs)(`div`, {
      className: Jt,
      children: [
        (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(`span`, {
              className: Yt,
              children: N(
                `#accountpreferences_authorized_devices_last_seen_title`,
              ),
            }),
            i,
            r &&
              (0, Y.jsxs)(`span`, {
                className: `tjO6BKRl12o-`,
                children: [
                  ` - `,
                  N(`#accountpreferences_authorized_devices_state_signedout`),
                ],
              }),
          ],
        }),
        n &&
          (0, Y.jsx)(`div`, {
            className: `YTM6P3pGOLY-`,
            children: A(
              `#accountpreferences_authorized_devices_new_device`,
              (0, Y.jsx)(`a`, {
                href: V.HELP_BASE_URL + `wizard/HelpWithAccountStolen`,
                onClick: (e) => {
                  e.stopPropagation();
                },
              }),
            ),
          }),
      ],
    })
  );
}
function gn(e) {
  let { device: t } = e;
  return (0, Y.jsx)(`div`, {
    className: Xt,
    children: N(_n(t), ue(t.first_seen.time) + ` @ ` + fe(t.first_seen.time)),
  });
}
function _n(e) {
  let t = e.authentication_type,
    n = e.auth_type;
  if (t == 2) return `#authorized_devices_default_qr`;
  if (e.effective_token_state == 5)
    return `#authorized_devices_remembered_machine`;
  switch (n) {
    case 2:
      return `#authorized_devices_emailcode_password`;
    case 3:
      return `#authorized_devices_devicecode_password`;
    case 4:
    case 5:
      return `#authorized_devices_mobileconf_password`;
    case 6:
      return `#authorized_devices_machinetoken_password`;
    default:
      return `#authorized_devices_default_password`;
  }
}
function vn(e) {
  let { device: t, bHasAuthenticator: n } = e,
    r = t.effective_token_state == 5,
    i = null;
  if (t.platform_type == 2)
    i = r
      ? (0, Y.jsx)(Te, { className: E(Z, Bt) })
      : (0, Y.jsx)(R, { className: Z });
  else if (t.platform_type == 4) i = (0, Y.jsx)(pe, { className: Z });
  else if (
    t.platform_type == 1 &&
    (t.gaming_device_type === 544 ||
      t.gaming_device_type == 545 ||
      t.gaming_device_type == 541)
  )
    i = r
      ? (0, Y.jsx)(P, { className: E(Z, Bt) })
      : (0, Y.jsx)(y, { className: Z });
  else
    switch (t.os_platform) {
      case m.k_EPlatformTypeWin32:
      case m.k_EPlatformTypeWin64:
      case m.k_EPlatformTypeOSX:
        i = r
          ? (0, Y.jsx)(me, { className: E(Z, Bt) })
          : (0, Y.jsx)(_e, { className: Z });
        break;
      case m.k_EPlatformTypeAndroid32:
      case m.k_EPlatformTypeAndroid64:
      case m.k_EPlatformTypeLinux32:
      case m.k_EPlatformTypeLinux64:
        i = (0, Y.jsx)(B, { className: Z });
        break;
      case m.k_EPlatformTypeIOS32:
      case m.k_EPlatformTypeIOS64:
        i = (0, Y.jsx)(B, { className: Z });
    }
  return n
    ? (0, Y.jsxs)(`div`, {
        className: nn,
        children: [i, (0, Y.jsx)(`img`, { src: Nt, className: rn })],
      })
    : i;
}
function yn(e) {
  if (e.platform_type == 2) {
    let t = new Ft.UAParser(e.token_description).getResult();
    return t.browser.name && t.os.name
      ? t.browser.name == `WebKit`
        ? t.os.name
        : N(
            `#accountpreferences_authorized_devices_browser_on_os`,
            t.browser.name,
            t.os.name,
          )
      : N(`#accountpreferences_authorized_devices_browser_unmatched`);
  }
  return e.token_description;
}
function bn(e) {
  let t = e.last_seen ?? e.first_seen;
  if (t) {
    if (t.country && !w(V.EREALM))
      return {
        location: `${t.city ? t.city + `, ` : ``}${t.country}`,
        country: t.country,
      };
    if (t.city) return { location: t.city, country: t.country };
  }
  return {
    location: N(`#accountpreferences_authorized_devices_loc_unknown`),
    country: ``,
  };
}
function xn(e) {
  let { device: t } = e;
  switch (t.platform_type) {
    case 3:
      return N(`#accountpreferences_authorized_devices_type_mobile`);
    case 1:
      return t.gaming_device_type === 544
        ? N(`#accountpreferences_authorized_devices_type_steamdeck`)
        : t.gaming_device_type == 545
          ? N(`#accountpreferences_authorized_devices_type_legiongos`)
          : t.gaming_device_type == 541
            ? N(`#accountpreferences_authorized_devices_type_steamos`)
            : N(`#accountpreferences_authorized_devices_type_desktop`);
    case 2:
      return N(`#accountpreferences_authorized_devices_type_browser`);
    case 4:
      return N(`#accountpreferences_authorized_devices_type_pat`);
    default:
      return N(`#accountpreferences_authorized_devices_type_unknown`);
  }
}
function Sn(e) {
  let { closeModal: t } = e;
  return (0, Y.jsx)(se, {
    onEscKeypress: t,
    children: (0, Y.jsxs)(Ce, {
      children: [
        (0, Y.jsx)(de, {
          children: N(`#authorized_devices_deauthorize_title`),
        }),
        (0, Y.jsxs)(I, {
          children: [
            (0, Y.jsx)(he, {
              children: N(`#authorized_devices_deauthorize_msg`),
            }),
            (0, Y.jsx)(ye, {
              children: (0, Y.jsx)(Ae, {
                strOKText: N(`#authorized_devices_deauthorize_proceed`),
                onOK: async () => {
                  let e = new FormData();
                  (e.set(`action`, `deauthorize`),
                    e.set(`sessionid`, j()),
                    await Pe.default.post(
                      V.STORE_BASE_URL + `twofactor/manage_action`,
                      e,
                    ));
                  let t = document.createElement(`form`);
                  ((t.method = `POST`),
                    (t.action = V.STORE_BASE_URL + `logout`));
                  let n = document.createElement(`input`);
                  ((n.type = `hidden`),
                    (n.name = `sessionid`),
                    (n.value = j()),
                    t.appendChild(n),
                    document.body.appendChild(t),
                    t.submit());
                },
                onCancel: t,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Cn = `jUbJDWS4KbM-`,
  wn = `_0KS5vxiuuas-`,
  Tn = `RKNvgkD9-fw-`,
  En = `fYndRKZmMkc-`,
  Dn = `h8-4lFF5M58-`,
  On = `xGrGbCIFdZU-`,
  kn = `_5P46ZCZGTXo-`,
  An = `-NSP4bX00mY-`,
  jn = `FDb0NIXOm0A-`,
  Mn = `FdmRCehAGYI-`,
  Nn = `TJDzvw9F008-`,
  Pn = `UdRjmwOXHfE-`,
  Fn = `M0mNJBjOgYk-`,
  In = `_9fLN420LJa4-`,
  Ln = `_1v5wNzaTsw8-`,
  Rn = `q-crQp6szwI-`,
  zn = `n8evf-z8Ij8-`,
  Bn = `mTLl2oNfUQ4-`,
  Vn = `wiKtgWcwiPk-`,
  Hn = `_5Uqj-ZJajHU-`,
  Un = `kzUM4acS-oo-`,
  Wn = `Ik-mDI6yuZA-`,
  Gn = `_8k8bd7Cwz7o-`,
  Kn = `_7-ZGCcZvb7s-`,
  qn = `S--CyhEr6Jk-`;
function Jn(e) {
  return (0, Y.jsxs)(`div`, {
    children: [(0, Y.jsx)(Yn, {}), (0, Y.jsx)(sn, {})],
  });
}
function Yn(e) {
  let t = V.HELP_BASE_URL + `faqs/view/7EFD-3CAE-64D3-1C31`,
    n = X.Get(),
    r = n.GetTwoFactorStatus()?.steamguard_scheme == 2;
  return (0, Y.jsxs)(Y.Fragment, {
    children: [
      (0, Y.jsx)(`div`, {
        className: `account_header_line`,
        children: (0, Y.jsxs)(`div`, {
          children: [
            (0, Y.jsx)(re, { className: Cn }),
            N(`#youraccount_account_security`),
          ],
        }),
      }),
      (0, Y.jsxs)(`div`, {
        className: E(wn, `account_settings_container`),
        children: [
          (0, Y.jsx)(`div`, {
            children: A(
              `#accountpreferences_account_security_description`,
              (0, Y.jsx)(M, { target: `_blank`, href: t }),
            ),
          }),
          r
            ? (0, Y.jsx)(Xn, {
                msgTwoFactorStatus: n.GetTwoFactorStatus(),
                strFaqUrl: t,
              })
            : (0, Y.jsx)(Zn, { strFaqUrl: t }),
          (0, Y.jsxs)(`div`, {
            className: Tn,
            children: [
              (0, Y.jsx)($n, {}),
              (0, Y.jsx)(`div`, { className: En }),
              (0, Y.jsx)(tr, {}),
              (0, Y.jsx)(er, { msgTwoFactorStatus: n.GetTwoFactorStatus() }),
              r && (0, Y.jsx)(nr, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function Xn(e) {
  let { msgTwoFactorStatus: t, strFaqUrl: n } = e,
    r = X.Get(),
    i = ln(r),
    a = un(),
    o = [...(r.GetActiveDevices() ?? []), ...(r.GetActiveDevices() ?? [])],
    s = null;
  return (
    t?.last_seen_auth_token_id &&
      ((s = o.find((e) => e.token_id === t.last_seen_auth_token_id)),
      a?.length > 0 && s?.token_id),
    (0, Y.jsxs)(`div`, {
      children: [
        (0, Y.jsxs)(`div`, {
          className: jn,
          children: [
            (0, Y.jsx)(`img`, { className: Nn, src: Nt }),
            (0, Y.jsx)(`div`, {
              className: Mn,
              children: N(`#accountpreferences_account_security_steamguard`),
            }),
            (0, Y.jsx)(`div`, {
              className: Pn,
              children: (0, Y.jsx)(M, {
                href: V.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                children: N(
                  `#accountpreferences_account_security_steamguard_remove`,
                ),
              }),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: Fn,
          children: [
            !!s &&
              (0, Y.jsxs)(Y.Fragment, {
                children: [
                  (0, Y.jsx)(fn, {
                    className: `-jL8shO-BT4-`,
                    device: s,
                    strActiveCountry: i,
                    msgTwoFactorStatus: t,
                    bShowAuthenticatorActivity: !0,
                  }),
                  (0, Y.jsx)(`div`, { className: `fYndRKZmMkc-` }),
                ],
              }),
            (0, Y.jsxs)(`div`, {
              className: In,
              children: [
                (0, Y.jsx)($, {
                  strLabel: N(`#accountpreferences_account_security_move`),
                  href: V.HELP_BASE_URL + `faqs/view/29A9-9EEE-09F0-75F9`,
                }),
                (0, Y.jsx)($, {
                  strLabel: N(`#accountpreferences_account_security_help_lost`),
                  href: V.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                }),
                (0, Y.jsx)(`div`, {
                  className: Ln,
                  children: (0, Y.jsx)(M, {
                    href: n,
                    target: `_blank`,
                    children: N(
                      `#accountpreferences_account_security_view_faq`,
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Zn(e) {
  let { strFaqUrl: t } = e,
    n = X.Get().GetLatestAndroidAppVersion();
  return (0, Y.jsxs)(`div`, {
    className: Rn,
    children: [
      (0, Y.jsxs)(`div`, {
        className: jn,
        children: [
          (0, Y.jsx)(`img`, { className: Nn, src: Mt }),
          (0, Y.jsx)(`div`, {
            className: Mn,
            children: N(`#accountpreferences_account_security_no_steamguard`),
          }),
        ],
      }),
      (0, Y.jsx)(`div`, { className: En }),
      (0, Y.jsxs)(`div`, {
        className: zn,
        children: [
          (0, Y.jsxs)(`div`, {
            className: Hn,
            children: [
              (0, Y.jsxs)(`div`, {
                className: Bn,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: Vn,
                    children: A(
                      `#accountpreferences_account_security_get_app`,
                      (0, Y.jsx)(M, {
                        href: V.STORE_BASE_URL + `mobile#mobile_section`,
                      }),
                    ),
                  }),
                  (0, Y.jsx)(`div`, {
                    children: N(`#accountpreferences_account_security_scan_qr`),
                  }),
                ],
              }),
              (0, Y.jsx)(`img`, { src: Pt, className: Un }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: Wn,
            children: [
              (0, Y.jsx)(`div`, {
                children: N(
                  `#accountpreferences_account_security_mobile_os_reqs`,
                ),
              }),
              (0, Y.jsxs)(`div`, {
                className: Gn,
                children: [
                  (0, Y.jsx)(M, {
                    href: `https://itunes.apple.com/us/app/steam-mobile/id495369748`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, Y.jsx)(f, {
                      srcs: Qn(
                        V.IMG_URL +
                          `mobile/localizedimages/appleappstore/apple_store_`,
                        `.png`,
                      ),
                      className: Kn,
                    }),
                  }),
                  (0, Y.jsx)(M, {
                    href: `https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, Y.jsx)(f, {
                      srcs: Qn(
                        V.IMG_URL +
                          `mobile/localizedimages/googleplaystore/google_play_store_`,
                        `.png`,
                      ),
                      className: qn,
                    }),
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                children: A(
                  `#accountpreferences_account_security_apk_download`,
                  (0, Y.jsx)(`a`, {
                    href: `https://media.steampowered.com/apps/steam-android/steam-${n}.apk`,
                  }),
                ),
              }),
              (0, Y.jsx)(`div`, {
                children: (0, Y.jsx)(`a`, {
                  href: t,
                  target: `_blank`,
                  children: N(
                    `#accountpreferences_account_security_mobile_faq`,
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Qn(e, t) {
  let n = ge.GetLanguageFallback(V.LANGUAGE),
    r = [e + V.LANGUAGE + t];
  return (V.LANGUAGE != n && r.push(e + n + t), r);
}
function $n(e) {
  let t = X.Get(),
    n = V.IN_MOBILE_WEBVIEW;
  return (0, Y.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, Y.jsx)(Q, {
        strLabel: N(`#accountpreferences_account_security_account_name`),
        strText: t.GetAccountName(),
      }),
      (0, Y.jsx)($, {
        strLabel: N(`#accountpreferences_account_security_change_pass`),
        href:
          V.HELP_BASE_URL + `wizard/HelpChangePassword?redir=store/account/`,
        target: n ? `_blank` : void 0,
      }),
    ],
  });
}
function er(e) {
  let { msgTwoFactorStatus: t } = e,
    n = X.Get(),
    r = t.email_validated,
    i = t.steamguard_scheme == 1,
    a = V.IN_MOBILE_WEBVIEW;
  return (0, Y.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, Y.jsx)(Q, {
        strLabel: N(`#accountpreferences_account_security_email`),
        strText: n.GetEmailAddress(),
      }),
      (0, Y.jsx)(Q, {
        strLabel: N(`#accountpreferences_account_security_email_status`),
        strText: N(
          r ? `#youraccount_email_verified` : `#youraccount_email_unverified`,
        ),
      }),
      i &&
        (0, Y.jsx)(Q, {
          strLabel: N(`#accountpreferences_account_security_verification`),
          strText: N(`#accountpreferences_account_security_via_email`),
        }),
      (0, Y.jsxs)(`div`, {
        className: On,
        children: [
          (0, Y.jsx)($, {
            strLabel: N(`#accountpreferences_account_security_change_email`),
            href:
              V.HELP_BASE_URL + `wizard/HelpChangeEmail?redir=store/account/`,
            target: a ? `_blank` : void 0,
          }),
          i &&
            (0, Y.jsx)($, {
              strLabel: N(
                `#accountpreferences_account_security_remove_email_guard`,
              ),
              href: V.STORE_BASE_URL + `twofactor/manage`,
            }),
        ],
      }),
    ],
  });
}
function tr(e) {
  let t = X.Get(),
    n = N(`#accountpreferences_account_security_phone_none`);
  return (
    t.GetPhoneHint() &&
      (n = N(
        `#accountpreferences_account_security_phone_hint`,
        t.GetPhoneHint(),
      )),
    (0, Y.jsxs)(`div`, {
      className: Dn,
      children: [
        (0, Y.jsx)(Q, {
          strLabel: N(`#accountpreferences_account_security_phone`),
          strText: n,
        }),
        (0, Y.jsx)($, {
          strLabel: N(`#accountpreferences_account_security_manage_phone`),
          href: V.STORE_BASE_URL + `phone/manage`,
        }),
      ],
    })
  );
}
function nr(e) {
  return (0, Y.jsxs)(`div`, {
    className: Dn,
    children: [
      (0, Y.jsx)(Q, {
        strLabel: N(`#accountpreferences_account_security_backup_codes`),
      }),
      (0, Y.jsx)($, {
        strLabel: N(`#accountpreferences_account_security_get_backup_codes`),
        href: V.STORE_BASE_URL + `twofactor/emergency_codes`,
      }),
    ],
  });
}
function Q(e) {
  let { strLabel: t, strText: n } = e;
  return (0, Y.jsxs)(`div`, {
    children: [
      (0, Y.jsx)(`span`, { className: kn, children: t }),
      !!n && (0, Y.jsx)(`span`, { children: n }),
    ],
  });
}
function $(e) {
  let { strLabel: t, href: n, target: r } = e;
  return (0, Y.jsx)(`div`, {
    children: (0, Y.jsx)(M, { className: An, href: n, target: r, children: t }),
  });
}
var rr = H.lazy(() =>
    ne(
      () => import(`./chunk~25b8cff72c.js`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58,
      ]),
      import.meta.url,
    ),
  ),
  ir = {
    CookieSettings: () => `/cookiepreferences`,
    FamilyManagement: () => `/familymanagement`,
    SecurityDevices: () => `/authorizeddevices`,
    PlaytestInvites: () => `/playtestinvites`,
    Playtests: () => `/playtests`,
  },
  ar = (e) => {
    let t = e.match.url,
      n = ir;
    return (
      or(),
      (0, Y.jsxs)(r, {
        children: [
          (0, Y.jsx)(o, {
            path: `${t}${n.CookieSettings()}`,
            render: () =>
              (0, Y.jsx)(D, {
                config: { "cookie-preferences": () => (0, Y.jsx)(rt, {}) },
              }),
          }),
          (0, Y.jsx)(o, {
            path: `${t}${n.FamilyManagement()}`,
            render: () =>
              (0, Y.jsx)(D, {
                config: { "family-management": () => (0, Y.jsx)(rr, {}) },
              }),
          }),
          (0, Y.jsx)(o, {
            path: `${t}${n.SecurityDevices()}`,
            render: () =>
              (0, Y.jsx)(D, {
                config: { "security-devices": () => (0, Y.jsx)(Jn, {}) },
              }),
          }),
          (0, Y.jsx)(o, {
            path: `${t}${n.PlaytestInvites()}`,
            render: () =>
              (0, Y.jsx)(D, {
                config: {
                  "playtest-invites": () =>
                    (0, Y.jsx)(St, { bShowPlaytestOverview: !0 }),
                },
              }),
          }),
          (0, Y.jsx)(o, {
            path: `${t}${n.Playtests()}`,
            render: () =>
              (0, Y.jsx)(D, {
                config: { playtests: (e) => (0, Y.jsx)(jt, { ...e }) },
              }),
          }),
        ],
      })
    );
  };
function or() {
  let { hash: e } = n();
  (0, H.useEffect)(() => {
    if (e && e.length > 1) {
      let t = e.replace(`#`, ``),
        n = document.getElementById(t);
      n && n.scrollIntoView();
    }
  }, [e]);
}
export { ir as AccountPreferencesRoutes, ar as default };

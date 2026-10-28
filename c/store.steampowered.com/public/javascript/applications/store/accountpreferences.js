const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./familymanagement.js?contenthash=DL3s0SUP",
      "./rolldown-runtime.js?contenthash=DbX3T1YK",
      "./libraries.js?contenthash=b0JzZ9xY",
      "./storelink.js?contenthash=Dql-0jgv",
      "./main.js?contenthash=C1XpPKHE",
      "../../../css/applications/store/main.css?contenthash=DyWIOX_R",
      "../../../css/applications/store/storelink.css?contenthash=B4v8KZR3",
      "./saletags.js?contenthash=XY06AmAJ",
      "./usedataloader.client.js?contenthash=Dl9lGtP2",
      "./claninfo.js?contenthash=B2hbU8of",
      "./storeurl.js?contenthash=B8J0_fwK",
      "./modals.js?contenthash=0VSE8G4g",
      "./ostype.js?contenthash=CClq0pco",
      "../../../css/applications/store/ostype.css?contenthash=x1XGuNl0",
      "./microtrailerdisplay.js?contenthash=C2lq9zp9",
      "../../../css/applications/store/microtrailerdisplay.css?contenthash=Cfa2oe-r",
      "./ajaxhooks.js?contenthash=CK4aSccU",
      "./historyutils.js?contenthash=CF-ohd4O",
      "./throbber.js?contenthash=BIVX4x_C",
      "../../../css/applications/store/throbber.css?contenthash=B5cG3W4v",
      "./stringutils.js?contenthash=Dlrxs4RX",
      "./partnereventshared.module.js?contenthash=BdpFElnJ",
      "../../../css/applications/store/partnereventshared.css?contenthash=B7LNJQ8W",
      "./personautils.js?contenthash=BRh86Gag",
      "./csstransitionwrapper.js?contenthash=Cd-VOPP1",
      "../../../css/applications/store/csstransitionwrapper.css?contenthash=5k1i5yPG",
      "./remotedownloadhooks.js?contenthash=B8IpG7HK",
      "./steammessages_clan_pb.js?contenthash=CgnGPk6K",
      "../../../css/applications/store/saletags.css?contenthash=BLGiX0-W",
      "./moment.js?contenthash=DsR_Av1l",
      "./privateapps.js?contenthash=BNoX3rjG",
      "./playerstore.js?contenthash=49W-ihmu",
      "./persona.js?contenthash=t_ykaBsV",
      "./appinfostore.js?contenthash=Br7Wk--Y",
      "./appinfo.js?contenthash=BbEpvK7n",
      "./playerlinkdetailsdataloader.js?contenthash=VF03o6J3",
      "./storeitemhooks.js?contenthash=BVCecmSs",
      "./friendsstore.js?contenthash=DD0EjSh3",
      "./steammessages_friendslist_pb.js?contenthash=BdumltwJ",
      "./contentdescriptors.js?contenthash=CEVf8qOs",
      "./expanderbutton.js?contenthash=Cs7iQxEr",
      "../../../css/applications/store/expanderbutton.css?contenthash=7EgfjSu7",
      "./steammessages_familygroups_pb.js?contenthash=0A03Lw9G",
      "./familymanagementstore.js?contenthash=UwZGSOnt",
      "./steamavatar.js?contenthash=CGL45S7J",
      "./multisourceimage.js?contenthash=BVqKyLkc",
      "../../../css/applications/store/steamavatar.css?contenthash=BiEJmu6r",
      "./personanameandstatus.js?contenthash=Z5IbwnTk",
      "./enums_epersonastateflag.js?contenthash=DUdzI8yJ",
      "./alternate_icons.js?contenthash=DOwEEna-",
      "../../../css/applications/store/personanameandstatus.css?contenthash=C1vQP5bx",
      "./useavatarandpersona.js?contenthash=DxyQFtAE",
      "./react-datetime.js?contenthash=DNegIGQC",
      "../../../css/applications/store/react-datetime.css?contenthash=ByP4wuA0",
      "./layout.js?contenthash=C9c-cUkp",
      "../../../css/applications/store/layout.css?contenthash=CjyZtTRZ",
      "../../../css/applications/store/familymanagement.css?contenthash=XIVDuERb",
    ]),
) => _.map((_) => _[_]);
import { _, _ } from "./rolldown-runtime.js?contenthash=DbX3T1YK";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js?contenthash=b0JzZ9xY";
import "./steammessages_twofactor_pb.js?contenthash=CZ2mBkuA";
import { _ } from "./image.js?contenthash=D0D7fi9f";
import { _, _ } from "./ostype.js?contenthash=CClq0pco";
import { _ } from "./throbber.js?contenthash=BIVX4x_C";
import { _ } from "./eventdevfeaturestore.js?contenthash=CwBYN90A";
import { _ } from "./playerstore.js?contenthash=49W-ihmu";
import { _ } from "./storeitemhooks.js?contenthash=BVCecmSs";
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
} from "./main.js?contenthash=C1XpPKHE";
import { _ } from "./steamavatar.js?contenthash=CGL45S7J";
import { _, _ } from "./playteststore.js?contenthash=NI0Yia66";
var _ = _(_()),
  _ = _(_()),
  _ = class {
    m_Preferences = void 0;
    constructor(_) {
      _(this),
        (this.m_Preferences = _),
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
        this.m_Preferences.version == 0 && (this.m_Preferences.version = 1);
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
    SetPreferenceState(_) {
      if (this.m_Preferences.preference_state != _) {
        if (((this.m_Preferences.preference_state = _), _ == 1 || _ == 2)) {
          let _ = _ == 1;
          (this.m_Preferences.content_customization.recentapps = _),
            (this.m_Preferences.third_party_analytics.google_analytics = _),
            (this.m_Preferences.third_party_content.sketchfab = _),
            (this.m_Preferences.third_party_content.twitter = _),
            (this.m_Preferences.third_party_content.vimeo = _),
            (this.m_Preferences.third_party_content.youtube = _),
            (this.m_Preferences.valve_analytics.product_impressions_tracking =
              _);
        }
        this.PostCookieSettings();
      }
    }
    GetRecentApps() {
      return this.m_Preferences.content_customization.recentapps;
    }
    ToggleRecentApps() {
      (this.m_Preferences.content_customization.recentapps =
        !this.m_Preferences.content_customization.recentapps),
        this.ProcessToggle();
    }
    GetImpressions() {
      return this.m_Preferences.valve_analytics.product_impressions_tracking;
    }
    ToggleImpressions() {
      (this.m_Preferences.valve_analytics.product_impressions_tracking =
        !this.m_Preferences.valve_analytics.product_impressions_tracking),
        this.ProcessToggle();
    }
    GetSketchfab() {
      return this.m_Preferences.third_party_content.sketchfab;
    }
    ToggleSketchfab() {
      (this.m_Preferences.third_party_content.sketchfab =
        !this.m_Preferences.third_party_content.sketchfab),
        this.ProcessToggle();
    }
    GetVimeo() {
      return this.m_Preferences.third_party_content.vimeo;
    }
    ToggleVimeo() {
      (this.m_Preferences.third_party_content.vimeo =
        !this.m_Preferences.third_party_content.vimeo),
        this.ProcessToggle();
    }
    GetYouTube() {
      return this.m_Preferences.third_party_content.youtube;
    }
    ToggleYouTube() {
      (this.m_Preferences.third_party_content.youtube =
        !this.m_Preferences.third_party_content.youtube),
        this.ProcessToggle();
    }
    GetUTMEnabled() {
      return this.m_Preferences.utm_enabled;
    }
    ToggleUTMEnabled() {
      (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
        this.PostCookieSettings();
    }
    ProcessToggle() {
      (this.m_Preferences.preference_state = 3), this.PostCookieSettings();
    }
    async PostCookieSettings() {
      let _ = _.STORE_BASE_URL + `account/ajaxsetcookiepreferences`,
        _ = new FormData();
      _.set(`sessionid`, _()),
        _.append(`cookiepreferences`, JSON.stringify(this.m_Preferences));
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        if (_.status != 200 || _?.data?.success != 1)
          window.ShowAlertDialog(
            _(`#CookiePref_Error`),
            _(`#CookiePref_ErrorNotSaved`),
          );
        else if (_?.data?.success == 1) {
          let { transfer_urls: _, transfer_params: _ } = _.data;
          _ && _ && this.TransferCookiePreferencesToSites(_, _);
        }
      } catch {
        window.ShowAlertDialog(
          _(`#CookiePref_Error`),
          _(`#CookiePref_ErrorNotSaved`),
        );
      }
    }
    TransferCookiePreferencesToSites(_, _) {
      let _ = new FormData();
      _.set(`transfer_params`, _);
      for (let _ of _) _.default.post(_, _);
    }
  };
_([_], _.prototype, `m_Preferences`, void 0);
var _ = `VK34WouHuaw-`,
  _ = `_5poRwjVM2xA-`,
  _ = `f5Yon4sBMms-`,
  _ = `dAbDU2dWSc8-`,
  _ = `FhWHeCBXNTE-`,
  _ = `_1jidsj59ecM-`,
  _ = `nsVR689da2w-`,
  _ = `KRR6D4MqfmI-`,
  _ = `ianSd3EEgC4-`,
  _ = `GNihUgwOi5E-`,
  _ = `-vGnfVpkS8E-`,
  _ = `xexqER2-FTo-`,
  _ = `YBWuxM9Y7u8-`,
  _ = `_4ZnBPObA-Zo-`,
  _ = `i9VafgXk4E0-`,
  _ = `wH9bvzYo4Oo-`,
  _ = `TLijdnKtJ-U-`,
  _ = class {
    m_Preferences = void 0;
    constructor(_) {
      _(this), (this.m_Preferences = _);
    }
    SetDeckFeedback(_) {
      (this.m_Preferences.provide_deck_feedback = _),
        this.PostStorePreferences();
    }
    SetGameFrameRateReporting(_) {
      (this.m_Preferences.game_frame_rate_reporting = _),
        this.PostStorePreferences();
    }
    GetProvideDeckFeedbackEnabled() {
      return this.m_Preferences.provide_deck_feedback == 1;
    }
    GetGameFrameRateReportingEnabled() {
      return this.m_Preferences.game_frame_rate_reporting == 2;
    }
    ToggleProvideDeckFeeback() {
      (this.m_Preferences.provide_deck_feedback =
        this.m_Preferences.provide_deck_feedback == 1 ? 2 : 1),
        this.PostStorePreferences();
    }
    ToggleGameFrameRateReporting() {
      (this.m_Preferences.game_frame_rate_reporting =
        this.m_Preferences.game_frame_rate_reporting == 2 ? 1 : 2),
        this.PostStorePreferences();
    }
    async PostStorePreferences() {
      let _ = _.STORE_BASE_URL + `account/savepreferences`,
        _ = new FormData();
      _.set(`sessionid`, _()),
        _.set(
          `provide_deck_feedback`,
          this.m_Preferences.provide_deck_feedback.toString(),
        ),
        _.set(
          `game_frame_rate_reporting`,
          this.m_Preferences.game_frame_rate_reporting.toString(),
        );
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
        _.status != 200 || _?.data?.success != 1
          ? window.ShowAlertDialog(
              _(`#DataCollectionPref_Error`),
              _(`#DataCollectionPref_ErrorNotSaved`),
            )
          : _?.data?.success;
      } catch {
        window.ShowAlertDialog(
          _(`#DataCollectionPref_Error`),
          _(`#DataCollectionPref_ErrorNotSaved`),
        );
      }
    }
  };
_([_], _.prototype, `m_Preferences`, void 0);
var _ = class _ {
  m_rgSavedHardware = [];
  static s_AccountSavedHardwareStore;
  constructor() {
    _(this);
  }
  static Get() {
    return (
      _.s_AccountSavedHardwareStore ||
        ((_.s_AccountSavedHardwareStore = new _()),
        _.s_AccountSavedHardwareStore.Init()),
      _.s_AccountSavedHardwareStore
    );
  }
  Init() {
    this.m_rgSavedHardware = _(`saved_hardware`, `application_config`);
  }
  GetSavedHardware() {
    return this.m_rgSavedHardware;
  }
  async PostRequest(_, _) {
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
      });
      return _.status != 200 || _?.data?.success != 1
        ? (window.ShowAlertDialog(
            _(`#SavedHardware_Error_Title`),
            _(`#SavedHardware_Error_Desc`),
          ),
          !1)
        : !0;
    } catch {
      return (
        window.ShowAlertDialog(
          _(`#SavedHardware_Error_Title`),
          _(`#SavedHardware_Error_Desc`),
        ),
        !1
      );
    }
  }
  async RenameHardware(_, _) {
    let _ = _.STORE_BASE_URL + `account/ajaxhardwarerename`,
      _ = new FormData();
    if (
      (_.set(`sessionid`, _()),
      _.set(`savedHardwareID`, _),
      _.set(`strFriendlyName`, _),
      await this.PostRequest(_, _))
    )
      for (let _ = 0; _ < this.m_rgSavedHardware.length; ++_)
        this.m_rgSavedHardware[_].hardware_id == _ &&
          (this.m_rgSavedHardware[_].friendly_name = _);
  }
  async DeleteHardware(_) {
    let _ = _.STORE_BASE_URL + `account/ajaxhardwaredelete`,
      _ = new FormData();
    if (
      (_.set(`sessionid`, _()),
      _.set(`savedHardwareID`, _),
      await this.PostRequest(_, _))
    ) {
      for (let _ = 0; _ < this.m_rgSavedHardware.length; ++_)
        if (this.m_rgSavedHardware[_].hardware_id == _) {
          this.m_rgSavedHardware.splice(_, 1);
          return;
        }
    }
  }
};
_([_], _.prototype, `m_rgSavedHardware`, void 0);
function _() {
  return _.Get().GetSavedHardware();
}
var _ = _();
function _(_) {
  let { _: _, closeModal: _ } = _,
    _ = _.useCallback(() => {
      _.Get().DeleteHardware(_.hardware_id), _();
    }, [_, _.hardware_id]);
  return (0, _.jsx)(_, {
    bDisableBackgroundDismiss: !0,
    strTitle: _(`#SavedHardware_Delete_Confirm_Title`),
    onCancel: _,
    onOK: _,
    strOKButtonText: _(`#SavedHardware_Delete`),
    children: _(`#SavedHardware_Delete_Confirm_Desc`, _.friendly_name),
  });
}
function _(_) {
  let { _: _, closeModal: _ } = _,
    [_, _] = _.useState(_.friendly_name),
    _ = _.useCallback(() => {
      _.Get().RenameHardware(_.hardware_id, _.trim()), _();
    }, [_, _, _.hardware_id]);
  return (0, _.jsx)(_, {
    bDisableBackgroundDismiss: !0,
    strTitle: _(`#SavedHardware_Rename_Confirm_Title`),
    onCancel: _,
    onOK: _,
    bOKDisabled: _.trim().length == 0,
    strOKButtonText: _(`#SavedHardware_Rename`),
    children: (0, _.jsx)(_, {
      label: _(`#SavedHardware_Rename_Confirm_Label`),
      value: _,
      onChange: (_) => {
        _(_.target.value);
      },
      maxLength: 100,
    }),
  });
}
var _ = _((_) => {
    let { _: _ } = _,
      _;
    switch (_.system_info.gaming_device_type) {
      case 544:
        _ = _(`#HardwareVariant_SteamDeck`);
        break;
      case 545:
        _ = _(`#HardwareVariant_LegionGoS`);
        break;
      case 546:
        _ = _(`#HardwareVariant_SteamMachine`);
    }
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [_.friendly_name, ` `],
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  (0, _.jsx)(`div`, {
                    children: _,
                  }),
                (0, _.jsx)(`div`, {
                  children: _.system_info._,
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    _.system_info.cpu_name,
                    ` - `,
                    _(parseInt(_.system_info.system_ram) * 1024 * 1024, 0),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  children: [
                    _.system_info.adapter_description,
                    ` - `,
                    _(_.system_info.vram_size * 1024 * 1024, 0),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: void 0,
              children: _(`#SavedHardware_Timestamp`, _(_.timestamp_created)),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              className: _,
              onClick: (_) =>
                _(
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                  _(_),
                ),
              children: _(`#SavedHardware_Rename`),
            }),
            (0, _.jsx)(_, {
              className: _,
              onClick: (_) =>
                _(
                  (0, _.jsx)(_, {
                    _: _,
                  }),
                  _(_),
                ),
              children: _(`#SavedHardware_Delete`),
            }),
          ],
        }),
      ],
    });
  }),
  _ = _(() => {
    let _ = _(),
      _ = typeof SteamClient < `u`,
      _ = _.useCallback(() => {
        window.location.reload();
      }, []),
      _ = _.useCallback(() => {
        window.SteamClient.BrowserView.RegisterForMessageFromParent(_),
          SteamClient.BrowserView.PostMessageToParent(
            `ShowSavedHardwareDialog`,
            ``,
          );
      }, [_]);
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`h2`, {
              children: _(`#SavedHardware_Title`),
            }),
            (0, _.jsx)(`p`, {
              className: _,
              children: _(`#SavedHardware_Desc`),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                _: _,
              },
              _.hardware_id,
            ),
          ),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children:
            _ &&
            (0, _.jsxs)(_, {
              className: `_6xNO-D5DinA-`,
              onClick: _,
              children: [_(`#SavedHardware_AddNew`), ` `],
            }),
        }),
      ],
    });
  }),
  _ = null,
  _ = null;
function _() {
  return (
    (_ ||= new _(_(`cookiepreferences`, `application_config`))),
    (_ ||= new _(_(`storedatapreferences`, `application_config`))),
    [_, _]
  );
}
var _ = _(() => {
    let [_, _] = _(),
      _ = (0, _.useCallback)(() => {
        _.SetPreferenceState(1);
      }, [_]),
      _ = (0, _.useCallback)(() => {
        _.SetPreferenceState(2);
      }, [_]),
      _ = _();
    return (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, `account_header_line noicon`),
          children: (0, _.jsx)(`div`, {
            children: _(`#CookiePref_OptionalCookies_Title`),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, _.jsxs)(_, {
              "flow-children": `row`,
              className: _,
              children: [
                (0, _.jsx)(_, {
                  className: _(_, _.BIsRejectAll() ? _ : ``),
                  onClick: _,
                  children: _(`#CookiePref_RejectAll`),
                }),
                (0, _.jsx)(_, {
                  className: _(_, _.BIsAllowAll() ? _ : ``),
                  onClick: _,
                  children: _(`#CookiePref_AcceptAll`),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              settings: _,
            }),
            (0, _.jsx)(_, {
              settings: _,
            }),
            (0, _.jsx)(_, {
              settings: _,
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _(_, `account_header_line noicon`),
          children: (0, _.jsx)(`div`, {
            children: _(`#CookiePref_TechnicallyNeccesary_Title`),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, _.jsx)(`p`, {
              children: _(`#CookiePref_TechnicallyNeccesary_Desc`),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_SessionID_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_SessionID_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_ShoppingCart_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_ShoppingCart_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_SteamCountry_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_SteamCountry_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Timezone_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Timezone_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_BirthTime_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_BirthTime_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Login_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Login_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Language_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_Language_Desc`),
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_CookieSettings_Title`),
                    }),
                    (0, _.jsx)(`span`, {
                      className: _,
                      children: _(`#CookiePref_CookieSettings_Desc`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _(_, `account_header_line noicon`),
          children: (0, _.jsx)(`div`, {
            children: _(`#PrivacySettings_Marketing_Header`),
          }),
        }),
        (0, _.jsx)(`div`, {
          className: `account_settings_container`,
          children: (0, _.jsx)(_, {
            settings: _,
          }),
        }),
        !!_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: _(`_64aHmRjJ5Ns-`, `account_header_line noicon`),
                children: (0, _.jsx)(`div`, {
                  children: _(`#DataPreferences_Header`),
                }),
              }),
              (0, _.jsx)(`div`, {
                className: `account_settings_container`,
                children: (0, _.jsx)(_, {
                  settings: _,
                }),
              }),
            ],
          }),
        null,
      ],
    });
  }),
  _ = _((_) => {
    let { settings: _ } = _,
      _ = (0, _.useCallback)(() => {
        _.ToggleRecentApps();
      }, [_]);
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            children: _(`#CookiePref_Content_Title`),
          }),
          (0, _.jsx)(`p`, {
            className: _,
            children: _(`#CookiePref_Content_Desc`),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#CookiePref_Content_ToggleTitle`),
            checked: _.GetRecentApps(),
            description: _(`#CookiePref_Content_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  _ = _((_) => {
    let { settings: _ } = _,
      _ = (0, _.useCallback)(() => {
        _.ToggleImpressions();
      }, [_]);
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            children: _(`#CookiePref_ValveAnalytics_Title`),
          }),
          (0, _.jsx)(`p`, {
            className: _,
            children: _(`#CookiePref_ValveAnalytics_Desc`),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#CookiePref_ValveAnalytics_ToggleTitle`),
            checked: _.GetImpressions(),
            description: _(`#CookiePref_ValveAnalytics_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  _ = _((_) => {
    let { settings: _ } = _,
      _ = (0, _.useCallback)(() => {
        _.ToggleYouTube();
      }, [_]),
      _ = (0, _.useCallback)(() => {
        _.ToggleVimeo();
      }, [_]),
      _ = (0, _.useCallback)(() => {
        _.ToggleSketchfab();
      }, [_]);
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            children: _(`#CookiePref_ThirdParty_Title`),
          }),
          (0, _.jsx)(`p`, {
            className: _,
            children: _(`#CookiePref_ThirdParty_Desc`),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#CookiePref_YouTube_Title`),
            checked: _.GetYouTube(),
            description: _(
              `#CookiePref_YouTube_Desc`,
              (0, _.jsx)(`a`, {
                href: `https://policies.google.com/privacy`,
                target: `_blank`,
                children: _(`#CookiePref_YouTube_TogglePolicyName`),
              }),
            ),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#CookiePref_Vimeo_Title`),
            checked: _.GetVimeo(),
            description: _(
              `#CookiePref_Vimeo_Desc`,
              (0, _.jsx)(`a`, {
                href: `https://vimeo.com/privacy`,
                target: `_blank`,
                children: _(`#CookiePref_Vimeo_TogglePolicyName`),
              }),
            ),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#CookiePref_Sketchfab_Title`),
            checked: _.GetSketchfab(),
            description: _(
              `#CookiePref_Sketchfab_Desc`,
              (0, _.jsx)(`a`, {
                href: `https://sketchfab.com/privacy`,
                target: `_blank`,
                children: _(`#CookiePref_Sketchfab_TogglePolicyName`),
              }),
            ),
          }),
        ],
      }),
    });
  }),
  _ = _((_) => {
    let { settings: _ } = _,
      _ = (0, _.useCallback)(() => {
        _.ToggleUTMEnabled();
      }, [_]);
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`h2`, {
            children: _(`#PrivacySettings_Marketing_Title`),
          }),
          (0, _.jsx)(`p`, {
            className: _,
            children: _(`#PrivacySettings_Marketing_Desc`),
          }),
          (0, _.jsx)(_, {
            onChange: _,
            label: _(`#PrivacySettings_UTM_ToggleLabel`),
            checked: _.GetUTMEnabled(),
            description: _(`#PrivacySettings_UTM_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  _ = _((_) => {
    let { settings: _ } = _,
      _ = (0, _.useCallback)(() => {
        _.ToggleProvideDeckFeeback();
      }, [_]),
      _ = (0, _.useCallback)(() => {
        _.ToggleGameFrameRateReporting();
      }, [_]);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h2`, {
                children: _(`#DataPreferences_Provide_SteamOS_Feedback_Title`),
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: _(`#DataPreferences_Provide_SteamOS_Feedback_Desc`),
              }),
              (0, _.jsx)(_, {
                onChange: _,
                checked: _.GetProvideDeckFeedbackEnabled(),
                description: _(
                  `#DataPreferences_Provide_SteamOS_Feedback_Label`,
                ),
              }),
            ],
          }),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`h2`, {
                _: `FrameRateReporting`,
                children: _(`#DataPreferences_FrameRateReporting_Title`),
              }),
              (0, _.jsx)(`p`, {
                className: _,
                children: _(`#DataPreferences_FrameRateReporting_Description`),
              }),
              (0, _.jsx)(_, {
                onChange: _,
                checked: _.GetGameFrameRateReportingEnabled(),
                description: _(`#DataPreferences_FrameRateReporting_Label`),
              }),
            ],
          }),
        }),
        (0, _.jsx)(_, {}),
      ],
    });
  }),
  _ = `sML4yrXupis-`,
  _ = `PN-BLDRmOi8-`,
  _ = `dbVek-y66VM-`,
  _ = `G9YiArwIWMc-`,
  _ = `RLZi3mFotC8-`,
  _ = `pF1Nwx-LELQ-`,
  _ = `oWGsep6hjnY-`,
  _ = `F5865fLuKas-`,
  _ = `FrKp3u6aEXY-`,
  _ = `Ygu4WfbzVL8-`,
  _ = `qpPlg5ibwQY-`,
  _ = `jR5Et-4d2rw-`,
  _ = 1422450;
function _(_) {
  let { bShowPlaytestOverview: _ } = _,
    _ = _(),
    _ = [];
  return (
    _.isSuccess &&
      (_ = _.data
        .filter((_) => _.status === 1 || _.status === 3)
        .map((_) => {
          switch (_.status) {
            case 3:
              return (0, _.jsx)(
                _,
                {
                  invite: _,
                },
                _.invite_id,
              );
            default:
              return (0, _.jsx)(
                _,
                {
                  invite: _,
                },
                _.invite_id,
              );
          }
        })),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`div`, {
          className: `account_header_line noicon`,
          children: _(`#PlaytestInvites_Title`),
        }),
        (0, _.jsx)(`div`, {
          className: _(_, `account_settings_container`),
          children:
            _.isLoading || _.length > 0 ? _ : _(`#PlaytestInvites_NoInvites`),
        }),
        _ &&
          (0, _.jsxs)(`div`, {
            className: `account_settings_container`,
            children: [
              (0, _.jsx)(`h2`, {
                children: _(`#PlaytestInvites_Desc_Title`),
              }),
              (0, _.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: _(`#PlaytestInvites_Desc1`),
              }),
              (0, _.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: _(`#PlaytestInvites_Desc2`),
              }),
            ],
          }),
      ],
    })
  );
}
function _(_) {
  let { invite: _ } = _,
    _ = _.appid,
    _ = _(_.appid)?.GetName() ?? _.app_name,
    _ = _.useCallback(
      (_) => {
        _(_(_), `steam://open/games/details/${_}`);
      },
      [_],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`span`, {
          children: _(`#PlaytestInvites_Welcome`, _),
        }),
      }),
      !_.IN_MOBILE_WEBVIEW &&
        (0, _.jsx)(`div`, {
          className: `pF1Nwx-LELQ-`,
          children: (0, _.jsx)(_, {
            className: `oWGsep6hjnY-`,
            children: (0, _.jsx)(_, {
              className: `Bq8C8lENGmc-`,
              noFocusRing: !1,
              onClick: _,
              children: _(`#PlaytestInvites_ViewLibrary`),
            }),
          }),
        }),
    ],
  });
}
function _(_) {
  let { invite: _ } = _,
    _ = _(),
    _ = _(_.appid),
    _ = _?.GetName() ?? _.app_name,
    _ = _(_.invite_id),
    _ = _.useCallback(
      (_) => {
        _.mutate({
          bAccept: _,
        });
      },
      [_],
    ),
    _ = new _(_.steamid_inviter);
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      className: _,
      navEntryPreferPosition: _.MAINTAIN_X,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              steamIDInviter: _,
            }),
            (0, _.jsx)(_, {
              appStoreItem: _,
              strAppName: _,
              nAppID: _.appid,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(_.time_created ?? _),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.isPending
            ? (0, _.jsx)(_, {
                size: `medium`,
                position: `center`,
                msDelayAppear: 250,
              })
            : (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    noFocusRing: !1,
                    onClick: () => _(!0),
                    children: _(`#PlaytestInvites_Accept`),
                  }),
                  (0, _.jsx)(_, {
                    noFocusRing: !1,
                    onClick: () => _(!1),
                    children: _(`#PlaytestInvites_Reject`),
                  }),
                ],
              }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { appStoreItem: _, strAppName: _, nAppID: _ } = _,
    _ = _?.GetDeveloperNames()?.length ? _.GetDeveloperNames()[0] : null,
    _ = _?.GetStorePageURL(),
    _ = (0, _.jsx)(`img`, {
      className: _,
      src: _?.GetAssets().GetSmallCapsuleURL() ?? _,
    });
  return (
    _ == _ && (_ = `Valve`),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        _
          ? (0, _.jsxs)(_, {
              href: _,
              children: [` `, _, ` `],
            })
          : _,
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `_5NumTItJbZc-`,
                children: _(`#PlaytestInvites_AppDeveloper`, _),
              }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { steamIDInviter: _ } = _;
  return _.BIsValid()
    ? (0, _.jsx)(_, {
        steamIDInviter: _,
      })
    : (0, _.jsx)(_, {});
}
function _(_) {
  let { steamIDInviter: _ } = _,
    _ = _(_.ConvertTo64BitString()),
    _ = _?.data;
  return _.isSuccess
    ? (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(_, {
            persona: _,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, _.jsx)(`div`, {
            children: _(
              `#PlaytestInvites_InviteDescription_FromUser2`,
              (0, _.jsx)(_, {
                href: _.GetCommunityProfileURL(),
                children: _?.m_strPlayerName,
              }),
            ),
          }),
        ],
      })
    : (0, _.jsx)(_, {});
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#PlaytestInvites_InviteDescription_FromApp2`),
  });
}
function _(_) {
  let [_, _] = _(_, {
    include_basic_info: !0,
    include_assets: !0,
  });
  return _ && _ == 3 ? _ : null;
}
var _ = `bCxa8Ii97Bk-`;
function _(_) {
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        bShowPlaytestOverview: !1,
      }),
      (0, _.jsx)(`div`, {
        className: `account_header_line noicon`,
        children: _(`#PlaytestStatus_Title`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `account_settings_container`),
        children: _(`#PlaytestStatus_None`),
      }),
      (0, _.jsxs)(`div`, {
        className: `account_settings_container`,
        children: [
          (0, _.jsx)(`h2`, {
            children: _(`#PlaytestInvites_Desc_Title`),
          }),
          (0, _.jsx)(`p`, {
            className: void 0,
            children: _(`#PlaytestInvites_Desc1`),
          }),
          (0, _.jsx)(`p`, {
            className: void 0,
            children: _(`#PlaytestInvites_Desc2`),
          }),
        ],
      }),
    ],
  });
}
var _ = class _ {
  m_rgActiveDevices = [];
  m_rgRevokedDevices = [];
  m_strAccountName;
  m_strPhoneHint;
  m_strEmail;
  m_msgTwoFactorStatus;
  m_strLatestAndroidAppVersion;
  static s_AuthorizedDevicesStore;
  constructor() {
    _(this);
  }
  static Get() {
    return (
      _.s_AuthorizedDevicesStore ||
        ((_.s_AuthorizedDevicesStore = new _()),
        _.s_AuthorizedDevicesStore.Init()),
      _.s_AuthorizedDevicesStore
    );
  }
  Init() {
    (this.m_rgActiveDevices = _(`active_devices`, `application_config`)),
      (this.m_rgRevokedDevices = _(`revoked_devices`, `application_config`)),
      (this.m_strAccountName = _(`accountName`, `application_config`)),
      (this.m_strPhoneHint = _(`phone_hint`, `application_config`)),
      (this.m_strEmail = _(`email`, `application_config`)),
      (this.m_msgTwoFactorStatus = _(
        `two_factor_status`,
        `application_config`,
      )),
      (this.m_strLatestAndroidAppVersion = _(
        `latest_android_app_version`,
        `application_config`,
      ));
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
_([_], _.prototype, `m_rgActiveDevices`, void 0),
  _([_], _.prototype, `m_rgRevokedDevices`, void 0);
var _ = new URL(
    `../../../images/applications/store/sg_shield_off.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/sg_shield_on.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = new URL(
    `../../../images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = _((_, _) => {
    (function (_, _) {
      var _ = `1.0.41`,
        _ = ``,
        _ = `function`,
        _ = `undefined`,
        _ = `object`,
        _ = `string`,
        _ = `major`,
        _ = `model`,
        _ = `name`,
        _ = `type`,
        _ = `vendor`,
        _ = `version`,
        _ = `architecture`,
        _ = `console`,
        _ = `mobile`,
        _ = `tablet`,
        _ = `smarttv`,
        _ = `wearable`,
        _ = `embedded`,
        _ = `Amazon`,
        _ = `Apple`,
        _ = `ASUS`,
        _ = `BlackBerry`,
        _ = `Browser`,
        _ = `Chrome`,
        _ = `Edge`,
        _ = `Firefox`,
        _ = `Google`,
        _ = `Honor`,
        _ = `Huawei`,
        _ = `Lenovo`,
        _ = `LG`,
        _ = `Microsoft`,
        _ = `Motorola`,
        _ = `Nvidia`,
        _ = `OnePlus`,
        _ = `Opera`,
        _ = `OPPO`,
        _ = `Samsung`,
        _ = `Sharp`,
        _ = `Sony`,
        _ = `Xiaomi`,
        _ = `Zebra`,
        _ = `Facebook`,
        _ = `Chromium OS`,
        _ = `Mac OS`,
        _ = ` Browser`,
        _ = function (_, _) {
          var _ = {};
          for (var _ in _)
            _[_] = _[_] && _[_].length % 2 == 0 ? _[_].concat(_[_]) : _[_];
          return _;
        },
        _ = function (_) {
          for (var _ = {}, _ = 0; _ < _.length; _++)
            _[_[_].toUpperCase()] = _[_];
          return _;
        },
        _ = function (_, _) {
          return typeof _ == _ && _(_).indexOf(_(_)) !== -1;
        },
        _ = function (_) {
          return _.toLowerCase();
        },
        _ = function (_) {
          return typeof _ == _ ? _.replace(/[^\d\.]/g, _).split(`.`)[0] : _;
        },
        _ = function (_, _) {
          if (typeof _ == _)
            return (
              (_ = _.replace(/^\s\s*/, _)),
              typeof _ === _ ? _ : _.substring(0, 500)
            );
        },
        _ = function (_, _) {
          for (var _ = 0, _, _, _, _, _, _; _ < _.length && !_; ) {
            var _ = _[_],
              _ = _[_ + 1];
            for (_ = _ = 0; _ < _.length && !_ && _[_]; )
              if (((_ = _[_++].exec(_)), _))
                for (_ = 0; _ < _.length; _++)
                  (_ = _[++_]),
                    (_ = _[_]),
                    typeof _ == _ && _.length > 0
                      ? _.length === 2
                        ? typeof _[1] == _
                          ? (this[_[0]] = _[1].call(this, _))
                          : (this[_[0]] = _[1])
                        : _.length === 3
                          ? typeof _[1] === _ && !(_[1].exec && _[1].test)
                            ? (this[_[0]] = _ ? _[1].call(this, _, _[2]) : _)
                            : (this[_[0]] = _ ? _.replace(_[1], _[2]) : _)
                          : _.length === 4 &&
                            (this[_[0]] = _
                              ? _[3].call(this, _.replace(_[1], _[2]))
                              : _)
                      : (this[_] = _ || _);
            _ += 2;
          }
        },
        _ = function (_, _) {
          for (var _ in _)
            if (typeof _[_] == _ && _[_].length > 0) {
              for (var _ = 0; _ < _[_].length; _++)
                if (_(_[_][_], _)) return _ === `?` ? _ : _;
            } else if (_(_[_], _)) return _ === `?` ? _ : _;
          return _.hasOwnProperty(`*`) ? _[`*`] : _;
        },
        _ = {
          "1.0": `/8`,
          1.2: `/1`,
          1.3: `/3`,
          "2.0": `/412`,
          "2.0.2": `/416`,
          "2.0.3": `/417`,
          "2.0.4": `/419`,
          "?": `/`,
        },
        _ = {
          _: `4.90`,
          "NT 3.11": `NT3.51`,
          "NT 4.0": `NT4.0`,
          2e3: `NT 5.0`,
          _: [`NT 5.1`, `NT 5.2`],
          Vista: `NT 6.0`,
          7: `NT 6.1`,
          8: `NT 6.2`,
          8.1: `NT 6.3`,
          10: [`NT 6.4`, `NT 10.0`],
          _: `ARM`,
        },
        _ = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [_, [_, `Chrome`]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [_, [_, `Edge`]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [_, _],
            [/opios[\/ ]+([\w\.]+)/i],
            [_, [_, _ + ` Mini`]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [_, [_, _ + ` GX`]],
            [/\bopr\/([\w\.]+)/i],
            [_, [_, _]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [_, [_, `Baidu`]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [_, [_, `Maxthon`]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [_, _],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [_, [_, `Quark`]],
            [/\bddg\/([\w\.]+)/i],
            [_, [_, `DuckDuckGo`]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [_, [_, `UC` + _]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [_, [_, `WeChat`]],
            [/konqueror\/([\w\.]+)/i],
            [_, [_, `Konqueror`]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [_, [_, `IE`]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [_, [_, `Yandex`]],
            [/slbrowser\/([\w\.]+)/i],
            [_, [_, `Smart Lenovo ` + _]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[_, /(.+)/, `$1 Secure ` + _], _],
            [/\bfocus\/([\w\.]+)/i],
            [_, [_, _ + ` Focus`]],
            [/\bopt\/([\w\.]+)/i],
            [_, [_, _ + ` Touch`]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [_, [_, `Coc Coc`]],
            [/dolfin\/([\w\.]+)/i],
            [_, [_, `Dolphin`]],
            [/coast\/([\w\.]+)/i],
            [_, [_, _ + ` Coast`]],
            [/miuibrowser\/([\w\.]+)/i],
            [_, [_, `MIUI` + _]],
            [/fxios\/([\w\.-]+)/i],
            [_, [_, _]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [_, [_, `360`]],
            [/\b(qq)\/([\w\.]+)/i],
            [[_, /(.+)/, `$1Browser`], _],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[_, /(.+)/, `$1` + _], _],
            [/samsungbrowser\/([\w\.]+)/i],
            [_, [_, _ + ` Internet`]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [_, [_, `Sogou Explorer`]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[_, `Sogou Mobile`], _],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [_, _],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [_],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [_, _],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[_, _], _],
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
            [_, _],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [_, [_, `GSA`]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [_, [_, `TikTok`]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [_, [_, _ + ` Headless`]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[_, _ + ` WebView`], _],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [_, [_, `Android ` + _]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [_, _],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [_, [_, `Mobile Safari`]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [_, _],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [_, [_, _, _]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [_, _],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[_, `Netscape`], _],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [_, _],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [_, [_, _ + ` Reality`]],
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
            [_, [_, /_/g, `.`]],
            [/(cobalt)\/([\w\.]+)/i],
            [_, [_, /master.|lts./, ``]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[_, `amd64`]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[_, `ia32`]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[_, `arm64`]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[_, `armhf`]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[_, `arm`]],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [[_, /ower/, _, _]],
            [/ sun4\w[;\)]/i],
            [[_, `sparc`]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            ],
            [[_, _]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [_, [_, _], [_, _]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [_, [_, _], [_, _]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [_, [_, _], [_, _]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [_, [_, _], [_, _]],
            [/(macintosh);/i],
            [_, [_, _]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [_, [_, _], [_, _]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [_, [_, _], [_, _]],
            [/honor([-\w ]+)[;\)]/i],
            [_, [_, _], [_, _]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [_, [_, _], [_, _]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [_, [_, _], [_, _]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [_, /_/g, ` `],
              [_, _],
              [_, _],
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
              [_, /_/g, ` `],
              [_, _],
              [_, _],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [_, [_, _], [_, _]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [
              _,
              [
                _,
                _,
                {
                  OnePlus: [`304`, `403`, `203`],
                  "*": _,
                },
              ],
              [_, _],
            ],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [_, [_, `Vivo`], [_, _]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [_, [_, `Realme`], [_, _]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [_, [_, _], [_, _]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [_, [_, _], [_, _]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [_, [_, _], [_, _]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [_, [_, _], [_, _]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [_, [_, _], [_, _]],
            [/(nokia) (t[12][01])/i],
            [_, _, [_, _]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*))/i,
            ],
            [
              [_, /_/g, ` `],
              [_, _],
              [_, `Nokia`],
            ],
            [/(pixel (c|tablet))\b/i],
            [_, [_, _], [_, _]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [_, [_, _], [_, _]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [_, [_, _], [_, _]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [_, `Xperia Tablet`],
              [_, _],
              [_, _],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [_, [_, _], [_, _]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [_, [_, _], [_, _]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [_, /(.+)/g, `Fire Phone $1`],
              [_, _],
              [_, _],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [_, _, [_, _]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [_, [_, _], [_, _]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [_, [_, _], [_, _]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [_, [_, _], [_, _]],
            [/(nexus 9)/i],
            [_, [_, `HTC`], [_, _]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [_, [_, /_/g, ` `], [_, _]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [_, [_, `TCL`], [_, _]],
            [/(itel) ((\w+))/i],
            [
              [_, _],
              _,
              [
                _,
                _,
                {
                  tablet: [`p10001l`, `w7001`],
                  "*": `mobile`,
                },
              ],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [_, [_, `Acer`], [_, _]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [_, [_, `Meizu`], [_, _]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [_, [_, `Ulefone`], [_, _]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [_, [_, `Energizer`], [_, _]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [_, [_, `Cat`], [_, _]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [_, [_, `Smartfren`], [_, _]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [_, [_, `Nothing`], [_, _]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [_, [_, `Archos`], [_, _]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [_, [_, `Archos`], [_, _]],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [_, _, [_, _]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [_, _, [_, _]],
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
            [_, _, [_, _]],
            [/(surface duo)/i],
            [_, [_, _], [_, _]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [_, [_, `Fairphone`], [_, _]],
            [/(u304aa)/i],
            [_, [_, `AT&T`], [_, _]],
            [/\bsie-(\w*)/i],
            [_, [_, `Siemens`], [_, _]],
            [/\b(rct\w+) b/i],
            [_, [_, `RCA`], [_, _]],
            [/\b(venue[\d ]{2,7}) b/i],
            [_, [_, `Dell`], [_, _]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [_, [_, `Verizon`], [_, _]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [_, [_, `Barnes & Noble`], [_, _]],
            [/\b(tm\d{3}\w+) b/i],
            [_, [_, `NuVision`], [_, _]],
            [/\b(k88) b/i],
            [_, [_, `ZTE`], [_, _]],
            [/\b(nx\d{3}j) b/i],
            [_, [_, `ZTE`], [_, _]],
            [/\b(gen\d{3}) b.+49h/i],
            [_, [_, `Swiss`], [_, _]],
            [/\b(zur\d{3}) b/i],
            [_, [_, `Swiss`], [_, _]],
            [/\b((zeki)?tb.*\b) b/i],
            [_, [_, `Zeki`], [_, _]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[_, `Dragon Touch`], _, [_, _]],
            [/\b(ns-?\w{0,9}) b/i],
            [_, [_, `Insignia`], [_, _]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [_, [_, `NextBook`], [_, _]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[_, `Voice`], _, [_, _]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[_, `LvTel`], _, [_, _]],
            [/\b(ph-1) /i],
            [_, [_, `Essential`], [_, _]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [_, [_, `Envizen`], [_, _]],
            [/\b(trio[-\w\. ]+) b/i],
            [_, [_, `MachSpeed`], [_, _]],
            [/\btu_(1491) b/i],
            [_, [_, `Rotor`], [_, _]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [_, [_, _], [_, _]],
            [/(sprint) (\w+)/i],
            [_, _, [_, _]],
            [/(kin\.[onetw]{3})/i],
            [
              [_, /\./g, ` `],
              [_, _],
              [_, _],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [_, [_, _], [_, _]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [_, [_, _], [_, _]],
            [/smart-tv.+(samsung)/i],
            [_, [_, _]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [_, /^/, `SmartTV`],
              [_, _],
              [_, _],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [_, _],
              [_, _],
            ],
            [/(apple) ?tv/i],
            [_, [_, _ + ` TV`], [_, _]],
            [/crkey/i],
            [
              [_, _ + `cast`],
              [_, _],
              [_, _],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [_, [_, _], [_, _]],
            [/(shield \w+ tv)/i],
            [_, [_, _], [_, _]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [_, [_, _], [_, _]],
            [/(bravia[\w ]+)( bui|\))/i],
            [_, [_, _], [_, _]],
            [/(mi(tv|box)-?\w+) bui/i],
            [_, [_, _], [_, _]],
            [/Hbbtv.*(technisat) (.*);/i],
            [_, _, [_, _]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [_, _],
              [_, _],
              [_, _],
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [_, [_, _]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[_, _]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [_, _, [_, _]],
            [/droid.+; (shield)( bui|\))/i],
            [_, [_, _], [_, _]],
            [/(playstation \w+)/i],
            [_, [_, _], [_, _]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [_, [_, _], [_, _]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [_, [_, _], [_, _]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [_, _, [_, _]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [_, [_, _], [_, _]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [_, [_, _], [_, _]],
            [/(opwwe\d{3})/i],
            [_, [_, _], [_, _]],
            [/(moto 360)/i],
            [_, [_, _], [_, _]],
            [/(smartwatch 3)/i],
            [_, [_, _], [_, _]],
            [/(g watch r)/i],
            [_, [_, _], [_, _]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [_, [_, _], [_, _]],
            [/droid.+; (glass) \d/i],
            [_, [_, _], [_, _]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [_, _, [_, _]],
            [/; (quest( \d| pro)?)/i],
            [_, [_, _], [_, _]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [_, [_, _]],
            [/(aeobc)\b/i],
            [_, [_, _], [_, _]],
            [/(homepod).+mac os/i],
            [_, [_, _], [_, _]],
            [/windows iot/i],
            [[_, _]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [_, [_, _]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [_, [_, _]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[_, _]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[_, _]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [_, [_, `Generic`]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [_, [_, _ + `HTML`]],
            [/(arkweb)\/([\w\.]+)/i],
            [_, _],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [_, [_, `Blink`]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [_, _],
            [/ladybird\//i],
            [[_, `LibWeb`]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [_, _],
          ],
          _: [
            [/microsoft (windows) (vista|xp)/i],
            [_, _],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [_, [_, _, _]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [_, _, _],
              [_, `Windows`],
            ],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [_, /_/g, `.`],
              [_, `iOS`],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [_, _],
              [_, /_/g, `.`],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [_, _],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[_, /(.+)/, `$1 Touch`], _],
            [
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
            ],
            [_, _],
            [/\(bb(10);/i],
            [_, [_, _]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [_, [_, `Symbian`]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [_, [_, _ + ` OS`]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [_, [_, `webOS`]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [_, [_, `watchOS`]],
            [/crkey\/([\d\.]+)/i],
            [_, [_, _ + `cast`]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[_, _], _],
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
            [_, _],
            [/(sunos) ?([\w\.\d]*)/i],
            [[_, `Solaris`], _],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [_, _],
          ],
        },
        _ = function (_, _) {
          if ((typeof _ == _ && ((_ = _), (_ = _)), !(this instanceof _)))
            return new _(_, _).getResult();
          var _ = typeof _ !== _ && _.navigator ? _.navigator : _,
            _ = _ || (_ && _.userAgent ? _.userAgent : _),
            _ = _ && _.userAgentData ? _.userAgentData : _,
            _ = _ ? _(_, _) : _,
            _ = _ && _.userAgent == _;
          return (
            (this.getBrowser = function () {
              var _ = {};
              return (
                (_[_] = _),
                (_[_] = _),
                _.call(_, _, _.browser),
                (_[_] = _(_[_])),
                _ &&
                  _ &&
                  _.brave &&
                  typeof _.brave.isBrave == _ &&
                  (_[_] = `Brave`),
                _
              );
            }),
            (this.getCPU = function () {
              var _ = {};
              return (_[_] = _), _.call(_, _, _.cpu), _;
            }),
            (this.getDevice = function () {
              var _ = {};
              return (
                (_[_] = _),
                (_[_] = _),
                (_[_] = _),
                _.call(_, _, _.device),
                _ && !_[_] && _ && _.mobile && (_[_] = _),
                _ &&
                  _[_] == `Macintosh` &&
                  _ &&
                  typeof _.standalone !== _ &&
                  _.maxTouchPoints &&
                  _.maxTouchPoints > 2 &&
                  ((_[_] = `iPad`), (_[_] = _)),
                _
              );
            }),
            (this.getEngine = function () {
              var _ = {};
              return (_[_] = _), (_[_] = _), _.call(_, _, _.engine), _;
            }),
            (this.getOS = function () {
              var _ = {};
              return (
                (_[_] = _),
                (_[_] = _),
                _.call(_, _, _._),
                _ &&
                  !_[_] &&
                  _ &&
                  _.platform &&
                  _.platform != `Unknown` &&
                  (_[_] = _.platform
                    .replace(/chrome os/i, _)
                    .replace(/macos/i, _)),
                _
              );
            }),
            (this.getResult = function () {
              return {
                _: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                _: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return _;
            }),
            (this.setUA = function (_) {
              return (
                (_ = typeof _ == _ && _.length > 500 ? _(_, 500) : _), this
              );
            }),
            this.setUA(_),
            this
          );
        };
      (_.VERSION = _),
        (_.BROWSER = _([_, _, _])),
        (_.CPU = _([_])),
        (_.DEVICE = _([_, _, _, _, _, _, _, _, _])),
        (_.ENGINE = _._ = _([_, _])),
        typeof _ === _
          ? typeof define === _ && define.amd
            ? define(function () {
                return _;
              })
            : typeof _ !== _ && (_.UAParser = _)
          : (typeof _ !== _ && _.exports && (_ = _.exports = _),
            (_.UAParser = _));
      var _ = typeof _ !== _ && (_.jQuery || _.Zepto);
      if (_ && !_._) {
        var _ = new _();
        (_._ = _.getResult()),
          (_._.get = function () {
            return _.getUA();
          }),
          (_._.set = function (_) {
            _.setUA(_);
            var _ = _.getResult();
            for (var _ in _) _._[_] = _[_];
          });
      }
    })(typeof window == `object` ? window : _);
  })(),
  _ = `viqEyBlMfbY-`,
  _ = `shgsJDaY3CY-`,
  _ = `jYhMQWJDOI0-`,
  _ = `hjaE7AQsOK0-`,
  _ = `xKL55sYr9nU-`,
  _ = `UhBY1FfjFrU-`,
  _ = `qyZsB6JuVjY-`,
  _ = `saDXcTipZ7A-`,
  _ = `VLFX-mKqLNw-`,
  _ = `YRwct28ezfU-`,
  _ = `epOqB4sJsvo-`,
  _ = `VXFw-xEFbdo-`,
  _ = `rkTP-9I7urk-`,
  _ = `fz9qBoc1vQM-`,
  _ = `tjO6BKRl12o-`,
  _ = `ayE79te7Zzo-`,
  _ = `_8EDXdeI-GJU-`,
  _ = `L4f9mqbFIEU-`,
  _ = `G87uOZgrnCw-`,
  _ = `CtCaOVl6dE0-`,
  _ = `_0tit-21mIgs-`,
  _ = `C7BpVBVjnOM-`,
  _ = `N-1Yp4EnJ8k-`,
  _ = `urfarZbyAYI-`,
  _ = `p-1G-Tb-pSA-`,
  _ = _(() => {
    let _ = _.Get(),
      _ = _(),
      _ = (_) => {
        _((0, _.jsx)(_, {}), _(_));
      },
      _ = Date.now() / 1e3,
      _ = _(_),
      _ = _.GetTwoFactorStatus(),
      _ = null;
    switch (_.steamguard_scheme) {
      default:
      case 0:
        _ = `#accountpreferences_revoked_devices_revoked_description`;
        break;
      case 1:
        _ = `#accountpreferences_revoked_devices_revoked_description_email`;
        break;
      case 2:
        _ = `#accountpreferences_revoked_devices_revoked_description_auth`;
    }
    let _ = [],
      _ = [];
    for (let _ of _.GetActiveDevices()) {
      let _ = _.logged_in && _.last_seen?.time > _ - 900,
        _ = _.effective_token_state == 5 ? _ : null,
        _ = (0, _.jsx)(
          _,
          {
            className: _,
            device: _,
            bActiveNow: _,
            bCurrentDevice: _ == _.token_id,
            strActiveCountry: _,
            msgTwoFactorStatus: _,
          },
          _.token_id,
        );
      _ ? _.push(_) : _.push(_);
    }
    let _ = _.GetRevokedDevices().map((_) =>
      (0, _.jsx)(
        _,
        {
          className: _,
          device: _,
          strActiveCountry: _,
          msgTwoFactorStatus: _,
        },
        _.token_id,
      ),
    );
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, `account_header_line noicon`),
          children: (0, _.jsx)(`div`, {
            children: _(`#accountpreferences_authorized_devices_header`),
          }),
        }),
        (0, _.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(
                `#accountpreferences_authorized_devices_description`,
                (0, _.jsx)(`p`, {}),
              ),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  elHeader: (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        className: _,
                      }),
                      _(`#accountpreferences_authorized_device_active_now`),
                    ],
                  }),
                  rgDevices: _,
                }),
                (0, _.jsx)(_, {
                  elHeader: _(
                    `#accountpreferences_authorized_devices_recentseen_heading`,
                  ),
                  rgDevices: _,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      className: _,
                      onClick: _,
                      children: _(
                        `#accountpreferences_authorized_devices_remove_button`,
                      ),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        _?.length > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                className: _(`viqEyBlMfbY-`, `account_header_line noicon`),
                children: (0, _.jsx)(`div`, {
                  children: _(
                    `#accountpreferences_revoked_devices_revoked_header`,
                  ),
                }),
              }),
              (0, _.jsxs)(`div`, {
                className: `account_settings_container`,
                children: [
                  (0, _.jsx)(`div`, {
                    className: `shgsJDaY3CY-`,
                    children: _(_, (0, _.jsx)(`p`, {})),
                  }),
                  (0, _.jsx)(`div`, {
                    className: `jYhMQWJDOI0-`,
                    children: (0, _.jsx)(_, {
                      rgDevices: _,
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  });
function _(_) {
  let { rgDevices: _, elHeader: _ } = _;
  return _.length == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [_ && _, _],
      });
}
function _(_) {
  let _ = Date.now() / 1e3;
  return _(
    _.GetActiveDevices().find(
      (_) => _.logged_in && _.last_seen?.time > _ - 900,
    ) ?? _.GetActiveDevices()[0],
  ).country;
}
function _() {
  let [_] = _.useState(() => _(`requesting_token_id`, `application_config`));
  return _;
}
function _(_, _) {
  return _?.state > 0 && _.token_id && _.token_id == _?.last_seen_auth_token_id;
}
function _(_) {
  let {
      device: _,
      bActiveNow: _,
      bCurrentDevice: _,
      strActiveCountry: _,
      className: _,
      msgTwoFactorStatus: _,
      bShowAuthenticatorActivity: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _.useRef(void 0);
  _.useEffect(() => {
    _.current?.BHasFocus() && _.current?.Node().ForceMeasureFocusRing();
  }, [_]);
  let _ = _(_);
  _.length &&
    (_ = ` ${_(`#accountpreferences_authorized_devices_name_separator`)} "${_}"`);
  let _ = _(_),
    _ = null;
  _ =
    !_.country || !_ || _ == _.country
      ? (0, _.jsx)(`div`, {
          className: void 0,
          children: _.location,
        })
      : (0, _.jsx)(_, {
          className: void 0,
          toolTipContent: _(
            `#accountpreferences_authorized_devices_suspicous_tooltip`,
          ),
          direction: `top`,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [_.location, (0, _.jsx)(_, {})],
          }),
        });
  let _ = _(_, _);
  return (0, _.jsxs)(
    _,
    {
      className: _(_, _ && `fXJ1YocT7BI-`, _),
      navRef: _,
      onActivate: () => _(!_),
      children: [
        (0, _.jsx)(_, {
          device: _,
          bHasAuthenticator: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          device: _,
                        }),
                        _,
                      ],
                    }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `_9iz0N0Ekqfc-`,
                        children: _(
                          `#accountpreferences_authorized_devices_this_device`,
                        ),
                      }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _,
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: (0, _.jsx)(_, {
                        className: _({
                          [_]: !0,
                          [_]: _,
                        }),
                        children: (0, _.jsx)(_, {
                          direction: `down`,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(_, {
              device: _,
              bActiveNow: _,
              msgTwoFactorStatus: _ && _,
            }),
            _ &&
              (0, _.jsx)(_, {
                device: _,
              }),
          ],
        }),
      ],
    },
    `id_` + _.token_id,
  );
}
function _(_) {
  let { device: _, bActiveNow: _, msgTwoFactorStatus: _ } = _;
  return _?.state > 0
    ? (0, _.jsx)(_, {
        msgTwoFactorUsage: _.usages?.length > 0 ? _.usages[0] : null,
      })
    : _
      ? null
      : (0, _.jsx)(_, {
          device: _,
        });
}
function _(_) {
  let { msgTwoFactorUsage: _ } = _;
  if (!_ || !_.time) return null;
  let _ = _(_.time),
    _ = null;
  if (_.usage_type == 3) _ = _(`#authorized_devices_lasttwofactor_login`, _);
  else if (_.usage_type == 2) {
    let _ = _.confirmation_action == 1 ? `_allow` : `_cancel`;
    switch (_.confirmation_type) {
      case 2:
        _ = _(`#authorized_devices_lasttwofactor_confirmation_trade${_}`, _);
        break;
      case 3:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_marketlisting${_}`,
          _,
        );
        break;
      case 5:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_phonechange${_}`,
          _,
        );
        break;
      case 6:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_accountrecovery${_}`,
          _,
        );
        break;
      case 7:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_buildchange${_}`,
          _,
        );
        break;
      case 8:
        _ = _(`#authorized_devices_lasttwofactor_confirmation_adduser${_}`, _);
        break;
      case 9:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_registerapikey${_}`,
          _,
        );
        break;
      case 10:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${_}`,
          _,
        );
        break;
      case 11:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${_}`,
          _,
        );
        break;
      case 12:
        _ = _(
          `#authorized_devices_lasttwofactor_confirmation_marketpurchase${_}`,
          _,
        );
        break;
      case 13:
        _ = _(`#authorized_devices_lasttwofactor_confirmation_refund${_}`, _);
        break;
      default:
        _ = _(`#authorized_devices_lasttwofactor_confirmation_unknown${_}`, _);
    }
  }
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          children: _,
        }),
      })
    : null;
}
function _(_) {
  let { device: _ } = _,
    _ =
      _.first_seen?.time &&
      _.first_seen.time + _.PerWeek * 2 > Date.now() / 1e3,
    _ = _.effective_token_state == 5,
    _ = _(`#accountpreferences_authorized_devices_last_seen_max`);
  return (
    _.last_seen?.time
      ? (_ = _(_.last_seen.time))
      : _.time_updated &&
        _.time_updated > Math.floor(Date.now() / 1e3 - 7776e3) &&
        (_ = _(_.time_updated)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _(
                `#accountpreferences_authorized_devices_last_seen_title`,
              ),
            }),
            _,
            _ &&
              (0, _.jsxs)(`span`, {
                className: `tjO6BKRl12o-`,
                children: [
                  ` - `,
                  _(`#accountpreferences_authorized_devices_state_signedout`),
                ],
              }),
          ],
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `YTM6P3pGOLY-`,
            children: _(
              `#accountpreferences_authorized_devices_new_device`,
              (0, _.jsx)(`a`, {
                href: _.HELP_BASE_URL + `wizard/HelpWithAccountStolen`,
                onClick: (_) => {
                  _.stopPropagation();
                },
              }),
            ),
          }),
      ],
    })
  );
}
function _(_) {
  let { device: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(_(_), _(_.first_seen.time) + ` @ ` + _(_.first_seen.time)),
  });
}
function _(_) {
  let _ = _.authentication_type,
    _ = _.auth_type;
  if (_ == 2) return `#authorized_devices_default_qr`;
  if (_.effective_token_state == 5)
    return `#authorized_devices_remembered_machine`;
  switch (_) {
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
function _(_) {
  let { device: _, bHasAuthenticator: _ } = _,
    _ = _.effective_token_state == 5,
    _ = null;
  if (_.platform_type == 2)
    _ = _
      ? (0, _.jsx)(_, {
          className: _(_, _),
        })
      : (0, _.jsx)(_, {
          className: _,
        });
  else if (
    _.platform_type == 1 &&
    (_.gaming_device_type === 544 ||
      _.gaming_device_type == 545 ||
      _.gaming_device_type == 541)
  )
    _ = _
      ? (0, _.jsx)(_, {
          className: _(_, _),
        })
      : (0, _.jsx)(_, {
          className: _,
        });
  else
    switch (_.os_platform) {
      case _.k_EPlatformTypeWin32:
      case _.k_EPlatformTypeWin64:
      case _.k_EPlatformTypeOSX:
        _ = _
          ? (0, _.jsx)(_, {
              className: _(_, _),
            })
          : (0, _.jsx)(_, {
              className: _,
            });
        break;
      case _.k_EPlatformTypeAndroid32:
      case _.k_EPlatformTypeAndroid64:
      case _.k_EPlatformTypeLinux32:
      case _.k_EPlatformTypeLinux64:
        _ = (0, _.jsx)(_, {
          className: _,
        });
        break;
      case _.k_EPlatformTypeIOS32:
      case _.k_EPlatformTypeIOS64:
        _ = (0, _.jsx)(_, {
          className: _,
        });
    }
  return _
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          (0, _.jsx)(`img`, {
            src: _,
            className: _,
          }),
        ],
      })
    : _;
}
function _(_) {
  if (_.platform_type == 2) {
    let _ = new _.UAParser(_.token_description).getResult();
    return _.browser.name && _._.name
      ? _.browser.name == `WebKit`
        ? _._.name
        : _(
            `#accountpreferences_authorized_devices_browser_on_os`,
            _.browser.name,
            _._.name,
          )
      : _(`#accountpreferences_authorized_devices_browser_unmatched`);
  }
  return _.token_description;
}
function _(_) {
  let _ = _.last_seen ?? _.first_seen;
  if (_) {
    if (!_(_.EREALM))
      return {
        location: `${_.city ? _.city + `, ` : ``}${_.country}`,
        country: _.country,
      };
    if (_.city)
      return {
        location: _.city,
        country: _.country,
      };
  }
  return {
    location: _(`#accountpreferences_authorized_devices_loc_unknown`),
    country: ``,
  };
}
function _(_) {
  let { device: _ } = _;
  switch (_.platform_type) {
    case 3:
      return _(`#accountpreferences_authorized_devices_type_mobile`);
    case 1:
      return _.gaming_device_type === 544
        ? _(`#accountpreferences_authorized_devices_type_steamdeck`)
        : _.gaming_device_type == 545
          ? _(`#accountpreferences_authorized_devices_type_legiongos`)
          : _.gaming_device_type == 541
            ? _(`#accountpreferences_authorized_devices_type_steamos`)
            : _(`#accountpreferences_authorized_devices_type_desktop`);
    case 2:
      return _(`#accountpreferences_authorized_devices_type_browser`);
    default:
      return _(`#accountpreferences_authorized_devices_type_unknown`);
  }
}
function _(_) {
  let { closeModal: _ } = _;
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          children: _(`#authorized_devices_deauthorize_title`),
        }),
        (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              children: _(`#authorized_devices_deauthorize_msg`),
            }),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                strOKText: _(`#authorized_devices_deauthorize_proceed`),
                onOK: async () => {
                  let _ = new FormData();
                  _.set(`action`, `deauthorize`),
                    _.set(`sessionid`, _()),
                    await _.default.post(
                      _.STORE_BASE_URL + `twofactor/manage_action`,
                      _,
                    );
                  let _ = document.createElement(`form`);
                  (_.method = `POST`), (_.action = _.STORE_BASE_URL + `logout`);
                  let _ = document.createElement(`input`);
                  (_.type = `hidden`),
                    (_.name = `sessionid`),
                    (_.value = _()),
                    _.appendChild(_),
                    document.body.appendChild(_),
                    _.submit();
                },
                onCancel: _,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `jUbJDWS4KbM-`,
  _ = `_0KS5vxiuuas-`,
  _ = `RKNvgkD9-fw-`,
  _ = `fYndRKZmMkc-`,
  _ = `h8-4lFF5M58-`,
  _ = `xGrGbCIFdZU-`,
  _ = `_5P46ZCZGTXo-`,
  _ = `-NSP4bX00mY-`,
  _ = `FDb0NIXOm0A-`,
  _ = `FdmRCehAGYI-`,
  _ = `TJDzvw9F008-`,
  _ = `UdRjmwOXHfE-`,
  _ = `M0mNJBjOgYk-`,
  _ = `_9fLN420LJa4-`,
  _ = `_1v5wNzaTsw8-`,
  _ = `q-crQp6szwI-`,
  _ = `n8evf-z8Ij8-`,
  _ = `mTLl2oNfUQ4-`,
  _ = `wiKtgWcwiPk-`,
  _ = `_5Uqj-ZJajHU-`,
  _ = `kzUM4acS-oo-`,
  _ = `Ik-mDI6yuZA-`,
  _ = `_8k8bd7Cwz7o-`,
  _ = `_7-ZGCcZvb7s-`,
  _ = `S--CyhEr6Jk-`;
function _(_) {
  return (0, _.jsxs)(`div`, {
    children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
  });
}
function _(_) {
  let _ = _.HELP_BASE_URL + `faqs/view/7EFD-3CAE-64D3-1C31`,
    _ = _.Get(),
    _ = _.GetTwoFactorStatus()?.steamguard_scheme == 2;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: `account_header_line`,
        children: (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            _(`#youraccount_account_security`),
          ],
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, `account_settings_container`),
        children: [
          (0, _.jsx)(`div`, {
            children: _(
              `#accountpreferences_account_security_description`,
              (0, _.jsx)(_, {
                target: `_blank`,
                href: _,
              }),
            ),
          }),
          _
            ? (0, _.jsx)(_, {
                msgTwoFactorStatus: _.GetTwoFactorStatus(),
                strFaqUrl: _,
              })
            : (0, _.jsx)(_, {
                strFaqUrl: _,
              }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                msgTwoFactorStatus: _.GetTwoFactorStatus(),
              }),
              _ && (0, _.jsx)(_, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { msgTwoFactorStatus: _, strFaqUrl: _ } = _,
    _ = _.Get(),
    _ = _(_),
    _ = _(),
    _ = [...(_.GetActiveDevices() ?? []), ...(_.GetActiveDevices() ?? [])],
    _ = null;
  return (
    _?.last_seen_auth_token_id &&
      ((_ = _.find((_) => _.token_id === _.last_seen_auth_token_id)),
      _?.length > 0 && _?.token_id),
    (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`img`, {
              className: _,
              src: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#accountpreferences_account_security_steamguard`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                children: _(
                  `#accountpreferences_account_security_steamguard_remove`,
                ),
              }),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !!_ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    className: `-jL8shO-BT4-`,
                    device: _,
                    strActiveCountry: _,
                    msgTwoFactorStatus: _,
                    bShowAuthenticatorActivity: !0,
                  }),
                  (0, _.jsx)(`div`, {
                    className: `fYndRKZmMkc-`,
                  }),
                ],
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  strLabel: _(`#accountpreferences_account_security_move`),
                  href: _.HELP_BASE_URL + `faqs/view/29A9-9EEE-09F0-75F9`,
                }),
                (0, _.jsx)(_, {
                  strLabel: _(`#accountpreferences_account_security_help_lost`),
                  href: _.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: (0, _.jsx)(_, {
                    href: _,
                    target: `_blank`,
                    children: _(
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
function _(_) {
  let { strFaqUrl: _ } = _,
    _ = _.Get().GetLatestAndroidAppVersion();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#accountpreferences_account_security_no_steamguard`),
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(
                      `#accountpreferences_account_security_get_app`,
                      (0, _.jsx)(_, {
                        href: _.STORE_BASE_URL + `mobile#mobile_section`,
                      }),
                    ),
                  }),
                  (0, _.jsx)(`div`, {
                    children: _(`#accountpreferences_account_security_scan_qr`),
                  }),
                ],
              }),
              (0, _.jsx)(`img`, {
                src: _,
                className: _,
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: _(
                  `#accountpreferences_account_security_mobile_os_reqs`,
                ),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    href: `https://itunes.apple.com/us/app/steam-mobile/id495369748`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, _.jsx)(_, {
                      srcs: _(
                        _.IMG_URL +
                          `mobile/localizedimages/appleappstore/apple_store_`,
                        `.png`,
                      ),
                      className: _,
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, _.jsx)(_, {
                      srcs: _(
                        _.IMG_URL +
                          `mobile/localizedimages/googleplaystore/google_play_store_`,
                        `.png`,
                      ),
                      className: _,
                    }),
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                children: _(
                  `#accountpreferences_account_security_apk_download`,
                  (0, _.jsx)(`a`, {
                    href: `https://media.steampowered.com/apps/steam-android/steam-${_}.apk`,
                  }),
                ),
              }),
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`a`, {
                  href: _,
                  target: `_blank`,
                  children: _(
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
function _(_, _) {
  let _ = _.GetLanguageFallback(_.LANGUAGE),
    _ = [_ + _.LANGUAGE + _];
  return _.LANGUAGE != _ && _.push(_ + _ + _), _;
}
function _(_) {
  let _ = _.Get(),
    _ = _.IN_MOBILE_WEBVIEW;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_account_name`),
        strText: _.GetAccountName(),
      }),
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_change_pass`),
        href:
          _.HELP_BASE_URL + `wizard/HelpChangePassword?redir=store/account/`,
        target: _ ? `_blank` : void 0,
      }),
    ],
  });
}
function _(_) {
  let { msgTwoFactorStatus: _ } = _,
    _ = _.Get(),
    _ = _.email_validated,
    _ = _.steamguard_scheme == 1,
    _ = _.IN_MOBILE_WEBVIEW;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_email`),
        strText: _.GetEmailAddress(),
      }),
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_email_status`),
        strText: _(
          _ ? `#youraccount_email_verified` : `#youraccount_email_unverified`,
        ),
      }),
      _ &&
        (0, _.jsx)(_, {
          strLabel: _(`#accountpreferences_account_security_verification`),
          strText: _(`#accountpreferences_account_security_via_email`),
        }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            strLabel: _(`#accountpreferences_account_security_change_email`),
            href:
              _.HELP_BASE_URL + `wizard/HelpChangeEmail?redir=store/account/`,
            target: _ ? `_blank` : void 0,
          }),
          _ &&
            (0, _.jsx)(_, {
              strLabel: _(
                `#accountpreferences_account_security_remove_email_guard`,
              ),
              href: _.STORE_BASE_URL + `twofactor/manage`,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let _ = _.Get(),
    _ = _(`#accountpreferences_account_security_phone_none`);
  return (
    _.GetPhoneHint() &&
      (_ = _(
        `#accountpreferences_account_security_phone_hint`,
        _.GetPhoneHint(),
      )),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          strLabel: _(`#accountpreferences_account_security_phone`),
          strText: _,
        }),
        (0, _.jsx)(_, {
          strLabel: _(`#accountpreferences_account_security_manage_phone`),
          href: _.STORE_BASE_URL + `phone/manage`,
        }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_backup_codes`),
      }),
      (0, _.jsx)(_, {
        strLabel: _(`#accountpreferences_account_security_get_backup_codes`),
        href: _.STORE_BASE_URL + `twofactor/emergency_codes`,
      }),
    ],
  });
}
function _(_) {
  let { strLabel: _, strText: _ } = _;
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _,
      }),
      !!_ &&
        (0, _.jsx)(`span`, {
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { strLabel: _, href: _, target: _ } = _;
  return (0, _.jsx)(`div`, {
    children: (0, _.jsx)(_, {
      className: _,
      href: _,
      target: _,
      children: _,
    }),
  });
}
var _ = _.lazy(() =>
    _(
      () => import(`./familymanagement.js?contenthash=DL3s0SUP`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56,
      ]),
      import.meta.url,
    ),
  ),
  _ = {
    CookieSettings: () => `/cookiepreferences`,
    FamilyManagement: () => `/familymanagement`,
    SecurityDevices: () => `/authorizeddevices`,
    PlaytestInvites: () => `/playtestinvites`,
    Playtests: () => `/playtests`,
  },
  _ = (_) => {
    let _ = _.match.url,
      _ = _;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: `${_}${_.CookieSettings()}`,
          render: () =>
            (0, _.jsx)(_, {
              config: {
                "cookie-preferences": () => (0, _.jsx)(_, {}),
              },
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_}${_.FamilyManagement()}`,
          render: () =>
            (0, _.jsx)(_, {
              config: {
                "family-management": () => (0, _.jsx)(_, {}),
              },
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_}${_.SecurityDevices()}`,
          render: () =>
            (0, _.jsx)(_, {
              config: {
                "security-devices": () => (0, _.jsx)(_, {}),
              },
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_}${_.PlaytestInvites()}`,
          render: () =>
            (0, _.jsx)(_, {
              config: {
                "playtest-invites": () =>
                  (0, _.jsx)(_, {
                    bShowPlaytestOverview: !0,
                  }),
              },
            }),
        }),
        (0, _.jsx)(_, {
          path: `${_}${_.Playtests()}`,
          render: () =>
            (0, _.jsx)(_, {
              config: {
                playtests: (_) =>
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              },
            }),
        }),
      ],
    });
  };
export { _ as AccountPreferencesRoutes, _ as default };

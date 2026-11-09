import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./enums_epersonastateflag.js";
import { _ } from "./persona.js";
import { _ } from "./alternate_icons.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `SF1sJnuMqxw-`,
  _ = `rALHh8gNXzk-`,
  _ = `BPUdGzLfnOs-`,
  _ = `JOLhLnwh07k-`,
  _ = `ZNkrEoiqVl8-`,
  _ = `QJ-7IJ25nrU-`,
  _ = `PxCAsy1vdvA-`,
  _ = `mJ-ovG6Q-Nw-`,
  _ = _(),
  _ = class extends _.Component {
    static get hoverClass() {
      return _;
    }
    render() {
      let {
          persona: _,
          animating: _,
          className: _,
          size: _,
          dim: _,
          ..._
        } = this.props,
        _ = ``;
      return (
        _ == `medium` ? (_ = _) : _ == `large` && (_ = _),
        (0, _.jsxs)(`div`, {
          className: _(
            _,
            _.online_state,
            _,
            _ && `h-MpRJExIDY-`,
            _,
            _ && `rum5qK7fcnY-`,
          ),
          ..._,
          children: [
            (0, _.jsx)(`div`, {
              "data-text": `Z`,
              className: _(_, _),
              children: `Z`,
            }),
            (0, _.jsx)(`div`, {
              "data-text": `Z`,
              className: _(_, _),
              children: `Z`,
            }),
            (0, _.jsx)(`div`, {
              "data-text": `Z`,
              className: _(_, _),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
_ = _([_], _);
var _ = _((_) => {
    let { persona: _, className: _, ..._ } = _;
    if (!_ || !_.is_online) return null;
    let _ = _.HasStateFlag(512),
      _ = _.HasStateFlag(_),
      _ = _.m_eGamingDeviceType == 544,
      _ = _.m_eGamingDeviceType == 545,
      _ = !_ && !_ && !_ && _.HasStateFlag(1024);
    return (0, _.jsxs)(_.Fragment, {
      children: [
        _ &&
          (0, _.jsx)(`div`, {
            className: _(_, `da-aiolTzeA-`, `blHJJNodWx8-`, _(_)),
            title: _(`#Platform_Hint_Mobile`),
            ..._,
            children: (0, _.jsx)(_, {}),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: _(_, `da-aiolTzeA-`, `BcFXA8lWH3E-`, _(_)),
            title: _(`#Platform_Hint_VR`),
            ..._,
            children: (0, _.jsx)(_, {}),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: _(_, `da-aiolTzeA-`, void 0, _(_)),
            title: _(`#Platform_Hint_BigPicture`),
            ..._,
            children: (0, _.jsx)(_, {}),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: _(_, `da-aiolTzeA-`, `mTNeCLqRe-M-`, _(_)),
            title: _(`#Platform_Hint_SteamDeck`),
            ..._,
            children: (0, _.jsx)(_, {}),
          }),
        _ &&
          (0, _.jsx)(`div`, {
            className: _(_, `da-aiolTzeA-`, `mTNeCLqRe-M-`, _(_)),
            title: _(`#Platform_Hint_LegionGoS`),
            ..._,
            children: (0, _.jsx)(_, {}),
          }),
      ],
    });
  }),
  _ = `JT7Tc3-HVD8-`,
  _ = `j-7wpj1lnTs-`,
  _ = `YSmzqRXBp-c-`,
  _ = `DiM-YEuAiRQ-`,
  _ = `cTbg3n7roHw-`,
  _ = `VoqT3Dd8TPE-`,
  _ = `nBCm-QvuKr8-`,
  _ = `VirJ-To7GvQ-`,
  _ = `cj674wkduhQ-`,
  _ = `ne8a3CldZh4-`,
  _ = `bTQkmHfshdg-`;
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _(`#User_WantsToPlay`),
      }),
      `\xA0–\xA0`,
      _.persona.GetCurrentGameName(),
    ],
  });
}
var _ = class extends _.Component {
  render() {
    let {
        className: _,
        onContextMenu: _,
        persona: _,
        eFriendRelationship: _,
        bIsSelf: _,
        bParenthesizeNicknames: _,
        strNickname: _,
        bCompactView: _,
        bHideGameName: _,
        bHideEnhancedRichPresenceLabel: _,
        bHideSnooze: _,
        bHideStatus: _,
        renderStatus: _,
        renderRichPresence: _,
        bHidePersona: _,
        bDNDSet: _,
        bHasPartyBeacon: _,
        bHasGamePrivacy: _,
        bNoMask: _,
        bEllipsisName: _,
        bDropPadding: _,
        ..._
      } = this.props,
      _ = null,
      _ = null,
      _ = null,
      _ = [_, void 0, _(_), _ ? _ : void 0, _ ? _ : void 0];
    _ || _.has_public_party_beacon
      ? (_ = (0, _.jsx)(_, {
          persona: _,
        }))
      : _(_)
        ? ((_ = _(`#PersonaStateBlocked`)), _.push(_))
        : _.is_ingame
          ? ((_ =
              !_.is_in_nonsteam_game || _ || _(_)
                ? _.GetCurrentGameName()
                : _(`#PersonaStateInNonSteamGame`)),
            !_ && !_
              ? (_ = _.GetCurrentGameRichPresence())
              : _ && _.is_awayOrSnooze && (_ = _(`#PersonaStateAway`)))
          : _.m_broadcastAccountId && (_ = _(`#PersonaStateWatchingBroadcast`)),
      (_ ||= _.GetLocalizedOnlineStatus()),
      _ && (_ = _());
    let _ = !_ && !_;
    _ === !1 && (_ = !0),
      _.is_awayOrSnooze &&
        _ &&
        (_ = (0, _.jsx)(_, {
          persona: _,
        }));
    let _ = (0, _.jsx)(_.Fragment, {});
    _
      ? (_ = (0, _.jsx)(`div`, {
          className: `ContextMenuButton`,
          onClick: _,
          children: (0, _.jsx)(_, {}),
        }))
      : _.push(_),
      _ && _.push(_),
      _ && (_ = _()),
      (_ || !_) && _.push(_);
    let _ = !_.is_ingame && !_,
      _ = !_ && _,
      _ = _ && (!_ || !_),
      _ = _(_()?.LAUNCHER_TYPE ?? 0),
      _ = _ && !_,
      _ = _ ? _ : _.m_strPlayerName,
      _ = !_ && (_ || _) && _;
    return (0, _.jsxs)(`div`, {
      ..._,
      className: _(..._),
      onContextMenu: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _(_, _ ? _ : void 0),
          children: [
            (0, _.jsxs)(`div`, {
              className: _(_, _ ? _ : void 0),
              children: [
                _ || `\xA0`,
                _ &&
                  _ &&
                  (0, _.jsxs)(`span`, {
                    className: `eOmjO6XkTx4-`,
                    children: [`(`, _, `)`],
                  }),
              ],
            }),
            _ &&
              (0, _.jsx)(`div`, {
                className: `TGKbpc7Wcyk-`,
                title: _(`#User_ToggleDoNotDisturb`),
                children: (0, _.jsx)(_, {}),
              }),
            _ &&
              (0, _.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: _(`#isNickname`),
                children: ` *`,
              }),
            (0, _.jsx)(_, {
              persona: _,
            }),
            _,
            (_.m_bPlayerNamePending || _.m_bAvatarPending) &&
              _ &&
              (0, _.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: _(`#SteamChina_PendingPersonaName`),
                children: (0, _.jsx)(_, {}),
              }),
            _,
          ],
        }),
        !_ &&
          (0, _.jsxs)(`div`, {
            className: `_9lhfreYH7b4-`,
            children: [
              (_ || _) &&
                (0, _.jsxs)(`div`, {
                  className: _(
                    `-rLUGeiOB5k-`,
                    _ ? `j-7wpj1lnTs-` : void 0,
                    `KzNkmPbkAaI-`,
                    _ && `VWRtCEXAYxQ-`,
                    `no-drag`,
                  ),
                  children: [
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `RUAwoGhbIvU-`,
                        title: _(`#User_GameInfoHidden`),
                        children: (0, _.jsx)(_, {}),
                      }),
                    _,
                  ],
                }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: _(`KzNkmPbkAaI-`, _ && `VWRtCEXAYxQ-`, `no-drag`),
                  children: [_, ` `],
                }),
            ],
          }),
      ],
    });
  }
};
_ = _([_], _);
var _ = _((_) => {
  let {
      persona: _,
      bParenthesizeNicknames: _,
      strNickname: _,
      bIgnorePersonaStatus: _,
      bDisableColoring: _,
      className: _,
      ..._
    } = _,
    _ = _ && !_ ? _ : _.m_strPlayerName;
  return (0, _.jsx)(`span`, {
    ..._,
    className: _(_, _ && `Zhs6svnnbFQ-`, !_ && _(_)),
    children: (0, _.jsxs)(`span`, {
      className: _,
      children: [
        _ || `\xA0`,
        _ &&
          _ &&
          (0, _.jsxs)(`span`, {
            className: `eOmjO6XkTx4-`,
            children: [`(`, _, `)`],
          }),
      ],
    }),
  });
});
export { _, _ };

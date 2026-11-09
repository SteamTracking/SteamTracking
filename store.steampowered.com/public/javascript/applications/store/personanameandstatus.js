/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r } from "./libraries.js";
import { n as i } from "./enums_epersonastateflag.js";
import { n as a } from "./persona.js";
import { n as o } from "./alternate_icons.js";
import {
  Ba as s,
  Fo as c,
  Mb as l,
  Sc as u,
  Ub as d,
  Uy as f,
  aS as p,
  fo as m,
  ho as h,
  iS as g,
  lc as _,
  rS as ee,
  ro as te,
  zs as v,
} from "./main.js";
var y = e(t()),
  b = `SF1sJnuMqxw-`,
  x = `rALHh8gNXzk-`,
  S = `BPUdGzLfnOs-`,
  C = `JOLhLnwh07k-`,
  w = `ZNkrEoiqVl8-`,
  T = `QJ-7IJ25nrU-`,
  E = `PxCAsy1vdvA-`,
  D = `mJ-ovG6Q-Nw-`,
  O = n(),
  k = class extends y.Component {
    static get hoverClass() {
      return D;
    }
    render() {
      let {
          persona: e,
          animating: t,
          className: n,
          size: r,
          dim: i,
          ...a
        } = this.props,
        o = ``;
      return (
        r == `medium` ? (o = S) : r == `large` && (o = C),
        (0, O.jsxs)(`div`, {
          className: u(
            b,
            e.online_state,
            n,
            t && `h-MpRJExIDY-`,
            o,
            i && `rum5qK7fcnY-`,
          ),
          ...a,
          children: [
            (0, O.jsx)(`div`, {
              "data-text": `Z`,
              className: u(x, w),
              children: `Z`,
            }),
            (0, O.jsx)(`div`, {
              "data-text": `Z`,
              className: u(x, T),
              children: `Z`,
            }),
            (0, O.jsx)(`div`, {
              "data-text": `Z`,
              className: u(x, E),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
k = l([r], k);
var A = r((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let c = t.HasStateFlag(512),
      l = t.HasStateFlag(i),
      d = t.m_eGamingDeviceType == 544,
      p = t.m_eGamingDeviceType == 545,
      m = !d && !p && !l && t.HasStateFlag(1024);
    return (0, O.jsxs)(y.Fragment, {
      children: [
        c &&
          (0, O.jsx)(`div`, {
            className: u(n, `da-aiolTzeA-`, `blHJJNodWx8-`, a(t)),
            title: f(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, O.jsx)(o, {}),
          }),
        l &&
          (0, O.jsx)(`div`, {
            className: u(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, a(t)),
            title: f(`#Platform_Hint_VR`),
            ...r,
            children: (0, O.jsx)(_, {}),
          }),
        m &&
          (0, O.jsx)(`div`, {
            className: u(n, `da-aiolTzeA-`, void 0, a(t)),
            title: f(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, O.jsx)(s, {}),
          }),
        d &&
          (0, O.jsx)(`div`, {
            className: u(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: f(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, O.jsx)(v, {}),
          }),
        p &&
          (0, O.jsx)(`div`, {
            className: u(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: f(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, O.jsx)(v, {}),
          }),
      ],
    });
  }),
  j = `JT7Tc3-HVD8-`,
  M = `j-7wpj1lnTs-`,
  N = `YSmzqRXBp-c-`,
  P = `DiM-YEuAiRQ-`,
  F = `cTbg3n7roHw-`,
  I = `VoqT3Dd8TPE-`,
  L = `nBCm-QvuKr8-`,
  R = `VirJ-To7GvQ-`,
  z = `cj674wkduhQ-`,
  B = `ne8a3CldZh4-`,
  ne = `bTQkmHfshdg-`;
function re(e) {
  return (0, O.jsxs)(y.Fragment, {
    children: [
      (0, O.jsx)(`span`, { className: R, children: f(`#User_WantsToPlay`) }),
      `\xA0–\xA0`,
      e.persona.GetCurrentGameName(),
    ],
  });
}
var V = class extends y.Component {
  render() {
    let {
        className: e,
        onContextMenu: t,
        persona: n,
        eFriendRelationship: r,
        bIsSelf: i,
        bParenthesizeNicknames: o,
        strNickname: s,
        bCompactView: l,
        bHideGameName: _,
        bHideEnhancedRichPresenceLabel: v,
        bHideSnooze: y,
        bHideStatus: b,
        renderStatus: x,
        renderRichPresence: S,
        bHidePersona: C,
        bDNDSet: w,
        bHasPartyBeacon: T,
        bHasGamePrivacy: E,
        bNoMask: D,
        bEllipsisName: R,
        bDropPadding: V,
        ...H
      } = this.props,
      U = null,
      W = null,
      G = null,
      K = [e, void 0, a(n), l ? B : void 0, D ? I : void 0];
    T || n.has_public_party_beacon
      ? (W = (0, O.jsx)(re, { persona: n }))
      : g(r)
        ? ((W = f(`#PersonaStateBlocked`)), K.push(N))
        : n.is_ingame
          ? ((W =
              !n.is_in_nonsteam_game || i || p(r)
                ? n.GetCurrentGameName()
                : f(`#PersonaStateInNonSteamGame`)),
            !i && !C
              ? (G = n.GetCurrentGameRichPresence())
              : i && n.is_awayOrSnooze && (G = f(`#PersonaStateAway`)))
          : n.m_broadcastAccountId && (W = f(`#PersonaStateWatchingBroadcast`)),
      (W ||= n.GetLocalizedOnlineStatus()),
      x && (W = x());
    let q = !C && !y;
    y === !1 && (q = !0),
      n.is_awayOrSnooze && q && (U = (0, O.jsx)(k, { persona: n }));
    let J = (0, O.jsx)(O.Fragment, {});
    t
      ? (J = (0, O.jsx)(`div`, {
          className: `ContextMenuButton`,
          onClick: t,
          children: (0, O.jsx)(h, {}),
        }))
      : K.push(ne),
      C && K.push(z),
      S && (G = S()),
      (_ || !G) && K.push(L);
    let Y = !n.is_ingame && !b,
      X = !v && G,
      Z = W && (!_ || !X),
      ie = ee(d()?.LAUNCHER_TYPE ?? 0),
      Q = s && !o,
      ae = Q ? s : n.m_strPlayerName,
      $ = !C && (Z || Y) && X;
    return (0, O.jsxs)(`div`, {
      ...H,
      className: u(...K),
      onContextMenu: t,
      children: [
        (0, O.jsxs)(`div`, {
          className: u(j, $ ? M : void 0),
          children: [
            (0, O.jsxs)(`div`, {
              className: u(P, R ? F : void 0),
              children: [
                ae || `\xA0`,
                o &&
                  s &&
                  (0, O.jsxs)(`span`, {
                    className: `eOmjO6XkTx4-`,
                    children: [`(`, s, `)`],
                  }),
              ],
            }),
            w &&
              (0, O.jsx)(`div`, {
                className: `TGKbpc7Wcyk-`,
                title: f(`#User_ToggleDoNotDisturb`),
                children: (0, O.jsx)(m, {}),
              }),
            Q &&
              (0, O.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: f(`#isNickname`),
                children: ` *`,
              }),
            (0, O.jsx)(A, { persona: n }),
            U,
            (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
              ie &&
              (0, O.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: f(`#SteamChina_PendingPersonaName`),
                children: (0, O.jsx)(te, {}),
              }),
            J,
          ],
        }),
        !C &&
          (0, O.jsxs)(`div`, {
            className: `_9lhfreYH7b4-`,
            children: [
              (Z || Y) &&
                (0, O.jsxs)(`div`, {
                  className: u(
                    `-rLUGeiOB5k-`,
                    $ ? `j-7wpj1lnTs-` : void 0,
                    `KzNkmPbkAaI-`,
                    V && `VWRtCEXAYxQ-`,
                    `no-drag`,
                  ),
                  children: [
                    E &&
                      (0, O.jsx)(`div`, {
                        className: `RUAwoGhbIvU-`,
                        title: f(`#User_GameInfoHidden`),
                        children: (0, O.jsx)(c, {}),
                      }),
                    W,
                  ],
                }),
              X &&
                (0, O.jsxs)(`div`, {
                  className: u(`KzNkmPbkAaI-`, V && `VWRtCEXAYxQ-`, `no-drag`),
                  children: [G, ` `],
                }),
            ],
          }),
      ],
    });
  }
};
V = l([r], V);
var H = r((e) => {
  let {
      persona: t,
      bParenthesizeNicknames: n,
      strNickname: r,
      bIgnorePersonaStatus: i,
      bDisableColoring: o,
      className: s,
      ...c
    } = e,
    l = r && !n ? r : t.m_strPlayerName;
  return (0, O.jsx)(`span`, {
    ...c,
    className: u(s, o && `Zhs6svnnbFQ-`, !i && a(t)),
    children: (0, O.jsxs)(`span`, {
      className: P,
      children: [
        l || `\xA0`,
        n &&
          r &&
          (0, O.jsxs)(`span`, {
            className: `eOmjO6XkTx4-`,
            children: [`(`, r, `)`],
          }),
      ],
    }),
  });
});
export { V as n, H as t };

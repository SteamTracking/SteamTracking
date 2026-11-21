/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, l as r } from "./chunk~01cfc309bf.js";
import { n as i } from "./chunk~7e995db925.js";
import { n as a } from "./chunk~a35e3605eb.js";
import { n as o } from "./chunk~e3c69795ea.js";
import {
  Co as s,
  Eo as c,
  Kb as l,
  Ko as u,
  Nc as d,
  Xs as f,
  Za as p,
  _S as m,
  bc as h,
  mo as g,
  rb as _,
  rx as v,
  vS as y,
  yS as ee,
} from "./main.js";
var b = e(t()),
  x = `SF1sJnuMqxw-`,
  S = `rALHh8gNXzk-`,
  C = `BPUdGzLfnOs-`,
  w = `JOLhLnwh07k-`,
  T = `ZNkrEoiqVl8-`,
  E = `QJ-7IJ25nrU-`,
  D = `PxCAsy1vdvA-`,
  O = `mJ-ovG6Q-Nw-`,
  k = n(),
  A = class extends b.Component {
    static get hoverClass() {
      return O;
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
        r == `medium` ? (o = C) : r == `large` && (o = w),
        (0, k.jsxs)(`div`, {
          className: d(
            x,
            e.online_state,
            n,
            t && `h-MpRJExIDY-`,
            o,
            i && `rum5qK7fcnY-`,
          ),
          ...a,
          children: [
            (0, k.jsx)(`div`, {
              "data-text": `Z`,
              className: d(S, T),
              children: `Z`,
            }),
            (0, k.jsx)(`div`, {
              "data-text": `Z`,
              className: d(S, E),
              children: `Z`,
            }),
            (0, k.jsx)(`div`, {
              "data-text": `Z`,
              className: d(S, D),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
A = l([r], A);
var j = r((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let s = t.HasStateFlag(512),
      c = t.HasStateFlag(i),
      l = t.m_eGamingDeviceType == 544,
      u = t.m_eGamingDeviceType == 545,
      m = !l && !u && !c && t.HasStateFlag(1024);
    return (0, k.jsxs)(b.Fragment, {
      children: [
        s &&
          (0, k.jsx)(`div`, {
            className: d(n, `da-aiolTzeA-`, `blHJJNodWx8-`, a(t)),
            title: _(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, k.jsx)(o, {}),
          }),
        c &&
          (0, k.jsx)(`div`, {
            className: d(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, a(t)),
            title: _(`#Platform_Hint_VR`),
            ...r,
            children: (0, k.jsx)(h, {}),
          }),
        m &&
          (0, k.jsx)(`div`, {
            className: d(n, `da-aiolTzeA-`, void 0, a(t)),
            title: _(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, k.jsx)(p, {}),
          }),
        l &&
          (0, k.jsx)(`div`, {
            className: d(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: _(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, k.jsx)(f, {}),
          }),
        u &&
          (0, k.jsx)(`div`, {
            className: d(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: _(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, k.jsx)(f, {}),
          }),
      ],
    });
  }),
  M = `JT7Tc3-HVD8-`,
  N = `j-7wpj1lnTs-`,
  P = `YSmzqRXBp-c-`,
  F = `DiM-YEuAiRQ-`,
  I = `cTbg3n7roHw-`,
  L = `VoqT3Dd8TPE-`,
  te = `nBCm-QvuKr8-`,
  R = `VirJ-To7GvQ-`,
  ne = `cj674wkduhQ-`,
  re = `ne8a3CldZh4-`,
  z = `bTQkmHfshdg-`;
function B(e) {
  return (0, k.jsxs)(b.Fragment, {
    children: [
      (0, k.jsx)(`span`, { className: R, children: _(`#User_WantsToPlay`) }),
      `\xA0–\xA0`,
      e.persona.GetCurrentGameName(),
    ],
  });
}
var V = class extends b.Component {
  render() {
    let {
        className: e,
        onContextMenu: t,
        persona: n,
        eFriendRelationship: r,
        bIsSelf: i,
        bParenthesizeNicknames: o,
        strNickname: l,
        bCompactView: f,
        bHideGameName: p,
        bHideEnhancedRichPresenceLabel: h,
        bHideSnooze: b,
        bHideStatus: x,
        renderStatus: S,
        renderRichPresence: C,
        bHidePersona: w,
        bDNDSet: T,
        bHasPartyBeacon: E,
        bHasGamePrivacy: D,
        bNoMask: O,
        bEllipsisName: R,
        bDropPadding: V,
        ...H
      } = this.props,
      U = null,
      W = null,
      G = null,
      K = [e, void 0, a(n), f ? re : void 0, O ? L : void 0];
    (E || n.has_public_party_beacon
      ? (W = (0, k.jsx)(B, { persona: n }))
      : y(r)
        ? ((W = _(`#PersonaStateBlocked`)), K.push(P))
        : n.is_ingame
          ? ((W =
              !n.is_in_nonsteam_game || i || ee(r)
                ? n.GetCurrentGameName()
                : _(`#PersonaStateInNonSteamGame`)),
            !i && !w
              ? (G = n.GetCurrentGameRichPresence())
              : i && n.is_awayOrSnooze && (G = _(`#PersonaStateAway`)))
          : n.m_broadcastAccountId && (W = _(`#PersonaStateWatchingBroadcast`)),
      (W ||= n.GetLocalizedOnlineStatus()),
      S && (W = S()));
    let q = !w && !b;
    (b === !1 && (q = !0),
      n.is_awayOrSnooze && q && (U = (0, k.jsx)(A, { persona: n })));
    let J = (0, k.jsx)(k.Fragment, {});
    (t
      ? (J = (0, k.jsx)(`div`, {
          className: `ContextMenuButton`,
          onClick: t,
          children: (0, k.jsx)(c, {}),
        }))
      : K.push(z),
      w && K.push(ne),
      C && (G = C()),
      (p || !G) && K.push(te));
    let Y = !n.is_ingame && !x,
      X = !h && G,
      Z = W && (!p || !X),
      ie = m(v()?.LAUNCHER_TYPE ?? 0),
      Q = l && !o,
      ae = Q ? l : n.m_strPlayerName,
      $ = !w && (Z || Y) && X;
    return (0, k.jsxs)(`div`, {
      ...H,
      className: d(...K),
      onContextMenu: t,
      children: [
        (0, k.jsxs)(`div`, {
          className: d(M, $ ? N : void 0),
          children: [
            (0, k.jsxs)(`div`, {
              className: d(F, R ? I : void 0),
              children: [
                ae || `\xA0`,
                o &&
                  l &&
                  (0, k.jsxs)(`span`, {
                    className: `eOmjO6XkTx4-`,
                    children: [`(`, l, `)`],
                  }),
              ],
            }),
            T &&
              (0, k.jsx)(`div`, {
                className: `TGKbpc7Wcyk-`,
                title: _(`#User_ToggleDoNotDisturb`),
                children: (0, k.jsx)(s, {}),
              }),
            Q &&
              (0, k.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: _(`#isNickname`),
                children: ` *`,
              }),
            (0, k.jsx)(j, { persona: n }),
            U,
            (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
              ie &&
              (0, k.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: _(`#SteamChina_PendingPersonaName`),
                children: (0, k.jsx)(g, {}),
              }),
            J,
          ],
        }),
        !w &&
          (0, k.jsxs)(`div`, {
            className: `_9lhfreYH7b4-`,
            children: [
              (Z || Y) &&
                (0, k.jsxs)(`div`, {
                  className: d(
                    `-rLUGeiOB5k-`,
                    $ ? `j-7wpj1lnTs-` : void 0,
                    `KzNkmPbkAaI-`,
                    V && `VWRtCEXAYxQ-`,
                    `no-drag`,
                  ),
                  children: [
                    D &&
                      (0, k.jsx)(`div`, {
                        className: `RUAwoGhbIvU-`,
                        title: _(`#User_GameInfoHidden`),
                        children: (0, k.jsx)(u, {}),
                      }),
                    W,
                  ],
                }),
              X &&
                (0, k.jsxs)(`div`, {
                  className: d(`KzNkmPbkAaI-`, V && `VWRtCEXAYxQ-`, `no-drag`),
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
  return (0, k.jsx)(`span`, {
    ...c,
    className: d(s, o && `Zhs6svnnbFQ-`, !i && a(t)),
    children: (0, k.jsxs)(`span`, {
      className: F,
      children: [
        l || `\xA0`,
        n &&
          r &&
          (0, k.jsxs)(`span`, {
            className: `eOmjO6XkTx4-`,
            children: [`(`, r, `)`],
          }),
      ],
    }),
  });
});
export { V as n, H as t };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, c as n, dt as r } from "./chunk~01cfc309bf.js";
import { n as i } from "./chunk~7e995db925.js";
import { n as a } from "./chunk~a35e3605eb.js";
import { n as o } from "./chunk~e3c69795ea.js";
import {
  Do as s,
  Pc as c,
  Qa as l,
  Zs as u,
  bS as d,
  ho as f,
  ib as p,
  ix as m,
  qb as h,
  qo as g,
  wo as ee,
  xS as te,
  xc as _,
  yS as v,
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
  O = r(),
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
          className: c(
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
              className: c(x, w),
              children: `Z`,
            }),
            (0, O.jsx)(`div`, {
              "data-text": `Z`,
              className: c(x, T),
              children: `Z`,
            }),
            (0, O.jsx)(`div`, {
              "data-text": `Z`,
              className: c(x, E),
              children: `Z`,
            }),
          ],
        })
      );
    }
  };
k = h([n], k);
var A = n((e) => {
    let { persona: t, className: n, ...r } = e;
    if (!t || !t.is_online) return null;
    let s = t.HasStateFlag(512),
      d = t.HasStateFlag(i),
      f = t.m_eGamingDeviceType == 544,
      m = t.m_eGamingDeviceType == 545,
      h = !f && !m && !d && t.HasStateFlag(1024);
    return (0, O.jsxs)(y.Fragment, {
      children: [
        s &&
          (0, O.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `blHJJNodWx8-`, a(t)),
            title: p(`#Platform_Hint_Mobile`),
            ...r,
            children: (0, O.jsx)(o, {}),
          }),
        d &&
          (0, O.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `BcFXA8lWH3E-`, a(t)),
            title: p(`#Platform_Hint_VR`),
            ...r,
            children: (0, O.jsx)(_, {}),
          }),
        h &&
          (0, O.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, void 0, a(t)),
            title: p(`#Platform_Hint_BigPicture`),
            ...r,
            children: (0, O.jsx)(l, {}),
          }),
        f &&
          (0, O.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: p(`#Platform_Hint_SteamDeck`),
            ...r,
            children: (0, O.jsx)(u, {}),
          }),
        m &&
          (0, O.jsx)(`div`, {
            className: c(n, `da-aiolTzeA-`, `mTNeCLqRe-M-`, a(t)),
            title: p(`#Platform_Hint_LegionGoS`),
            ...r,
            children: (0, O.jsx)(u, {}),
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
      (0, O.jsx)(`span`, { className: R, children: p(`#User_WantsToPlay`) }),
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
        strNickname: l,
        bCompactView: u,
        bHideGameName: h,
        bHideEnhancedRichPresenceLabel: _,
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
      K = [e, void 0, a(n), u ? B : void 0, D ? I : void 0];
    (T || n.has_public_party_beacon
      ? (W = (0, O.jsx)(re, { persona: n }))
      : d(r)
        ? ((W = p(`#PersonaStateBlocked`)), K.push(N))
        : n.is_ingame
          ? ((W =
              !n.is_in_nonsteam_game || i || te(r)
                ? n.GetCurrentGameName()
                : p(`#PersonaStateInNonSteamGame`)),
            !i && !C
              ? (G = n.GetCurrentGameRichPresence())
              : i && n.is_awayOrSnooze && (G = p(`#PersonaStateAway`)))
          : n.m_broadcastAccountId && (W = p(`#PersonaStateWatchingBroadcast`)),
      (W ||= n.GetLocalizedOnlineStatus()),
      x && (W = x()));
    let q = !C && !y;
    (y === !1 && (q = !0),
      n.is_awayOrSnooze && q && (U = (0, O.jsx)(k, { persona: n })));
    let J = (0, O.jsx)(O.Fragment, {});
    (t
      ? (J = (0, O.jsx)(`div`, {
          className: `ContextMenuButton`,
          onClick: t,
          children: (0, O.jsx)(s, {}),
        }))
      : K.push(ne),
      C && K.push(z),
      S && (G = S()),
      (h || !G) && K.push(L));
    let Y = !n.is_ingame && !b,
      X = !_ && G,
      Z = W && (!h || !X),
      ie = v(m()?.LAUNCHER_TYPE ?? 0),
      Q = l && !o,
      ae = Q ? l : n.m_strPlayerName,
      $ = !C && (Z || Y) && X;
    return (0, O.jsxs)(`div`, {
      ...H,
      className: c(...K),
      onContextMenu: t,
      children: [
        (0, O.jsxs)(`div`, {
          className: c(j, $ ? M : void 0),
          children: [
            (0, O.jsxs)(`div`, {
              className: c(P, R ? F : void 0),
              children: [
                ae || `\xA0`,
                o &&
                  l &&
                  (0, O.jsxs)(`span`, {
                    className: `eOmjO6XkTx4-`,
                    children: [`(`, l, `)`],
                  }),
              ],
            }),
            w &&
              (0, O.jsx)(`div`, {
                className: `TGKbpc7Wcyk-`,
                title: p(`#User_ToggleDoNotDisturb`),
                children: (0, O.jsx)(ee, {}),
              }),
            Q &&
              (0, O.jsx)(`span`, {
                className: `-oIKqTeuyo8-`,
                title: p(`#isNickname`),
                children: ` *`,
              }),
            (0, O.jsx)(A, { persona: n }),
            U,
            (n.m_bPlayerNamePending || n.m_bAvatarPending) &&
              ie &&
              (0, O.jsx)(`div`, {
                className: `qAItuMOYwsU-`,
                title: p(`#SteamChina_PendingPersonaName`),
                children: (0, O.jsx)(f, {}),
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
                  className: c(
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
                        title: p(`#User_GameInfoHidden`),
                        children: (0, O.jsx)(g, {}),
                      }),
                    W,
                  ],
                }),
              X &&
                (0, O.jsxs)(`div`, {
                  className: c(`KzNkmPbkAaI-`, V && `VWRtCEXAYxQ-`, `no-drag`),
                  children: [G, ` `],
                }),
            ],
          }),
      ],
    });
  }
};
V = h([n], V);
var H = n((e) => {
  let {
      persona: t,
      bParenthesizeNicknames: n,
      strNickname: r,
      bIgnorePersonaStatus: i,
      bDisableColoring: o,
      className: s,
      ...l
    } = e,
    u = r && !n ? r : t.m_strPlayerName;
  return (0, O.jsx)(`span`, {
    ...l,
    className: c(s, o && `Zhs6svnnbFQ-`, !i && a(t)),
    children: (0, O.jsxs)(`span`, {
      className: P,
      children: [
        u || `\xA0`,
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

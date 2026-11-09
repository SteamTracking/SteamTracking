/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r } from "./libraries.js";
import { Uy as i, ll as a, nl as o, rx as s } from "./main.js";
var c = e(n()),
  l = `ut9Zlzvv8tU-`,
  u = `_918ET1T3Q44-`,
  d = `QNmSW6M-UmM-`,
  f = `kAJxJuJ2QLc-`,
  p = `LtwI-MuOmiI-`,
  m = `x8oQENqyJ1s-`,
  h = `d7THf9xgFO0-`,
  g = `iontxnFO5hk-`,
  _ = `d7UCTQDYGFg-`,
  v = `_2Pn7yJB3D4M-`,
  y = `_0JhQq90Mrho-`,
  b = t({
    AccessibilityFeatureDisplay: () => D,
    AccessibilityFeaturesFromCategories: () => E,
    AccessibilityIcon: () => O,
  }),
  x = r(),
  S = {
    bAccessibilityDifficultyLevels: `#Accessibility_Feature_AdjustableDifficulty`,
    bAccessibilitySaveAnytime: `#Accessibility_Feature_SaveAnytime`,
    bAccessibilityNarratedMenus: `#Accessibility_Feature_NarratedMenus`,
    bAccessibilityBackgroundVolumeControls: `#Accessibility_Feature_CustomVolumeControls`,
    bAccessibilityStereoSound: `#Accessibility_Feature_StereoSound`,
    bAccessibilitySurroundSound: `#Accessibility_Feature_SurroundSound`,
    bAccessibilityResizableUI: `#Accessibility_Feature_AdjustableTextSize`,
    bAccessibilitySubtitles: `#Accessibility_Feature_SubtitleOptions`,
    bAccessibilityColorAlternatives: `#Accessibility_Feature_ColorAlternatives`,
    bAccessibilityCameraComfort: `#Accessibility_Feature_CameraComfort`,
    bAccessibilityKeyboardOnlyOption: `#Accessibility_Feature_KeyboardOnlyOption`,
    bAccessibilityMouseOnlyOption: `#Accessibility_Feature_MouseOnlyOption`,
    bAccessibilityTouchOnlyOption: `#Accessibility_Feature_TouchOnlyOption`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `#Accessibility_Feature_WithoutQuickTimeEvents`,
    bAccessibilityChatTexttoSpeech: `#Accessibility_Feature_TextToSpeech`,
    bAccessibilityChatSpeechtoText: `#Accessibility_Feature_SpeechToText`,
    bAccessibilityPlayableAtYourOwnPace: `#Accessibility_Feature_PlayableAtYourOwnPace`,
    bAccessibilityPlayableWithoutVision: `#Accessibility_Feature_PlayableWithoutVision`,
    bAccessibilityContrastControls: `#Accessibility_Feature_ContrastControls`,
  },
  C = {
    bAccessibilityDifficultyLevels: `adjustable_difficulty`,
    bAccessibilitySaveAnytime: `save_anytime`,
    bAccessibilityNarratedMenus: `narrated_game_menus`,
    bAccessibilityBackgroundVolumeControls: `custom_volume_controls`,
    bAccessibilityStereoSound: `stereo_sound`,
    bAccessibilitySurroundSound: `surround_sound`,
    bAccessibilityResizableUI: `adjustable_text_size`,
    bAccessibilitySubtitles: `subtitle_options`,
    bAccessibilityColorAlternatives: `color_alternatives`,
    bAccessibilityCameraComfort: `camera_comfort`,
    bAccessibilityKeyboardOnlyOption: `keyboard_only_option`,
    bAccessibilityMouseOnlyOption: `mouse_only_option`,
    bAccessibilityTouchOnlyOption: `touch_only_option`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `playable_without_timed_input`,
    bAccessibilityChatTexttoSpeech: `chat_text_to_speech`,
    bAccessibilityChatSpeechtoText: `chat_speech_to_text`,
    bAccessibilityPlayableAtYourOwnPace: `playable_at_your_own_pace`,
    bAccessibilityPlayableWithoutVision: `playable_without_vision`,
    bAccessibilityContrastControls: `contrast_controls`,
  },
  w = {
    bAccessibilityDifficultyLevels: `gameplay`,
    bAccessibilitySaveAnytime: `gameplay`,
    bAccessibilityNarratedMenus: `audio`,
    bAccessibilityBackgroundVolumeControls: `audio`,
    bAccessibilityStereoSound: `audio`,
    bAccessibilitySurroundSound: `audio`,
    bAccessibilityResizableUI: `visual`,
    bAccessibilitySubtitles: `visual`,
    bAccessibilityColorAlternatives: `visual`,
    bAccessibilityCameraComfort: `visual`,
    bAccessibilityPlayableWithoutVision: `visual`,
    bAccessibilityContrastControls: `visual`,
    bAccessibilityKeyboardOnlyOption: `input`,
    bAccessibilityMouseOnlyOption: `input`,
    bAccessibilityTouchOnlyOption: `input`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `input`,
    bAccessibilityChatTexttoSpeech: `input`,
    bAccessibilityChatSpeechtoText: `input`,
    bAccessibilityPlayableAtYourOwnPace: `input`,
  },
  T = {
    gameplay: `#Accessibility_Group_Gameplay`,
    visual: `#Accessibility_Group_Visual`,
    audio: `#Accessibility_Group_Audio`,
    input: `#Accessibility_Group_Input`,
  };
function E(e) {
  return {
    bAccessibilityResizableUI: e.includes(64),
    bAccessibilitySubtitles: e.includes(65),
    bAccessibilityColorAlternatives: e.includes(66),
    bAccessibilityCameraComfort: e.includes(67),
    bAccessibilityBackgroundVolumeControls: e.includes(68),
    bAccessibilityStereoSound: e.includes(69),
    bAccessibilitySurroundSound: e.includes(70),
    bAccessibilityNarratedMenus: e.includes(71),
    bAccessibilityChatSpeechtoText: e.includes(72),
    bAccessibilityChatTexttoSpeech: e.includes(73),
    bAccessibilityPlayableWithoutQuicktimeEvents: e.includes(74),
    bAccessibilityKeyboardOnlyOption: e.includes(75),
    bAccessibilityMouseOnlyOption: e.includes(76),
    bAccessibilityTouchOnlyOption: e.includes(77),
    bAccessibilityDifficultyLevels: e.includes(78),
    bAccessibilitySaveAnytime: e.includes(79),
    bAccessibilityPlayableAtYourOwnPace: e.includes(80),
    bAccessibilityPlayableWithoutVision: e.includes(81),
    bAccessibilityContrastControls: e.includes(82),
  };
}
function D(e) {
  let [t, n] = (0, c.useState)(e.initialOpen ?? !1),
    r = c.useId(),
    o = Object.entries(e.features)
      .filter(([e, t]) => t)
      .map(([e]) => e);
  if (o.length === 0) return null;
  let m = {};
  o.forEach((e) => {
    let t = w[e];
    (m[t] ??= []), m[t].push(e);
  });
  let h = Object.keys(m).length > 1;
  return (0, x.jsxs)(`details`, {
    className: l,
    open: t,
    onToggle: (e) => n(e.currentTarget.open),
    children: [
      (0, x.jsxs)(a, {
        className: u,
        children: [
          (0, x.jsx)(`div`, {
            className: v,
            children: (0, x.jsx)(O, { className: f, "aria-label": `` }),
          }),
          (0, x.jsxs)(`span`, {
            className: p,
            id: r,
            children: [
              (0, x.jsx)(`span`, {
                className: _,
                children: t
                  ? i(`#AccessibilityFeatures`)
                  : i(`#AccessibilityFeaturesWithCount`, o.length),
              }),
              (0, x.jsx)(`a`, {
                className: y,
                href: `${s.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                target: `_blank`,
                children: `?`,
              }),
            ],
          }),
        ],
      }),
      (0, x.jsxs)(`ul`, {
        className: d,
        "aria-labelledby": r,
        children: [
          h &&
            (0, x.jsxs)(x.Fragment, {
              children: [
                m.gameplay &&
                  (0, x.jsx)(`li`, {
                    children: (0, x.jsx)(k, {
                      group: `gameplay`,
                      features: m.gameplay,
                      open: t,
                    }),
                  }),
                m.visual &&
                  (0, x.jsx)(`li`, {
                    children: (0, x.jsx)(k, {
                      group: `visual`,
                      features: m.visual,
                      open: t,
                    }),
                  }),
                m.audio &&
                  (0, x.jsx)(`li`, {
                    children: (0, x.jsx)(k, {
                      group: `audio`,
                      features: m.audio,
                      open: t,
                    }),
                  }),
                m.input &&
                  (0, x.jsx)(`li`, {
                    children: (0, x.jsx)(k, {
                      group: `input`,
                      features: m.input,
                      open: t,
                    }),
                  }),
              ],
            }),
          !h &&
            o.map((e) =>
              (0, x.jsx)(
                `li`,
                { children: (0, x.jsx)(A, { feature: e, open: t }) },
                e,
              ),
            ),
        ],
      }),
    ],
  });
}
function O(e) {
  return (0, x.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1200 1200`,
    ...e,
    children: [
      (0, x.jsx)(`path`, {
        fill: `currentColor`,
        d: `m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z`,
        fillRule: `evenodd`,
      }),
      (0, x.jsx)(`path`, {
        fill: `currentColor`,
        d: `m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z`,
        fillRule: `evenodd`,
      }),
      (0, x.jsx)(`path`, {
        fill: `currentColor`,
        d: `m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23`,
        fillRule: `evenodd`,
      }),
    ],
  });
}
function k(e) {
  let t = c.useId();
  return (0, x.jsxs)(x.Fragment, {
    children: [
      (0, x.jsx)(`span`, { className: m, id: t, children: i(T[e.group]) }),
      (0, x.jsx)(`ul`, {
        className: h,
        "aria-labelledby": t,
        children: e.features.map((t) =>
          (0, x.jsx)(
            `li`,
            { children: (0, x.jsx)(A, { feature: t, open: e.open }) },
            t,
          ),
        ),
      }),
    ],
  });
}
function A(e) {
  return (0, x.jsx)(o, {
    href: `${s.STORE_BASE_URL}category/${C[e.feature]}`,
    className: g,
    focusable: e.open,
    children: (0, x.jsx)(`span`, {
      className: p,
      children: (0, x.jsx)(`span`, { className: _, children: i(S[e.feature]) }),
    }),
  });
}
export { E as n, b as r, D as t };

import { _, _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `ut9Zlzvv8tU-`,
  _ = `_918ET1T3Q44-`,
  _ = `QNmSW6M-UmM-`,
  _ = `kAJxJuJ2QLc-`,
  _ = `LtwI-MuOmiI-`,
  _ = `x8oQENqyJ1s-`,
  _ = `d7THf9xgFO0-`,
  _ = `iontxnFO5hk-`,
  _ = `d7UCTQDYGFg-`,
  _ = `_2Pn7yJB3D4M-`,
  _ = `_0JhQq90Mrho-`,
  _ = _({
    AccessibilityFeatureDisplay: () => _,
    AccessibilityFeaturesFromCategories: () => _,
    AccessibilityIcon: () => _,
  }),
  _ = _(),
  _ = {
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
  _ = {
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
  _ = {
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
  _ = {
    gameplay: `#Accessibility_Group_Gameplay`,
    visual: `#Accessibility_Group_Visual`,
    audio: `#Accessibility_Group_Audio`,
    input: `#Accessibility_Group_Input`,
  };
function _(_) {
  return {
    bAccessibilityResizableUI: _.includes(64),
    bAccessibilitySubtitles: _.includes(65),
    bAccessibilityColorAlternatives: _.includes(66),
    bAccessibilityCameraComfort: _.includes(67),
    bAccessibilityBackgroundVolumeControls: _.includes(68),
    bAccessibilityStereoSound: _.includes(69),
    bAccessibilitySurroundSound: _.includes(70),
    bAccessibilityNarratedMenus: _.includes(71),
    bAccessibilityChatSpeechtoText: _.includes(72),
    bAccessibilityChatTexttoSpeech: _.includes(73),
    bAccessibilityPlayableWithoutQuicktimeEvents: _.includes(74),
    bAccessibilityKeyboardOnlyOption: _.includes(75),
    bAccessibilityMouseOnlyOption: _.includes(76),
    bAccessibilityTouchOnlyOption: _.includes(77),
    bAccessibilityDifficultyLevels: _.includes(78),
    bAccessibilitySaveAnytime: _.includes(79),
    bAccessibilityPlayableAtYourOwnPace: _.includes(80),
    bAccessibilityPlayableWithoutVision: _.includes(81),
    bAccessibilityContrastControls: _.includes(82),
  };
}
function _(_) {
  let [_, _] = (0, _.useState)(_.initialOpen ?? !1),
    _ = _.useId(),
    _ = Object.entries(_.features)
      .filter(([_, _]) => _)
      .map(([_]) => _);
  if (_.length === 0) return null;
  let _ = {};
  _.forEach((_) => {
    let _ = _[_];
    ((_[_] ??= []), _[_].push(_));
  });
  let _ = Object.keys(_).length > 1;
  return (0, _.jsxs)(`details`, {
    className: _,
    open: _,
    onToggle: (_) => _(_.currentTarget.open),
    children: [
      (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              "aria-label": ``,
            }),
          }),
          (0, _.jsxs)(`span`, {
            className: _,
            _: _,
            children: [
              (0, _.jsx)(`span`, {
                className: _,
                children: _
                  ? _(`#AccessibilityFeatures`)
                  : _(`#AccessibilityFeaturesWithCount`, _.length),
              }),
              (0, _.jsx)(`a`, {
                className: _,
                href: `${_.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                target: `_blank`,
                children: `?`,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsxs)(`ul`, {
        className: _,
        "aria-labelledby": _,
        children: [
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _.gameplay &&
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(_, {
                      group: `gameplay`,
                      features: _.gameplay,
                      open: _,
                    }),
                  }),
                _.visual &&
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(_, {
                      group: `visual`,
                      features: _.visual,
                      open: _,
                    }),
                  }),
                _.audio &&
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(_, {
                      group: `audio`,
                      features: _.audio,
                      open: _,
                    }),
                  }),
                _.input &&
                  (0, _.jsx)(`li`, {
                    children: (0, _.jsx)(_, {
                      group: `input`,
                      features: _.input,
                      open: _,
                    }),
                  }),
              ],
            }),
          !_ &&
            _.map((_) =>
              (0, _.jsx)(
                `li`,
                {
                  children: (0, _.jsx)(_, {
                    feature: _,
                    open: _,
                  }),
                },
                _,
              ),
            ),
        ],
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1200 1200`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z`,
        fillRule: `evenodd`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z`,
        fillRule: `evenodd`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23`,
        fillRule: `evenodd`,
      }),
    ],
  });
}
function _(_) {
  let _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        _: _,
        children: _(_[_.group]),
      }),
      (0, _.jsx)(`ul`, {
        className: _,
        "aria-labelledby": _,
        children: _.features.map((_) =>
          (0, _.jsx)(
            `li`,
            {
              children: (0, _.jsx)(_, {
                feature: _,
                open: _.open,
              }),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    href: `${_.STORE_BASE_URL}category/${_[_.feature]}`,
    className: _,
    focusable: _.open,
    children: (0, _.jsx)(`span`, {
      className: _,
      children: (0, _.jsx)(`span`, {
        className: _,
        children: _(_[_.feature]),
      }),
    }),
  });
}

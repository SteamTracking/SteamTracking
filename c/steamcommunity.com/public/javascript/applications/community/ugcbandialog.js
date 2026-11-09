import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./segmentedcontrol.js";
import { _ } from "./textarea.js";
import { _ } from "./moderationreasonpicker.js";
import { _, _ } from "./basebuttons.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = {};
(_.arabic = () =>
  _(() => import(`./workshop_ui_arabic.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./workshop_ui_brazilian.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./workshop_ui_bulgarian.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./workshop_ui_czech.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./workshop_ui_danish.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./workshop_ui_dutch.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./workshop_ui_english.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./workshop_ui_finnish.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./workshop_ui_french.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./workshop_ui_german.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./workshop_ui_greek.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./workshop_ui_hungarian.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./workshop_ui_indonesian.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./workshop_ui_italian.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./workshop_ui_japanese.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./workshop_ui_koreana.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./workshop_ui_latam.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./workshop_ui_malay.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./workshop_ui_norwegian.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./workshop_ui_polish.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./workshop_ui_portuguese.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./workshop_ui_romanian.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./workshop_ui_russian.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./workshop_ui_sc_schinese.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./workshop_ui_schinese.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./workshop_ui_spanish.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./workshop_ui_swedish.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./workshop_ui_tchinese.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./workshop_ui_thai.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./workshop_ui_turkish.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./workshop_ui_ukrainian.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./workshop_ui_vietnamese.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = `ZIf4FUEhPes-`,
  _ = _(_(), 1),
  _ = _(),
  _ = [
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_None`,
    },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
      eModerationReason: 2,
    },
  ],
  _ = [
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_None`,
    },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason`,
    },
  ],
  _ = [`copyright`, `other`],
  _ = [`copyright`, `malware`, `other`],
  _ = {
    copyright: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
    malware: `#Workshop_ItemAdmin_Ban_Category_Malware`,
    other: `#Workshop_ItemAdmin_Ban_Category_Other`,
  };
function _(_) {
  return _.Localize(`#moderation_ugcban_default_note`, _(_));
}
function _(_) {
  let {
      bBanned: _,
      bIsSupport: _,
      bWorkshopContent: _,
      onConfirm: _,
      onError: _,
      onClose: _,
    } = _,
    _ = _ && !_,
    _ = !_ && !_,
    [_, _] = (0, _.useState)(_.strBanReason),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _ ? _ : _,
    _ = _.Localize(
      _ ? `#Workshop_ItemAdmin_Ban_Unset` : `#Workshop_ItemAdmin_Ban_Set`,
    ),
    _ =
      !_ &&
      _.trim().length > 1 &&
      !(_ && _ === null) &&
      !(_ && _ && _ === null);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        strTitle: _,
        onClose: _,
        children: (0, _.jsx)(_, {
          reasons: _(),
          onSelect: (_) => {
            _ !== null &&
              ((!_.trim() || (_ !== null && _ === _(_))) && _(_(_)), _(_)),
              _(!1);
          },
        }),
      })
    : (0, _.jsxs)(_, {
        className: _,
        strTitle: _,
        onClose: _,
        children: [
          _ &&
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                _ &&
                  (0, _.jsxs)(_, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, _.jsx)(_, {
                        children: _.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                      }),
                      (0, _.jsx)(_, {
                        size: `1`,
                        color: `dull`,
                        onClick: () => _(!0),
                        children:
                          _ === null
                            ? _.Localize(
                                `#Workshop_ItemAdmin_Ban_Reason_Unselected`,
                              )
                            : _(_),
                      }),
                    ],
                  }),
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(`#Workshop_ItemAdmin_Ban_Presets`),
                    }),
                    (0, _.jsx)(_, {
                      options: _,
                      getOptionLabel: (_) => _.Localize(_.labelToken),
                      selectedValue: null,
                      placeholder: _.Localize(_[0].labelToken),
                      onSelectionChange: (_) => {
                        _(_.reasonToken ? _.Localize(_.reasonToken) : ``),
                          _.eModerationReason !== void 0 &&
                            _ === null &&
                            _(_.eModerationReason);
                      },
                    }),
                  ],
                }),
              ],
            }),
          _ &&
            (0, _.jsxs)(_, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                    }),
                    (0, _.jsx)(_, {
                      options: _ ? _ : _,
                      getOptionLabel: (_) => _.Localize(_[_]),
                      value: _,
                      onValueChange: (_) => {
                        let _ = _.Localize(
                          `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
                        );
                        _ == `copyright` && _.trim().length === 0
                          ? _(_)
                          : _ === _ && _(``),
                          _(_);
                      },
                    }),
                  ],
                }),
                _ == `malware` &&
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_MalwareDesc`,
                    ),
                  }),
                _ == `other` &&
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_OtherDesc`,
                    ),
                  }),
              ],
            }),
          (0, _.jsx)(_, {
            value: _,
            onTextChange: _,
            maxLength: 256,
            rows: 6,
            resize: `vertical`,
          }),
          (0, _.jsxs)(_, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, _.jsx)(_, {
                disabled: !_,
                onClick: () => {
                  _(!0);
                  let _ = _ == `malware` ? 16 : (_ ?? 0);
                  Promise.resolve(_(_.trim(), _)).then(_, (_) => {
                    _(!1), _?.(_);
                  });
                },
                autoFocus: !0,
                children: _.Localize(`#Button_OK`),
              }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)(`span`, {
                  children: _.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      });
}
function _() {
  let [_, _] = _.useState(null);
  return (
    _.useEffect(
      () => (
        (window.ShowUGCBanDialog = (_, _) => {
          _({
            ..._,
            key: Date.now(),
            fnOnConfirm: _,
          });
        }),
        () => {
          delete window.ShowUGCBanDialog;
        }
      ),
      [],
    ),
    _
      ? (0, _.jsx)(
          _,
          {
            bBanned: !1,
            strBanReason: ``,
            bIsSupport: !!_.is_support,
            bWorkshopContent: !!_.bWorkshopContent,
            onConfirm: (_, _) => _.fnOnConfirm(_, _),
            onClose: () => _(null),
          },
          _.key,
        )
      : null
  );
}
export { _ as UGCBanDialogOnGlobalVariable };

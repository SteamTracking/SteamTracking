import { _ } from "./chunk~f025431ab0.js";
import { _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~5412a9f1de.js";
import { _ } from "./chunk~91ffd0567f.js";
import { _ } from "./chunk~62cf132e0e.js";
import { _, _ } from "./chunk~75db1bf948.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = {};
((_.arabic = () =>
  _(() => import(`./chunk~95d786be91.js`), [], import.meta.url)),
  (_.brazilian = () =>
    _(() => import(`./chunk~dfa4978ea4.js`), [], import.meta.url)),
  (_.bulgarian = () =>
    _(() => import(`./chunk~be9cef9ce0.js`), [], import.meta.url)),
  (_.czech = () =>
    _(() => import(`./chunk~ff406c26c2.js`), [], import.meta.url)),
  (_.danish = () =>
    _(() => import(`./chunk~6faba78d92.js`), [], import.meta.url)),
  (_.dutch = () =>
    _(() => import(`./chunk~cabf7c4dda.js`), [], import.meta.url)),
  (_.english = () =>
    _(() => import(`./chunk~926d337c98.js`), [], import.meta.url)),
  (_.finnish = () =>
    _(() => import(`./chunk~d1b17adbd0.js`), [], import.meta.url)),
  (_.french = () =>
    _(() => import(`./chunk~4bf1d2292c.js`), [], import.meta.url)),
  (_.german = () =>
    _(() => import(`./chunk~065ae91bd4.js`), [], import.meta.url)),
  (_.greek = () =>
    _(() => import(`./chunk~67c921ccbb.js`), [], import.meta.url)),
  (_.hungarian = () =>
    _(() => import(`./chunk~310d1ff6b2.js`), [], import.meta.url)),
  (_.indonesian = () =>
    _(() => import(`./chunk~e71c459a7f.js`), [], import.meta.url)),
  (_.italian = () =>
    _(() => import(`./chunk~ea397e3eb7.js`), [], import.meta.url)),
  (_.japanese = () =>
    _(() => import(`./chunk~5fa3b8e767.js`), [], import.meta.url)),
  (_.koreana = () =>
    _(() => import(`./chunk~8f1c0a797a.js`), [], import.meta.url)),
  (_.latam = () =>
    _(() => import(`./chunk~da45a491dd.js`), [], import.meta.url)),
  (_.malay = () =>
    _(() => import(`./chunk~101e172848.js`), [], import.meta.url)),
  (_.norwegian = () =>
    _(() => import(`./chunk~236883e4cc.js`), [], import.meta.url)),
  (_.polish = () =>
    _(() => import(`./chunk~e76d643d11.js`), [], import.meta.url)),
  (_.portuguese = () =>
    _(() => import(`./chunk~cf8d3212f3.js`), [], import.meta.url)),
  (_.romanian = () =>
    _(() => import(`./chunk~75c2101ce6.js`), [], import.meta.url)),
  (_.russian = () =>
    _(() => import(`./chunk~5f7c391bd2.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./chunk~7703ab2410.js`), [], import.meta.url)),
  (_.schinese = () =>
    _(() => import(`./chunk~844f8c9321.js`), [], import.meta.url)),
  (_.spanish = () =>
    _(() => import(`./chunk~b4481dcece.js`), [], import.meta.url)),
  (_.swedish = () =>
    _(() => import(`./chunk~182ba78061.js`), [], import.meta.url)),
  (_.tchinese = () =>
    _(() => import(`./chunk~57e7fe1d51.js`), [], import.meta.url)),
  (_.thai = () =>
    _(() => import(`./chunk~7d99898a32.js`), [], import.meta.url)),
  (_.turkish = () =>
    _(() => import(`./chunk~5f9949cdb0.js`), [], import.meta.url)),
  (_.ukrainian = () =>
    _(() => import(`./chunk~990d663337.js`), [], import.meta.url)),
  (_.vietnamese = () =>
    _(() => import(`./chunk~6e86d06f0b.js`), [], import.meta.url)));
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
function _(_, _) {
  let _ = `Details: ${_.trim()}`;
  return _.trim() ? `${_}\n -- \nPrevention: ${_.trim()}` : _;
}
var _ = 1023;
function _(_) {
  return new TextEncoder().encode(_).length > _;
}
function _(_) {
  let { onReasonChange: _ } = _,
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(``),
    _ = _(_(_, _)),
    _ = (_, _) => {
      (_(_), _(_), _(_.trim().length > 1 ? _(_, _) : null));
    };
  return (0, _.jsxs)(_, {
    direction: `column`,
    gap: `2`,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDesc`),
      }),
      (0, _.jsx)(_, {
        children: _.Localize(`#Workshop_ItemAdmin_Ban_Category_MalwareDetails`),
      }),
      (0, _.jsx)(_, {
        value: _,
        onTextChange: (_) => _(_, _),
        maxLength: _,
        rows: 4,
        resize: `vertical`,
      }),
      (0, _.jsx)(_, {
        children: _.Localize(
          `#Workshop_ItemAdmin_Ban_Category_MalwarePrevention`,
        ),
      }),
      (0, _.jsx)(_, {
        value: _,
        onTextChange: (_) => _(_, _),
        maxLength: _,
        rows: 4,
        resize: `vertical`,
      }),
      _ &&
        (0, _.jsx)(_, {
          color: `text-warning`,
          children: _.Localize(
            `#Workshop_ItemAdmin_Ban_Category_MalwareTooLong`,
          ),
        }),
    ],
  });
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
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1),
    _ = _ ? _ : _,
    _ = _.Localize(
      _ ? `#Workshop_ItemAdmin_Ban_Unset` : `#Workshop_ItemAdmin_Ban_Set`,
    ),
    _ = _ && _ == `malware`,
    _ = _ ? (_ ?? ``) : _.trim(),
    _ = _ ? _ !== null : _.trim().length > 1,
    _ = !_ && _ && !(_ && _ === null) && !(_ && _ && _ === null);
  return _
    ? (0, _.jsx)(_, {
        className: _,
        strTitle: _,
        onClose: _,
        children: (0, _.jsx)(_, {
          reasons: _(_),
          onSelect: (_) => {
            (_ !== null &&
              ((!_.trim() || (_ !== null && _ === _(_))) && _(_(_)), _(_)),
              _(!1));
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
                        (_(_.reasonToken ? _.Localize(_.reasonToken) : ``),
                          _.eModerationReason !== void 0 &&
                            _ === null &&
                            _(_.eModerationReason));
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
                        (_ == `copyright` && _.trim().length === 0
                          ? _(_)
                          : _ === _ && _(``),
                          _(_));
                      },
                    }),
                  ],
                }),
                _ == `other` &&
                  (0, _.jsx)(_, {
                    children: _.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_OtherDesc`,
                    ),
                  }),
                (0, _.jsx)(`div`, {
                  hidden: !_,
                  children: (0, _.jsx)(_, {
                    onReasonChange: _,
                  }),
                }),
              ],
            }),
          !_ &&
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
                  let _ = _ ? 70 : (_ ?? 0);
                  Promise.resolve(_(_, _)).then(_, (_) => {
                    (_(!1), _?.(_));
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

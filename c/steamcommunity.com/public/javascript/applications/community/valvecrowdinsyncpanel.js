import { _ } from "./rolldown-runtime.js";
import { _, _ } from "./libraries.js";
import { _ } from "./throbber.js";
import { _ } from "./languagepicker.js";
import { _, _, _ } from "./clanimagepicker.js";
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
} from "./main.js";
import { _, _ } from "./partnereventsavebutton.module.js";
var _ = _(_()),
  _ = _(_()),
  _ = class {
    m_mapTokens = new Map();
    GetLocalization(_, _) {
      let _ = this.m_mapTokens.get(_);
      if (_ && _[_]) return _[_];
    }
    SetLocalization(_, _, _) {
      let _ = this.m_mapTokens.get(_);
      (_ || ((_ = _([], 32, null)), this.m_mapTokens.set(_, _)), (_[_] = _));
    }
    GetSortedTokenList() {
      let _ = [];
      return (
        this.m_mapTokens.forEach((_, _) => _.push(_)),
        _.sort((_, _) => _.localeCompare(_)),
        _
      );
    }
    GetLanguagesWithTokens() {
      let _ = new Map();
      this.m_mapTokens.forEach((_) => {
        for (let _ = 0; _ < _.length; ++_)
          !_.has(_) &&
            _[_] !== null &&
            _[_] !== void 0 &&
            _[_].trim().length > 0 &&
            _.set(_, !0);
      });
      let _ = [];
      return (
        _.forEach((_, _) => {
          _ && _.push(_);
        }),
        _
      );
    }
    ClearLanguagesTokens(_) {
      _.forEach((_) => {
        this.m_mapTokens.forEach((_, _) => {
          _ < _.length && _[_] !== null && (_[_] = null);
        });
      });
    }
    DebugPrintData() {
      let _ = [];
      return (
        this.m_mapTokens.forEach((_, _) => _.push(`${_}=${_.join(`,`)}`)),
        _.join(`
`)
      );
    }
  },
  _ = class {
    DetectAndFormatCSV(_) {
      let _ = null;
      return (
        _?.meta?.fields?.length >= 3 &&
        _.meta.fields[0] === `field` &&
        _.meta.fields[1] === `language` &&
        _.meta.fields[2] === `value`
          ? (_ = this.ReadLocalizationData_CSV_TokenLanguageList(_))
          : _?.meta?.fields?.length >= 2 &&
              _.meta.fields[0] === `field` &&
              _(_.meta.fields[1], -1) != -1
            ? (_ = this.ReadLocalizationData_CSV_LanguageColumns(_))
            : _?.meta?.fields?.length >= 2 &&
              _.meta.fields[0] === `language` &&
              (_ = this.ReadLocalizationData_CSV_LanguageRows(_)),
        _
      );
    }
    async ReadLocalizationData_XML_SingleLanguage(_, _) {
      let _ = new _(),
        _ = new DOMParser(),
        _ = await _.ReadFile(_),
        _ = _.parseFromString(_.toString(), `application/xml`);
      for (let _ = 0; _ < _.documentElement.children.length; ++_) {
        let _ = _.documentElement.children.item(_);
        if (!_.getAttribute(`id`))
          throw `Can not find id for element. Probably malformed XML`;
        let _ = _.getAttribute(`id`).toLocaleLowerCase(),
          _ = _.textContent;
        _.SetLocalization(_, _, _);
      }
      return _;
    }
    ReadLocalizationData_CSV_TokenLanguageList(_) {
      let _ = new _();
      return (
        _.data.forEach((_) => {
          let _ = _.field,
            _ = _(_.language);
          _.SetLocalization(_, _, _.value);
        }),
        _
      );
    }
    ReadLocalizationData_CSV_LanguageColumns(_) {
      let _ = new _();
      return (
        _.data.forEach((_) => {
          let _ = _.field;
          for (let _ = 0; _ < 32; ++_) {
            let _ = _(_(_));
            _.SetLocalization(_, _, _[_]);
          }
        }),
        _
      );
    }
    ReadLocalizationData_CSV_LanguageRows(_) {
      let _ = new _();
      return (
        _.data.forEach((_) => {
          let _ = _(_.language, 32);
          if (_ !== 32)
            for (let [_, _] of Object.entries(_))
              _ !== `language` &&
                typeof _ == `string` &&
                _.SetLocalization(_, _, _);
        }),
        _
      );
    }
    GetExportLanguages() {
      return _.GetLanguageListForRealms([_.k_ESteamRealmGlobal]);
    }
    WriteLocalizationData_CSV_TokenAndLanguageColumns(_, _) {
      let _ = [];
      (_.GetSortedTokenList().forEach((_) => {
        for (let _ of this.GetExportLanguages()) {
          let _ = {
            field: _,
          };
          ((_.language = _(_(_))),
            (_.value = _.GetLocalization(_, _)),
            _.push(_));
        }
      }),
        _.WriteCSVToFile(_, _));
    }
    WriteLocalizationData_CSV_LanguageColumns(_, _) {
      let _ = [];
      (_.GetSortedTokenList().forEach((_) => {
        let _ = {
          field: _,
        };
        for (let _ of this.GetExportLanguages())
          _[_(_(_))] = _.GetLocalization(_, _);
        _.push(_);
      }),
        _.WriteCSVToFile(_, _));
    }
    WriteLocalizationData_CSV_LanguageRows(_, _) {
      let _ = [];
      for (let _ of this.GetExportLanguages())
        (_.length <= _ - 1 &&
          _.push({
            language: ``,
          }),
          _.push({
            language: _(_(_)),
          }));
      (_.GetSortedTokenList().forEach((_) => {
        for (let _ of this.GetExportLanguages()) {
          let _ = _.GetLocalization(_, _);
          _[_][_] = _;
        }
      }),
        _.WriteCSVToFile(_, _));
    }
    WriteLocalizationData_XML_SingleLanguage(_, _, _) {
      let _ = document.implementation.createDocument(null, `content`, null);
      (_.GetSortedTokenList().forEach((_) => {
        let _ = _.createElement(`string`);
        (_.setAttribute(`id`, _),
          _.appendChild(_.createTextNode(_.GetLocalization(_, _) || ``)),
          _.documentElement.append(_));
      }),
        _.WriteXMLToFile(_, _));
    }
  },
  _ = `QKQ8f-Zg3Cs-`,
  _ = `mMC5PbET8Y4-`,
  _ = _(),
  _ = (_) => {
    let _ = (_, _) => {
      _.preventDefault();
      let { fnGetLocData: _, closeModal: _, strFileNamePrefix: _, lang: _ } = _,
        _ = _(),
        _ = new _(),
        _ = _ ? _ + `_localization` : `localization`;
      switch (_) {
        case `csv_row`:
          _.WriteLocalizationData_CSV_LanguageRows(_, _ + `.csv`);
          break;
        case `csv_column`:
          _.WriteLocalizationData_CSV_LanguageColumns(_, _ + `.csv`);
          break;
        case `csv_token`:
          _.WriteLocalizationData_CSV_TokenAndLanguageColumns(_, _ + `.csv`);
          break;
        case `xml`:
          _.WriteLocalizationData_XML_SingleLanguage(
            _,
            _,
            _ + `_` + _(_(_)) + `.xml`,
          );
      }
      _ && _();
    };
    return (0, _.jsxs)(_.Fragment, {
      children: [
        !!_.bShowCSV &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                onClick: (_) => _(_, `csv_row`),
                children: _(`#Localization_Export_Btn_RowLanguages`),
              }),
              (0, _.jsx)(_, {
                onClick: (_) => _(_, `csv_column`),
                children: _(`#Localization_Export_Btn_ColumnLanguages`),
              }),
              (0, _.jsx)(_, {
                onClick: (_) => _(_, `csv_token`),
                children: _(`#Localization_Export_Btn_TokenLanguages`),
              }),
            ],
          }),
        !!_.bShowXML &&
          (0, _.jsx)(_, {
            onClick: (_) => _(_, `xml`),
            children: _(`#Localization_Export_Btn_XML`),
          }),
      ],
    });
  },
  _ = (_) => {
    let [_, _] = (0, _.useState)(!1),
      _ = (_, _) => {
        (_(!1),
          console.log(
            `ImportLocalizationAction: On Handle Parse error: ` + _.message,
            _,
          ),
          _(
            (0, _.jsx)(_, {
              children: (0, _.jsxs)(`div`, {
                children: [
                  (0, _.jsx)(`p`, {
                    children: _(`#Localization_Error_Input`),
                  }),
                  (0, _.jsx)(`p`, {
                    children: _.message,
                  }),
                ],
              }),
            }),
            window,
          ));
      },
      _ = (_) => {
        _(!1);
        let _ = ``;
        (_.forEach((_) => {
          (_.length > 0 && (_ += `, `), (_ += _(`#Language_` + _(_))));
        }),
          _(
            (0, _.jsx)(_, {
              strTitle: _(`#EventDisplay_Share_Success`),
              bAlertDialog: !0,
              children: (0, _.jsx)(`div`, {
                children:
                  _.length == 0
                    ? _(`#Localization_Success_ImportComplete_NoChange`)
                    : _(`#Localization_Success_ImportComplete`, _),
              }),
            }),
            window,
          ));
      },
      _ = async (_) => {
        let _ = _.target.files;
        if (_ && _.length > 0) {
          _(!0);
          let _ = [],
            _ = new _();
          for (let _ = 0; _ < _.length; ++_)
            if (_[_]) {
              if (_[_].name.toLocaleLowerCase().endsWith(`.csv`)) {
                _.default.parse(_[0], {
                  header: !0,
                  complete: (_) => {
                    let _ = new _().DetectAndFormatCSV(_);
                    if (!_) {
                      _({
                        code: ``,
                        message: ``,
                        row: 0,
                        type: `filenameerror`,
                      });
                      return;
                    }
                    let _ = _.GetLanguageListForRealms([_.k_ESteamRealmGlobal]),
                      _ = _.fnOnImportLocData(_, _);
                    _(_);
                  },
                  error: _,
                });
                return;
              }
              if (_[_].name.toLocaleLowerCase().endsWith(`.xml`)) {
                let { language: _ } = _(_[_].name, -1);
                if (_ == null || _ == -1) {
                  _({
                    code: ``,
                    message: _(`#Localization_Error_FileLangauage`, _[_].name),
                    row: 0,
                    type: `filenameerror`,
                  });
                  return;
                }
                try {
                  let _ = await _.ReadLocalizationData_XML_SingleLanguage(
                    _[_],
                    _,
                  );
                  _.fnOnImportLocData(_, [_]).forEach((_) => {
                    _.indexOf(_) == -1 && _.push(_);
                  });
                } catch (_) {
                  let _ = _(_);
                  _({
                    code: ``,
                    message: _(
                      `#Localization_Error_XMLParseError`,
                      _.strErrorMsg,
                    ),
                    row: 0,
                    type: `parseerror`,
                  });
                  return;
                }
              } else
                _({
                  code: ``,
                  message: _(`#Localization_Error_FileExtention`, _[_].name),
                  row: 0,
                  type: `filenameerror`,
                });
            }
          _(_);
        }
      };
    return (0, _.jsx)(_, {
      className: _(_.className ? _.className : _),
      toolTipContent: _.strToolTip,
      children: (0, _.jsxs)(`label`, {
        className: _,
        htmlFor: `importlocalization`,
        children: [
          _ &&
            (0, _.jsx)(_, {
              size: `small`,
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(_.strLabel ? _.strLabel : `#Localization_Import_Btn`),
          }),
          (0, _.jsx)(`input`, {
            _: `importlocalization`,
            className: _,
            style: {
              display: `none`,
            },
            type: `file`,
            onSubmit: _,
            onChange: _,
            multiple: !0,
          }),
        ],
      }),
    });
  },
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`,
  _ = `w4ILBBttnDY-`,
  _ = `FtDG86ap72w-`,
  _ = `Cj4UbeAYgmA-`,
  _ = `BoEs3lUKyNM-`,
  _ = `BolDkvx5l48-`,
  _ = `DjfMgqTltZI-`,
  _ = `BN0RWQWEHUw-`,
  _ = `_28c5n-WeCZI-`;
function _(_) {
  let { editModel: _ } = _,
    [_, _] = _.useState(-1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = (_) => {
      let _ = _.target.value;
      if (_ === `all`) _(-1);
      else {
        let _ = _(_);
        _(_);
      }
    },
    _ = _.GetClanSteamID(),
    _ = _.GetGID(),
    _ = _(_, _),
    [, _] = _.useReducer((_) => _ + 1, 0),
    _ =
      _.isSuccess && _.data?.crowdin_project_id && _.data?.crowdin_file_id
        ? `https://valve.crowdin.com/editor/${_.data.crowdin_project_id}/${_.data.crowdin_file_id}`
        : null,
    _ = (_) => {
      (_.SetPushSourceToCrowdInAutomatically(_), _());
    },
    _ = _(_.ConvertTo64BitString(), _, _);
  return _.isLoading
    ? null
    : (0, _.jsxs)(_, {
        clanSteamID: _.editModel.GetClanSteamID(),
        children: [
          (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                value: _.BPushUpdatesToCrowdInAutomatically(),
                onChange: _,
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  _(
                    `#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn`,
                  ),
                  `\xA0(`,
                  _
                    ? (0, _.jsx)(`a`, {
                        href: _,
                        children: _,
                      })
                    : _(`#EventEditor_Localization_NotMappedToCrowdIn`),
                  `)`,
                  (0, _.jsx)(_, {
                    tooltip: _(`#EventEditor_Localization_Tooltip`),
                    className: _,
                  }),
                  (0, _.jsx)(`br`, {}),
                  (0, _.jsx)(`span`, {
                    children: _(`#EventEditor_Localization_RememberToSave`),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                onChange: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                onClick: () => {
                  (_(!0),
                    _.mutateAsync()
                      .then(() => window.location.reload())
                      .catch((_) => {
                        (_(_.toString()), _(!1));
                      })
                      .then(() => {
                        _(null);
                      }));
                },
                children: _(`#EventEditor_Localization_FetchLocalization`),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)(`div`, {
                className: `_0YbsAe4FGV0-`,
                children: [(0, _.jsx)(_, {}), ` `, _],
              }),
            }),
        ],
      });
}
function _(_) {
  let _ = _(!1),
    _ = Array.from(_.entries());
  _.sort((_, _) => _[1].localeCompare(_[1]));
  let _ = _.map(([_, _]) =>
    _ === `english`
      ? ``
      : (0, _.jsx)(
          `option`,
          {
            value: _,
            children: _,
          },
          _,
        ),
  );
  return (0, _.jsxs)(`select`, {
    onChange: _.onChange,
    children: [
      (0, _.jsx)(`option`, {
        value: `all`,
        children: _(`#EventEditor_Localization_AllLanguages`),
      }),
      _,
    ],
  });
}

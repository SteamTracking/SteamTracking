/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, ot as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~eefd71512b.js";
import { c as i } from "./chunk~91ae5e1167.js";
import { D as a, E as o, M as s } from "./chunk~2bb3c0c267.js";
import {
  Dn as c,
  Gi as l,
  Jd as u,
  Km as d,
  Ni as f,
  Su as p,
  Vm as m,
  Wi as h,
  Wr as g,
  Xm as _,
  Zd as v,
  Zi as y,
  Zm as b,
  _s as x,
  ef as S,
  fu as C,
  hs as w,
  qh as T,
  ss as E,
  v as D,
  zf as O,
} from "./main.js";
import { f as k, p as A } from "./chunk~bf4b546728.js";
var j = e(t()),
  M = e(a()),
  N = class {
    m_mapTokens = new Map();
    GetLocalization(e, t) {
      let n = this.m_mapTokens.get(e);
      if (n && n[t]) return n[t];
    }
    SetLocalization(e, t, n) {
      let r = this.m_mapTokens.get(e);
      (r || ((r = T([], 32, null)), this.m_mapTokens.set(e, r)), (r[t] = n));
    }
    GetSortedTokenList() {
      let e = [];
      return (
        this.m_mapTokens.forEach((t, n) => e.push(n)),
        e.sort((e, t) => e.localeCompare(t)),
        e
      );
    }
    GetLanguagesWithTokens() {
      let e = new Map();
      this.m_mapTokens.forEach((t) => {
        for (let n = 0; n < t.length; ++n)
          !e.has(n) &&
            t[n] !== null &&
            t[n] !== void 0 &&
            t[n].trim().length > 0 &&
            e.set(n, !0);
      });
      let t = [];
      return (
        e.forEach((e, n) => {
          e && t.push(n);
        }),
        t
      );
    }
    ClearLanguagesTokens(e) {
      e.forEach((e) => {
        this.m_mapTokens.forEach((t, n) => {
          e < t.length && t[e] !== null && (t[e] = null);
        });
      });
    }
    DebugPrintData() {
      let e = [];
      return (
        this.m_mapTokens.forEach((t, n) => e.push(`${n}=${t.join(`,`)}`)),
        e.join(`
`)
      );
    }
  },
  P = class {
    DetectAndFormatCSV(e) {
      let t = null;
      return (
        e?.meta?.fields?.length >= 3 &&
        e.meta.fields[0] === `field` &&
        e.meta.fields[1] === `language` &&
        e.meta.fields[2] === `value`
          ? (t = this.ReadLocalizationData_CSV_TokenLanguageList(e))
          : e?.meta?.fields?.length >= 2 &&
              e.meta.fields[0] === `field` &&
              b(e.meta.fields[1], -1) != -1
            ? (t = this.ReadLocalizationData_CSV_LanguageColumns(e))
            : e?.meta?.fields?.length >= 2 &&
              e.meta.fields[0] === `language` &&
              (t = this.ReadLocalizationData_CSV_LanguageRows(e)),
        t
      );
    }
    async ReadLocalizationData_XML_SingleLanguage(e, t) {
      let n = new N(),
        r = new DOMParser(),
        i = await o.ReadFile(e),
        a = r.parseFromString(i.toString(), `application/xml`);
      for (let e = 0; e < a.documentElement.children.length; ++e) {
        let r = a.documentElement.children.item(e);
        if (!r.getAttribute(`id`))
          throw `Can not find id for element. Probably malformed XML`;
        let i = r.getAttribute(`id`).toLocaleLowerCase(),
          o = r.textContent;
        n.SetLocalization(i, t, o);
      }
      return n;
    }
    ReadLocalizationData_CSV_TokenLanguageList(e) {
      let t = new N();
      return (
        e.data.forEach((e) => {
          let n = e.field,
            r = b(e.language);
          t.SetLocalization(n, r, e.value);
        }),
        t
      );
    }
    ReadLocalizationData_CSV_LanguageColumns(e) {
      let t = new N();
      return (
        e.data.forEach((e) => {
          let n = e.field;
          for (let r = 0; r < 32; ++r) {
            let i = _(d(r));
            t.SetLocalization(n, r, e[i]);
          }
        }),
        t
      );
    }
    ReadLocalizationData_CSV_LanguageRows(e) {
      let t = new N();
      return (
        e.data.forEach((e) => {
          let n = b(e.language, 32);
          if (n !== 32)
            for (let [r, i] of Object.entries(e))
              r !== `language` &&
                typeof i == `string` &&
                t.SetLocalization(r, n, i);
        }),
        t
      );
    }
    GetExportLanguages() {
      return u.GetLanguageListForRealms([m.k_ESteamRealmGlobal]);
    }
    WriteLocalizationData_CSV_TokenAndLanguageColumns(e, t) {
      let n = [];
      (e.GetSortedTokenList().forEach((t) => {
        for (let r of this.GetExportLanguages()) {
          let i = { field: t };
          ((i.language = _(d(r))),
            (i.value = e.GetLocalization(t, r)),
            n.push(i));
        }
      }),
        o.WriteCSVToFile(n, t));
    }
    WriteLocalizationData_CSV_LanguageColumns(e, t) {
      let n = [];
      (e.GetSortedTokenList().forEach((t) => {
        let r = { field: t };
        for (let n of this.GetExportLanguages())
          r[_(d(n))] = e.GetLocalization(t, n);
        n.push(r);
      }),
        o.WriteCSVToFile(n, t));
    }
    WriteLocalizationData_CSV_LanguageRows(e, t) {
      let n = [];
      for (let e of this.GetExportLanguages())
        (n.length <= e - 1 && n.push({ language: `` }),
          n.push({ language: _(d(e)) }));
      (e.GetSortedTokenList().forEach((t) => {
        for (let r of this.GetExportLanguages()) {
          let i = e.GetLocalization(t, r);
          n[r][t] = i;
        }
      }),
        o.WriteCSVToFile(n, t));
    }
    WriteLocalizationData_XML_SingleLanguage(e, t, n) {
      let r = document.implementation.createDocument(null, `content`, null);
      (e.GetSortedTokenList().forEach((n) => {
        let i = r.createElement(`string`);
        (i.setAttribute(`id`, n),
          i.appendChild(r.createTextNode(e.GetLocalization(n, t) || ``)),
          r.documentElement.append(i));
      }),
        o.WriteXMLToFile(r, n));
    }
  },
  F = `QKQ8f-Zg3Cs-`,
  I = `mMC5PbET8Y4-`,
  L = n(),
  R = (e) => {
    let t = (t, n) => {
      t.preventDefault();
      let { fnGetLocData: r, closeModal: i, strFileNamePrefix: a, lang: o } = e,
        s = r(),
        c = new P(),
        l = a ? a + `_localization` : `localization`;
      switch (n) {
        case `csv_row`:
          c.WriteLocalizationData_CSV_LanguageRows(s, l + `.csv`);
          break;
        case `csv_column`:
          c.WriteLocalizationData_CSV_LanguageColumns(s, l + `.csv`);
          break;
        case `csv_token`:
          c.WriteLocalizationData_CSV_TokenAndLanguageColumns(s, l + `.csv`);
          break;
        case `xml`:
          c.WriteLocalizationData_XML_SingleLanguage(
            s,
            o,
            l + `_` + _(d(o)) + `.xml`,
          );
      }
      i && i();
    };
    return (0, L.jsxs)(L.Fragment, {
      children: [
        !!e.bShowCSV &&
          (0, L.jsxs)(j.Fragment, {
            children: [
              (0, L.jsx)(E, {
                onClick: (e) => t(e, `csv_row`),
                children: S(`#Localization_Export_Btn_RowLanguages`),
              }),
              (0, L.jsx)(E, {
                onClick: (e) => t(e, `csv_column`),
                children: S(`#Localization_Export_Btn_ColumnLanguages`),
              }),
              (0, L.jsx)(E, {
                onClick: (e) => t(e, `csv_token`),
                children: S(`#Localization_Export_Btn_TokenLanguages`),
              }),
            ],
          }),
        !!e.bShowXML &&
          (0, L.jsx)(E, {
            onClick: (e) => t(e, `xml`),
            children: S(`#Localization_Export_Btn_XML`),
          }),
      ],
    });
  },
  z = (e) => {
    let [t, n] = (0, j.useState)(!1),
      a = (e, t) => {
        (n(!1),
          console.log(
            `ImportLocalizationAction: On Handle Parse error: ` + e.message,
            e,
          ),
          y(
            (0, L.jsx)(l, {
              children: (0, L.jsxs)(`div`, {
                children: [
                  (0, L.jsx)(`p`, { children: S(`#Localization_Error_Input`) }),
                  (0, L.jsx)(`p`, { children: e.message }),
                ],
              }),
            }),
            window,
          ));
      },
      o = (e) => {
        n(!1);
        let t = ``;
        (e.forEach((e) => {
          (t.length > 0 && (t += `, `), (t += S(`#Language_` + d(e))));
        }),
          y(
            (0, L.jsx)(h, {
              strTitle: S(`#EventDisplay_Share_Success`),
              bAlertDialog: !0,
              children: (0, L.jsx)(`div`, {
                children:
                  t.length == 0
                    ? S(`#Localization_Success_ImportComplete_NoChange`)
                    : S(`#Localization_Success_ImportComplete`, t),
              }),
            }),
            window,
          ));
      },
      s = async (t) => {
        let r = t.target.files;
        if (r && r.length > 0) {
          n(!0);
          let t = [],
            s = new P();
          for (let n = 0; n < r.length; ++n)
            if (r[n]) {
              if (r[n].name.toLocaleLowerCase().endsWith(`.csv`)) {
                M.default.parse(r[0], {
                  header: !0,
                  complete: (t) => {
                    let n = new P().DetectAndFormatCSV(t);
                    if (!n) {
                      a({
                        code: ``,
                        message: ``,
                        row: 0,
                        type: `filenameerror`,
                      });
                      return;
                    }
                    let r = u.GetLanguageListForRealms([m.k_ESteamRealmGlobal]),
                      i = e.fnOnImportLocData(n, r);
                    o(i);
                  },
                  error: a,
                });
                return;
              }
              if (r[n].name.toLocaleLowerCase().endsWith(`.xml`)) {
                let { language: o } = i(r[n].name, -1);
                if (o == null || o == -1) {
                  a({
                    code: ``,
                    message: S(`#Localization_Error_FileLangauage`, r[n].name),
                    row: 0,
                    type: `filenameerror`,
                  });
                  return;
                }
                try {
                  let i = await s.ReadLocalizationData_XML_SingleLanguage(
                    r[n],
                    o,
                  );
                  e.fnOnImportLocData(i, [o]).forEach((e) => {
                    t.indexOf(e) == -1 && t.push(e);
                  });
                } catch (e) {
                  let t = O(e);
                  a({
                    code: ``,
                    message: S(
                      `#Localization_Error_XMLParseError`,
                      t.strErrorMsg,
                    ),
                    row: 0,
                    type: `parseerror`,
                  });
                  return;
                }
              } else
                a({
                  code: ``,
                  message: S(`#Localization_Error_FileExtention`, r[n].name),
                  row: 0,
                  type: `filenameerror`,
                });
            }
          o(t);
        }
      };
    return (0, L.jsx)(x, {
      className: p(e.className ? e.className : c),
      toolTipContent: e.strToolTip,
      children: (0, L.jsxs)(`label`, {
        className: I,
        htmlFor: `importlocalization`,
        children: [
          t && (0, L.jsx)(r, { size: `small` }),
          (0, L.jsx)(`div`, {
            className: F,
            children: S(e.strLabel ? e.strLabel : `#Localization_Import_Btn`),
          }),
          (0, L.jsx)(`input`, {
            id: `importlocalization`,
            className: I,
            style: { display: `none` },
            type: `file`,
            onSubmit: s,
            onChange: s,
            multiple: !0,
          }),
        ],
      }),
    });
  },
  B = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`,
  V = `w4ILBBttnDY-`,
  H = `FtDG86ap72w-`,
  U = `Cj4UbeAYgmA-`,
  W = `BoEs3lUKyNM-`,
  G = `BolDkvx5l48-`,
  K = `DjfMgqTltZI-`,
  q = `BN0RWQWEHUw-`,
  J = `_28c5n-WeCZI-`;
function Y(e) {
  let { editModel: t } = e,
    [n, i] = j.useState(-1),
    [a, o] = j.useState(!1),
    [l, u] = j.useState(null),
    d = (e) => {
      let t = e.target.value;
      if (t === `all`) i(-1);
      else {
        let e = b(t);
        i(e);
      }
    },
    p = t.GetClanSteamID(),
    m = t.GetGID(),
    h = k(p, m),
    [, _] = j.useReducer((e) => e + 1, 0),
    v =
      h.isSuccess && h.data?.crowdin_project_id && h.data?.crowdin_file_id
        ? `https://valve.crowdin.com/editor/${h.data.crowdin_project_id}/${h.data.crowdin_file_id}`
        : null,
    y = (e) => {
      (t.SetPushSourceToCrowdInAutomatically(e), _());
    },
    x = A(p.ConvertTo64BitString(), m, n);
  return h.isLoading
    ? null
    : (0, L.jsxs)(s, {
        clanSteamID: e.editModel.GetClanSteamID(),
        children: [
          (0, L.jsx)(D, { active: a, children: (0, L.jsx)(r, {}) }),
          (0, L.jsxs)(`div`, {
            className: q,
            children: [
              (0, L.jsx)(f, {
                value: t.BPushUpdatesToCrowdInAutomatically(),
                onChange: y,
              }),
              (0, L.jsxs)(`div`, {
                className: J,
                children: [
                  S(
                    `#EventEditor_Localization_AutomaticallyPushChangesToCrowdIn`,
                  ),
                  `\xA0(`,
                  v
                    ? (0, L.jsx)(`a`, { href: v, children: v })
                    : S(`#EventEditor_Localization_NotMappedToCrowdIn`),
                  `)`,
                  (0, L.jsx)(w, {
                    tooltip: S(`#EventEditor_Localization_Tooltip`),
                    className: g,
                  }),
                  (0, L.jsx)(`br`, {}),
                  (0, L.jsx)(`span`, {
                    children: S(`#EventEditor_Localization_RememberToSave`),
                  }),
                ],
              }),
              (0, L.jsx)(X, { onChange: d }),
              (0, L.jsx)(`div`, {
                className: c,
                onClick: () => {
                  (o(!0),
                    x
                      .mutateAsync()
                      .then(() => window.location.reload())
                      .catch((e) => {
                        (u(e.toString()), o(!1));
                      })
                      .then(() => {
                        u(null);
                      }));
                },
                children: S(`#EventEditor_Localization_FetchLocalization`),
              }),
            ],
          }),
          l &&
            (0, L.jsx)(L.Fragment, {
              children: (0, L.jsxs)(`div`, {
                className: `_0YbsAe4FGV0-`,
                children: [(0, L.jsx)(C, {}), ` `, l],
              }),
            }),
        ],
      });
}
function X(e) {
  let t = v(!1),
    n = Array.from(t.entries());
  n.sort((e, t) => e[1].localeCompare(t[1]));
  let r = n.map(([e, t]) =>
    e === `english` ? `` : (0, L.jsx)(`option`, { value: e, children: t }, e),
  );
  return (0, L.jsxs)(`select`, {
    onChange: e.onChange,
    children: [
      (0, L.jsx)(`option`, {
        value: `all`,
        children: S(`#EventEditor_Localization_AllLanguages`),
      }),
      r,
    ],
  });
}
export {
  H as a,
  B as c,
  N as d,
  U as i,
  R as l,
  K as n,
  W as o,
  V as r,
  G as s,
  Y as t,
  z as u,
};

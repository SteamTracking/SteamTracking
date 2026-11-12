/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  X as t,
  j as n,
  rt as r,
  sn as i,
  vt as a,
} from "./chunk~de7f2df91c.js";
import {
  Er as o,
  Kt as s,
  Mn as c,
  Na as l,
  Nt as u,
  Vt as d,
  Zi as f,
  da as p,
  en as m,
  f as h,
  ka as g,
  l as _,
  rn as v,
  sa as y,
  ua as b,
  un as x,
  va as S,
} from "./chunk~1fa4b8f2ff.js";
import { t as C } from "./chunk~ede3e357a2.js";
import { t as w } from "./chunk~9aa05d2c7d.js";
import { t as ee } from "./chunk~6257ebd2d4.js";
import { R as T } from "./chunk~a825a84845.js";
import { c as te } from "./chunk~a6402cc243.js";
import { r as E, t as ne } from "./chunk~8681f5c764.js";
import { t as re } from "./chunk~f4e4ed5c17.js";
import { t as D } from "./chunk~eefd71512b.js";
import { n as ie } from "./chunk~90fbfc6dc2.js";
import { t as ae } from "./chunk~b3f4ae92bc.js";
var O = i(e()),
  oe = `ZqSK587Dwus-`,
  k = a();
function se(e) {
  let { rgGameProfileColorDefs: t } = e,
    n = t.map((e) =>
      (0, k.jsxs)(
        `div`,
        {
          className: `form_row_flex`,
          children: [
            (0, k.jsxs)(`div`, {
              className: `form_label_flex`,
              children: [`*`, e.strProfileColorLabel],
            }),
            (0, k.jsx)(`div`, { className: `form_data_flex`, children: le(e) }),
          ],
        },
        e.strProfileColorKey,
      ),
    );
  return (0, k.jsx)(`div`, { className: void 0, children: n });
}
function ce(e) {
  let t = e.match(/rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!t) return null;
  let [, n, r, i] = t;
  return `${n},${r},${i}`;
}
function le(e) {
  let { strKVPrepend: t, bWriteAsRGBOnly: n } = e,
    [r, i] = O.useState(e.strCurrentColor),
    a = O.useRef(void 0),
    { openColorPicker: o } = te();
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(`input`, {
        ref: a,
        type: `text`,
        name: `${t || `item[profile_colors]`}[${e.strProfileColorKey}]`,
        onChange: () => {
          i(a.current.value);
        },
        placeholder: n ? `255,255,255` : `rgba(255, 255, 255, .5)`,
        size: 20,
        value: n ? ce(r) : r,
        readOnly: !0,
      }),
      (0, k.jsx)(`div`, {
        className: oe,
        style: { backgroundColor: `${r}` },
        onClick: (e) => {
          o(e, { color: r, onChange: i, disableAlpha: n });
        },
      }),
    ],
  });
}
var ue = `Y-x6VTwvyUQ-`,
  de = `APYGegQpzRM-`,
  fe = `I-nhfTKTfqg-`,
  pe = `r7ZD2oPYZGM-`,
  me = `Kdw5C6-tBOA-`,
  he = `jBi67BkmuRo-`,
  ge = `wzmr3e5-yEs-`,
  _e = `Qhbtag9BS5U-`,
  A = `OI7RtmQ-dCM-`,
  j = `fXmHt8Nowas-`,
  M = `jcYbkPwNtpc-`,
  N = `q3kcQ5fKQuU-`,
  P = `DyupVTK4aFA-`,
  F = `ozgK83eDmzE-`,
  I = `YM5o4lQjoAA-`,
  ve = `fpGGKKGNA1Y-`,
  ye = `l-KiBaPMWDY-`,
  L = i(re()),
  R = 748,
  z = 896;
function be(e, n) {
  return ee({
    mutationFn: async (i) => {
      let {
          rgEditionsToSave: a,
          rgGraphicsToDelete: o,
          mapGraphicsToUpload: s,
          mapAltText: c,
        } = i,
        l = new FormData();
      l.append(`sessionid`, t());
      let u = Math.max(n.length, a.length);
      for (let e = 0; e < u; e++)
        e >= a.length
          ? (l.append(`app[related_items][editions][${e}][packageid]`, ``),
            l.append(`app[related_items][editions][${e}][bundleid]`, ``))
          : a[e].packageid
            ? (l.append(
                `app[related_items][editions][${e}][packageid]`,
                `` + a[e].packageid,
              ),
              l.append(`app[related_items][editions][${e}][bundleid]`, ``))
            : a[e].bundleid
              ? (l.append(`app[related_items][editions][${e}][packageid]`, ``),
                l.append(
                  `app[related_items][editions][${e}][bundleid]`,
                  `` + a[e].bundleid,
                ))
              : console.log(
                  `Tried to save an edition with neither packageid or bundleid.`,
                );
      s.forEach((e, t) => {
        l.append(
          `edition_comparison|edition_comparision|assets|edition_comparison|image|${t}`,
          e,
        );
      });
      for (let e of o)
        l.append(`app[assets][edition_comparison][image][${e}]`, ``);
      c.forEach((e, t) => {
        l.append(`app[assets][edition_comparison][image_alt_text][${t}]`, e);
      });
      let d = `${r.PARTNER_BASE_URL}admin/game/quickupdateajax/${e}`;
      return L.default.post(d, l);
    },
  });
}
var B = class {
  rgSet = new Set();
  constructor(e) {
    for (let t of e) this.rgSet.add(JSON.stringify(t));
  }
  has(e) {
    let t = JSON.stringify(e);
    return this.rgSet.has(t);
  }
  add(e) {
    let t = JSON.stringify(e);
    return (this.rgSet.add(t), this);
  }
  delete(e) {
    let t = JSON.stringify(e);
    return this.rgSet.delete(t);
  }
  get size() {
    return this.rgSet.size;
  }
  *[Symbol.iterator]() {
    for (let e of this.rgSet) yield JSON.parse(e);
  }
};
function xe(e) {
  let [t, i] = (0, O.useState)(`closed`),
    a = e.rgEditions,
    [o, s] = (0, O.useState)(new B(a)),
    c = new Map();
  for (let t of Object.keys(e.rgEditionsComparisonGraphics))
    c.set(t, e.rgEditionsComparisonGraphics[t]);
  let [l, u] = (0, O.useState)(() => {
      let t = new Map();
      for (let n of Object.keys(e.rgEditionsAltText))
        t.set(n, e.rgEditionsAltText[n]);
      return t;
    }),
    [d, m] = (0, O.useState)(c),
    g = Object.keys(e.rgEditionsComparisonGraphics).length > 0,
    _ = be(e.nItemId, a),
    v = new Map();
  for (let t of e.rgCandidates) v.set(t.nId, t);
  let y = null;
  if (
    o.size > 0 &&
    e.nBasePackageId !== -1 &&
    !o.has({ packageid: e.nBasePackageId })
  ) {
    let t = e.rgCandidates.find((t) => t.nId === e.nBasePackageId);
    y = b(
      `#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError`,
      t?.strName,
      e.nBasePackageId,
    );
  }
  let x = async () => {
      let e = new Map();
      d.forEach((t, n) => {
        t instanceof File && e.set(n, t);
      });
      let t = [];
      (c.forEach((e, n) => {
        d.has(n) || t.push(n);
      }),
        _.mutate({
          rgEditionsToSave: Array.from(o),
          mapGraphicsToUpload: e,
          mapAltText: l,
          rgGraphicsToDelete: t,
        }),
        i(`alert`));
    },
    S = () => {
      (s(new B(a)), i(`closed`));
    },
    C = () => {
      (i(`refreshing`), window.location.reload());
    },
    w = O.useId();
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(E, {
        active: t === `editor` || t === `alert`,
        children: (0, k.jsxs)(h, {
          "aria-labelledby": w,
          closeModal: () => i(`closed`),
          children: [
            t === `editor` &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `T7v-MZ4cIwI-`,
                    children: [
                      (0, k.jsx)(`h2`, {
                        id: w,
                        children: b(`#StoreAdmin_EditEditions_DialogTitle`),
                      }),
                      _.isPending && (0, k.jsx)(D, {}),
                      !_.isPending &&
                        (0, k.jsxs)(k.Fragment, {
                          children: [
                            y !== null &&
                              (0, k.jsxs)(`div`, {
                                className: `fpGGKKGNA1Y-`,
                                children: [
                                  (0, k.jsx)(f, {}),
                                  (0, k.jsx)(`div`, { children: y }),
                                ],
                              }),
                            (0, k.jsx)(Ce, {
                              rgEditions: o,
                              rgCandidates: e.rgCandidates,
                              setEditions: s,
                            }),
                            (0, k.jsx)(`div`, { className: `vIHobvnT6b0-` }),
                            (0, k.jsx)(we, {
                              mapOriginalImages: c,
                              mapImages: d,
                              setImages: m,
                              mapAltText: l,
                              setAltText: u,
                              bAppHasSteamChinaToolsEnabled:
                                e.bAppHasSteamChinaToolsEnabled,
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, k.jsxs)(`div`, {
                    className: `O-m7d-IwQ2c-`,
                    children: [
                      (0, k.jsx)(`button`, {
                        className: `btn_green_white_innerfade`,
                        disabled: y !== null,
                        onClick: x,
                        children: b(`#StoreAdmin_EditEditions_SaveButton`),
                      }),
                      (0, k.jsx)(`button`, {
                        onClick: S,
                        children: b(`#StoreAdmin_EditEditions_CancelButton`),
                      }),
                    ],
                  }),
                  (0, k.jsx)(`p`, {
                    className: `gCn-Vxi9VPw-`,
                    children: p(
                      `#StoreAdmin_EditEditions_NeedToPublishNotice`,
                      (0, k.jsx)(`a`, {
                        target: `_blank`,
                        href: `${r.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                      }),
                    ),
                  }),
                ],
              }),
            t === `alert` &&
              (0, k.jsx)(k.Fragment, {
                children: (0, k.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, k.jsx)(`h2`, {
                      children: b(`#StoreAdmin_EditEditions_SavingTitle`),
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `_2Euwmvsq7yw-`,
                      children: [
                        _.isPending &&
                          (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)(D, {}),
                              ` `,
                              b(`#StoreAdmin_EditEditions_Saving`),
                            ],
                          }),
                        !_.isPending &&
                          (0, k.jsx)(`span`, {
                            children: b(`#StoreAdmin_EditEditions_Saved`),
                          }),
                      ],
                    }),
                    (0, k.jsx)(`span`, {
                      className: `_53IA82aOGpo-`,
                      children: p(
                        `#StoreAdmin_EditEditions_NeedToPublishAlert`,
                        (0, k.jsx)(`a`, {
                          target: `_blank`,
                          href: `${r.PARTNER_BASE_URL}admin/game/edit/${e.nItemId}?activetab=tab_publish`,
                        }),
                      ),
                    }),
                    (0, k.jsx)(`div`, {
                      className: `O-m7d-IwQ2c-`,
                      children: (0, k.jsx)(`button`, {
                        onClick: C,
                        children: b(`#StoreAdmin_EditEditions_OK`),
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      (e.rgCandidates.length > 1 || e.rgEditions.length > 0) &&
        (0, k.jsx)(k.Fragment, {
          children: (0, k.jsxs)(`div`, {
            className: n(`-VtEdw9C43A-`, g && `pBh5PfMTwpg-`),
            children: [
              t === `closed` &&
                (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(`button`, {
                      className: void 0,
                      onClick: () => i(`editor`),
                      children: b(
                        `#StoreAdmin_EditEditions_ManageEditionsButton`,
                      ),
                    }),
                    o?.size > 0
                      ? (0, k.jsx)(`span`, {
                          children: b(
                            `#StoreAdmin_EditEditions_ManageEditionsDescription`,
                            o.size,
                          ),
                        })
                      : (0, k.jsx)(`span`, {
                          children: b(
                            `#StoreAdmin_EditEditions_GroupEditionsDescription`,
                          ),
                        }),
                    (0, k.jsx)(`span`, {
                      children: g
                        ? (0, k.jsx)(`span`, {
                            className: n(`_6XZF74-pNFM-`, `icon_check_green`),
                            children: b(
                              `#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic`,
                            ),
                          })
                        : b(
                            `#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic`,
                          ),
                    }),
                  ],
                }),
              t === `refreshing` &&
                (0, k.jsx)(k.Fragment, {
                  children: (0, k.jsx)(D, { size: `small` }),
                }),
            ],
          }),
        }),
    ],
  });
}
var Se = (e) =>
  e.eType === `bundle` ? { bundleid: e.nId } : { packageid: e.nId };
function Ce(e) {
  let { rgEditions: t, rgCandidates: i, setEditions: a } = e,
    o = new Map();
  for (let t of e.rgCandidates) o.set(t.nId, t);
  let [s, c] = (0, O.useState)(``),
    l = (e, n) => (r) => {
      let i = new B(t);
      (r.target.checked
        ? i.add(e === `package` ? { packageid: n } : { bundleid: n })
        : i.delete(e === `package` ? { packageid: n } : { bundleid: n }),
        a(i));
    },
    u = (e) => {
      let t = e.target.value;
      c(t);
    },
    d = i.filter(
      (e) => e.strName.toLowerCase().indexOf(s.toLowerCase()) !== -1,
    );
  return (0, k.jsxs)(`div`, {
    className: ue,
    children: [
      (0, k.jsx)(`p`, {
        children: p(
          `#StoreAdmin_EditEditions_GroupEditionsIntro`,
          (0, k.jsx)(`a`, {
            target: `_blank`,
            href: `${r.PARTNER_BASE_URL}doc/store/manageeditions`,
          }),
        ),
      }),
      (0, k.jsx)(`br`, {}),
      (0, k.jsx)(`h3`, { children: b(`#StoreAdmin_EditEditions_StepNumber1`) }),
      (0, k.jsx)(`p`, {
        children: b(`#StoreAdmin_EditEditions_SelectEditionsDescription`),
      }),
      (0, k.jsx)(`div`, {
        className: de,
        children: (0, k.jsx)(`input`, {
          type: `text`,
          placeholder: b(`#StoreAdmin_EditEditions_FilterDescription`),
          value: s,
          onChange: u,
        }),
      }),
      (0, k.jsxs)(`table`, {
        children: [
          (0, k.jsx)(`thead`, {
            children: (0, k.jsxs)(`tr`, {
              children: [
                (0, k.jsx)(`td`, {
                  children: b(`#StoreAdmin_EditEditions_ColumnEdition`),
                }),
                (0, k.jsx)(`td`, {
                  children: b(`#StoreAdmin_EditEditions_ColumnPackageTitle`),
                }),
                (0, k.jsx)(`td`, {
                  children: b(`#StoreAdmin_EditEditions_ColumnState`),
                }),
                (0, k.jsx)(`td`, {
                  children: b(`#StoreAdmin_EditEditions_ColumnPrice`),
                }),
              ],
            }),
          }),
          (0, k.jsx)(`tbody`, {
            children: d.map((e) => {
              let r = t.has(Se(e)),
                i = fe;
              return (
                e.strReleaseState === `Released`
                  ? (i = pe)
                  : e.strReleaseState === `Prepurchase`
                    ? (i = me)
                    : e.strReleaseState === `Beta` && (i = he),
                (0, k.jsxs)(
                  `tr`,
                  {
                    className: n(i, void 0),
                    children: [
                      (0, k.jsx)(`td`, {
                        children: (0, k.jsx)(`input`, {
                          type: `checkbox`,
                          onChange: l(e.eType, e.nId),
                          checked: r,
                        }),
                      }),
                      (0, k.jsx)(`td`, { children: e.strName }),
                      (0, k.jsx)(`td`, {
                        children: e.strLocalizedReleaseState,
                      }),
                      (0, k.jsx)(`td`, {
                        dangerouslySetInnerHTML: { __html: e.strPricing },
                      }),
                    ],
                  },
                  e.nId,
                )
              );
            }),
          }),
        ],
      }),
    ],
  });
}
function we(e) {
  let {
      mapOriginalImages: t,
      mapImages: n,
      setImages: r,
      mapAltText: i,
      setAltText: a,
      bAppHasSteamChinaToolsEnabled: o,
    } = e,
    [s, c] = (0, O.useState)(null),
    l = y(e.bAppHasSteamChinaToolsEnabled),
    [u, d] = (0, O.useState)(`english`),
    p = (0, O.useRef)(null),
    m = null;
  if (n.has(u)) {
    let e = n.get(u);
    m = e instanceof File ? URL.createObjectURL(e) : e;
  }
  let h = async (e) => {
      if (e.target.files && e.target.files[0]) {
        let t = e.target.files[0],
          i = await createImageBitmap(t);
        if (i.width !== R || i.height !== z) {
          c(
            b(
              `#StoreAdmin_EditEditions_ImageSizeError`,
              R,
              z,
              i.width,
              i.height,
            ),
          );
          return;
        }
        let a = new Map(n);
        (a.set(u, t), r(a), c(null));
      }
    },
    g = (e) => {
      let t = new Map(i);
      (t.set(u, e.target.value), a(t));
    },
    _ = (e) => {
      (d(e.target.value), c(null));
    },
    v = () => {
      if (n.has(u)) {
        let e = new Map(n);
        (e.delete(u), r(e), c(null));
      }
    },
    x = (e) => (n.has(e) && n.get(e) instanceof File ? A : n.has(e) ? j : M);
  return (0, k.jsxs)(`div`, {
    className: ge,
    children: [
      (0, k.jsx)(`h3`, { children: b(`#StoreAdmin_EditEditions_StepNumber2`) }),
      (0, k.jsx)(`p`, {
        children: b(
          `#StoreAdmin_EditEditions_UploadComparisonGraphicsDescription`,
          R,
          z,
        ),
      }),
      (0, k.jsxs)(`div`, {
        className: _e,
        children: [
          (0, k.jsx)(`input`, {
            type: `file`,
            ref: p,
            onChange: h,
            style: { display: `none` },
          }),
          (0, k.jsx)(`select`, {
            onChange: _,
            className: x(u),
            children: S(l, (e, t) =>
              (0, k.jsx)(
                `option`,
                { value: t, className: x(t), children: e },
                t,
              ),
            ),
          }),
        ],
      }),
      (0, k.jsx)(`p`, {
        className: ve,
        children:
          s !== null &&
          (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(f, {}), s] }),
      }),
      (0, k.jsx)(`div`, {
        className: N,
        onClick: () => p.current?.click(),
        onDragOver: (e) => e.preventDefault(),
        onDrop: async (e) => {
          if (
            (e.preventDefault(),
            e.dataTransfer.files && e.dataTransfer.files[0])
          ) {
            let t = e.dataTransfer.files[0],
              i = await createImageBitmap(t);
            if (i.width !== R || i.height !== z) {
              c(
                b(
                  `#StoreAdmin_EditEditions_ImageSizeError`,
                  R,
                  z,
                  i.width,
                  i.height,
                ),
              );
              return;
            }
            let a = new Map(n);
            (a.set(u, t), r(a), c(null));
          }
        },
        children: m
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(`div`, {
                  className: P,
                  children: b(`#StoreAdmin_EditEditions_DragAndDropToReplace`),
                }),
                (0, k.jsx)(`img`, { src: m }),
                (0, k.jsx)(`div`, {
                  className: I,
                  children: (0, k.jsx)(`a`, {
                    onClick: v,
                    children: b(`#StoreAdmin_EditEditions_Delete`),
                  }),
                }),
              ],
            })
          : (0, k.jsx)(`div`, {
              className: F,
              children: b(`#StoreAdmin_EditEditions_DragAndDropHere`),
            }),
      }),
      (0, k.jsx)(`h3`, { children: b(`#StoreAdmin_EditEditions_StepNumber3`) }),
      (0, k.jsx)(`label`, {
        htmlFor: `altTextArea`,
        children: (0, k.jsx)(`p`, {
          children: b(`#StoreAdmin_EditEditions_AltTextDescription`),
        }),
      }),
      (0, k.jsx)(`textarea`, {
        id: `altTextArea`,
        className: ye,
        onChange: g,
        value: i.get(u) ?? ``,
      }),
    ],
  });
}
var Te = `r3WKDT6gaqM-`,
  Ee = `_6pN4y6Eg-fg-`,
  De = `bDsnSpZllYc-`,
  V = `MsUBOesTZK0-`,
  Oe = `F2jBiG0GAeU-`,
  ke = `jUTY46ygpic-`,
  Ae = `b4Et6TWZ7Nk-`,
  je = `KcGA2QWdF-Y-`,
  Me = `sUJEEK71BpU-`,
  H = `q6E-QwrC17Q-`,
  U = `sqiADY3xqyI-`,
  Ne = [
    `date_full`,
    `date_month`,
    `date_quarter`,
    `date_year`,
    `text_comingsoon`,
    `text_tba`,
  ],
  Pe = [`date_full`, `date_month`, `date_quarter`];
function W(e) {
  let {
      rtSteamReleaseDate: t,
      value: n,
      onChange: r,
      rgComingSoonOptionOverride: i,
      bExpandedDisplay: a,
    } = e,
    o = !!t,
    s = O.useMemo(
      () => (i || Ne).map((e) => ({ label: T(e, t, null, a), data: e })),
      [t, i, a],
    ),
    c = O.useCallback(
      (e) => {
        r(e.data);
      },
      [r],
    ),
    l = b(
      t ? `#GameEdit_ComingSoon_SelectAnOption` : `#App_Landing_NoDateSelected`,
    );
  return (0, k.jsx)(u, {
    disabled: !o,
    strDefaultLabel: l,
    rgOptions: s,
    selectedOption: o ? n : null,
    onChange: c,
  });
}
var Fe = `iv9J3f-W39U-`,
  Ie = `kR4-ta-b1kc-`,
  Le = `BT0THKP3-3I-`,
  Re = `IJf0HTXRRxo-`,
  ze = `Pm-NM6eIbc0-`,
  Be = `u-ZbXfx3P5Y-`,
  Ve = `uwDMhUXmTLw-`,
  He = `mXBuBv5UBcE-`,
  Ue = `XZk7vfmYCiQ-`;
function We(e) {
  let { appid: t, onClose: n, onCommit: r } = e,
    [i, a] = O.useState(null),
    { data: o, isLoading: s, isLoadingError: c } = Ge(t),
    l = o?.strReleaseState == `prerelease`,
    u = O.useCallback(
      (e, n) => {
        (w.invalidateQueries({ queryKey: [`ReleaseRequest`, t] }), r(e, n, l));
      },
      [t, r, l],
    ),
    d = (0, k.jsx)(Ke, { setOnOKButton: a, onCommit: u });
  return (
    c
      ? (d = (0, k.jsx)(q, {
          strError: b(`#Error_ErrorCommunicatingWithNetwork`),
        }))
      : (s || !o) && (d = (0, k.jsx)(D, {})),
    (0, k.jsx)(G.Provider, {
      value: o,
      children: (0, k.jsx)(Je, { fnSubmit: i, fnCloseModal: n, children: d }),
    })
  );
}
var G = O.createContext(null);
function K() {
  return O.useContext(G);
}
function Ge(e) {
  return C({
    queryKey: [`ReleaseRequest`, e],
    queryFn: async () => {
      let t = await L.default.get(
        `${r.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
      );
      if (typeof t.data == `string`) throw `Error loading release status`;
      return { appid: e, ...t?.data };
    },
  });
}
var Ke = O.memo(function (e) {
  let {
      appid: t,
      bCanUpdateComingSoonDate: n,
      rtReleaseDate: i,
      strComingSoonDisplay: a,
    } = K(),
    { setOnOKButton: o, onCommit: s } = e,
    [l, u] = O.useState(i),
    [d, f] = O.useState(a || void 0),
    [m, h] = O.useState(`none`),
    [g, _] = O.useState(),
    v = O.useCallback((e) => {
      (_(e), h(`none`));
    }, []),
    y = O.useCallback(() => {
      l
        ? d
          ? (h(`submitting`),
            _(null),
            Ze({
              unAppID: t,
              rtReleaseDate: n ? l : null,
              strComingSoonDisplay: d,
            })
              .then(() => {
                (h(`refreshing`), s(l, d));
              })
              .catch((e) => {
                v(e);
              }))
          : v(b(`#App_Landing_ReleaseDate_Error_ComingSoonDisplay`))
        : v(b(`#App_Landing_ReleaseDate_Error_NoDate`));
    }, [t, l, d, n, s, v]);
  return (
    O.useEffect(() => {
      o(m == `none` ? () => y : null);
    }, [y, n, m, o]),
    (0, k.jsxs)(k.Fragment, {
      children: [
        g && (0, k.jsx)(q, { strError: g }),
        (0, k.jsx)(qe, {}),
        (0, k.jsxs)(x, {
          children: [
            (0, k.jsxs)(J, {
              label: b(`#App_Landing_IntendedReleaseDateTitle`),
              children: [
                (0, k.jsx)(Y, { rtSelectedDate: l, setSelectedDate: u }),
                (0, k.jsx)(Ye, {}),
              ],
            }),
            (0, k.jsxs)(J, {
              label: b(`#App_Landing_PublicDateDisplayTitle`),
              children: [
                (0, k.jsx)(W, { rtSteamReleaseDate: l, value: d, onChange: f }),
                (0, k.jsx)(`p`, {
                  children: b(`#App_Landing_ReleaseDateStorePage`),
                }),
                (0, k.jsx)(`p`, {
                  children: b(`#App_Landing_ReleaseDateStoreListing`),
                }),
              ],
            }),
          ],
        }),
        (0, k.jsx)(`div`, {
          className: ze,
          children: p(
            `#App_Landing_NeedHelpWithReleaseDates`,
            (0, k.jsx)(`a`, {
              target: `_blank`,
              href: `${r.PARTNER_BASE_URL}doc/store/coming_soon`,
            }),
            (0, k.jsx)(`a`, {
              target: `_blank`,
              href: `${c()}wizard/HelpWithPublishing`,
            }),
          ),
        }),
        (0, k.jsx)(Xe, {}),
      ],
    })
  );
});
function q(e) {
  let { strError: t } = e;
  return (0, k.jsx)(`div`, { className: Ue, children: t });
}
function qe() {
  let {
    bIsComingSoon: e,
    bIsStorePageReviewed: t,
    bIsWaitingForBuildReview: n,
    bIsFirstSelfPublishingApp: r,
    rtEarliestDate: i,
    bRequiresReleaseWaitingPeriod: a,
  } = K();
  return e && t
    ? n
      ? (0, k.jsx)(X, {
          children: b(`#App_Landing_Release_EarliestDate_BuildReview`),
        })
      : (0, k.jsx)(X, {
          children: b(`#App_Landing_Release_EarliestDate`, l(i)),
        })
    : r && a
      ? (0, k.jsx)(X, {
          children: b(`#App_Landing_Release_EarliestDate_TwoWeeks30Days`),
        })
      : a
        ? (0, k.jsx)(X, {
            children: b(`#App_Landing_Release_EarliestDate_TwoWeeks`),
          })
        : null;
}
function Je(e) {
  let { fnCloseModal: t, fnSubmit: n, children: r } = e,
    { bCanUpdateComingSoonDate: i } = K() || { bCanUpdateComingSoonDate: !0 };
  return (0, k.jsxs)(ne, {
    active: !0,
    className: Fe,
    onDismiss: t,
    children: [
      (0, k.jsx)(m, {
        children: b(
          i
            ? `#App_Landing_Set_Release_Date`
            : `#App_Landing_Change_Release_Date`,
        ),
      }),
      (0, k.jsx)(d, { className: Ie, children: r }),
      (0, k.jsx)(v, {
        bOKDisabled: !n,
        onCancel: t,
        strCancelText: b(`#App_Landing_Requested_Date_Cancel`),
        onOK: n,
        strOKText: b(`#App_Landing_Requested_Date_Update`),
      }),
    ],
  });
}
function J(e) {
  let { label: t, children: n } = e;
  return (0, k.jsxs)(s, {
    className: Le,
    children: [
      (0, k.jsxs)(`div`, { className: Re, children: [t, `:`] }),
      (0, k.jsx)(`div`, { className: Be, children: n }),
    ],
  });
}
function Y(e) {
  let { rtSelectedDate: t, setSelectedDate: n } = e,
    { bCanUpdateComingSoonDate: r, rtEarliestDate: i } = K();
  return (0, k.jsx)(k.Fragment, {
    children: (0, k.jsx)(ae, {
      bWeekdaysOnly: !0,
      bNoDefaultDate: !0,
      disabled: !r,
      nEarliestTime: i,
      fnGetTimeToUpdate: () => t,
      fnSetTimeToUpdate: n,
      className: void 0,
      bShowTimeZone: !0,
      strAlsoShowTimeZone: ie,
    }),
  });
}
function Ye(e) {
  let { bCanUpdateComingSoonDate: t, rtReleaseDate: n } = K();
  return t
    ? (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`p`, {
            children: b(`#App_Landing_Set_Release_Date_SetIntended`),
          }),
          (0, k.jsx)(`p`, {
            children: b(`#App_Landing_Set_Release_Date_Weekends`),
          }),
          (0, k.jsx)(`p`, {
            children: b(`#App_Landing_Set_Release_Date_PacificTime`),
          }),
        ],
      })
    : (0, k.jsx)(`p`, {
        children: p(
          b(
            `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc`,
            l(n),
          ),
          (0, k.jsx)(`a`, {
            href: `${c()}wizard/HelpWithPublishing?issueid=905`,
          }),
        ),
      });
}
function X(e) {
  return (0, k.jsx)(`span`, { className: Ve, children: e.children });
}
function Xe(e) {
  let {
    rtEarliestDate: t,
    strReleaseState: n,
    bCanUpdateComingSoonDate: r,
  } = K();
  return n != `prerelease` || r
    ? null
    : (0, k.jsx)(`div`, {
        className: He,
        children: b(
          `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note`,
          l(t),
        ),
      });
}
async function Ze(e) {
  let { unAppID: n, rtReleaseDate: i, strComingSoonDisplay: a } = e,
    o = `${r.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${n}`,
    s = new FormData();
  (s.append(`sessionid`, t()),
    i && s.append(`release_date`, i.toString()),
    s.append(`coming_soon_display`, a));
  let c = await L.default.post(o, s);
  if (!c.data || c.data.success != 1)
    throw b(
      `#Error_Description`,
      c.data?.success,
      c.data?.error_message || `unknown`,
    );
}
var Z = {
    GameEdit: (e, t) => `/admin/game/${e}/${t}`,
    PackageEdit: (e, t) => `/admin/store/${e}/${t}`,
    BundleEdit: (e, t) => `/bundles/${e}/${t}`,
    GameEditByAppID: (e) => `/admin/game/editbyappid/${e}`,
    ReviewPriceProposals: () => `/admin/reviewpricesubmissions/`,
    PackagePricingComparison: () => `/admin/packagepricingcomparison/`,
    PackageLanding: (e) => `/store/packagelanding/${e}`,
    FrontPageEdit: (e) => `/admin/store/pageclusteredit/frontpage/${e}`,
    FrontPageSteamChinaEdit: (e) =>
      `/admin/store/pageclusteredit/frontpage_china/${e}`,
    ContentHubEditor: (e, t) =>
      `/admin/store/pageclusteredit/content_hub_${t}/${e}`,
    StoreAdminCreatorHome: () => `/admin/creatorhome`,
  },
  Qe = [`edit`, `diff`, `revert`, `prepare`, `publish`],
  $e = [
    `package`,
    `packagesave`,
    `packagediff`,
    `packagerevert`,
    `packageprepare`,
    `packagepublish`,
  ],
  et = [`view`, `preparestore`, `revertstore`, `savestore`, `publish`];
function tt(e) {
  let { bIsGameEdit: t, unAppID: r, rgEarliestAdvancedAccessDate: i } = e,
    [a, s] = O.useState(e.rtReleaseDate),
    [c, l] = O.useState(e.strComingSoonDisplay),
    [u, d] = O.useState(!1),
    [f, p] = O.useState(!1),
    m = O.useCallback(() => d(!0), []),
    h = O.useCallback(() => d(!1), []),
    g = O.useCallback((e, t, n) => {
      (s(e), l(t), d(!1), n && p(!0));
    }, []);
  return (0, k.jsxs)(k.Fragment, {
    children: [
      u && (0, k.jsx)(We, { appid: r, onClose: h, onCommit: g }),
      f &&
        (0, k.jsx)(nt, { appid: r, bIsGameEdit: t, closeModal: () => p(!1) }),
      (0, k.jsxs)(`div`, {
        className: n(Te, t && `rWtT1JIPT9Q-`),
        children: [
          (0, k.jsxs)(`div`, {
            className: Ee,
            children: [
              (0, k.jsx)($, {
                label: b(`#App_Landing_SpecifiedReleaseDate`),
                children: (0, k.jsx)(Q, { rtReleaseDate: a }),
              }),
              (0, k.jsx)($, {
                label: b(`#App_Landing_CustomersSeeReleaseDate`),
                children: (0, k.jsx)(`div`, {
                  className: n(H, c ? U : void 0),
                  children: c ? T(c, a) : b(`#App_Landing_UnsetReleaseDate`),
                }),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: De,
            onClick: m,
            children: [
              (0, k.jsx)(`div`, { className: n(V, Oe) }),
              (0, k.jsx)(`div`, { className: Ae, children: (0, k.jsx)(o, {}) }),
              (0, k.jsx)(`div`, { className: n(V, ke) }),
            ],
          }),
        ],
      }),
      i * 1e3 > new Date().getTime() &&
        (0, k.jsx)($, {
          label: b(`#App_Landing_EarliestAdvancedAccessDate`),
          children: (0, k.jsx)(Q, { rtReleaseDate: i }),
        }),
    ],
  });
}
function Q(e) {
  let { rtReleaseDate: t } = e;
  return t
    ? (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`div`, { className: n(H, U), children: l(t) }),
          (0, k.jsx)(`div`, {
            className: n(void 0, U),
            children: g(t, {}, { timeZoneName: `short` }),
          }),
        ],
      })
    : (0, k.jsx)(`div`, {
        className: n(H, void 0),
        children: b(`#App_Landing_UnsetReleaseDate`),
      });
}
function $(e) {
  return (0, k.jsxs)(`div`, {
    className: je,
    children: [
      (0, k.jsx)(`div`, { className: Me, children: e.label }),
      e.children,
    ],
  });
}
function nt(e) {
  let { appid: t, bIsGameEdit: n, closeModal: r } = e,
    i = O.useCallback(() => {
      (n
        ? (window.TabSelect(`tab_publish`), window.scrollTo(0, 0))
        : (window.location.href =
            Z.GameEditByAppID(t.toString()) + `?activetab=tab_publish`),
        r());
    }, [t, n, r]);
  return (0, k.jsx)(E, {
    active: !0,
    children: (0, k.jsx)(_, {
      strTitle: b(`#App_Landing_ReleaseDate_ChangesSaved`),
      strDescription: b(`#App_Landing_Release_PublishStorePrompt`),
      strOKButtonText: b(`#App_Landing_Release_PrepareToPublish`),
      onOK: i,
      strCancelButtonText: b(`#Button_OK`),
      closeModal: r,
    }),
  });
}
export {
  Z as a,
  xe as c,
  $e as i,
  se as l,
  et as n,
  W as o,
  Qe as r,
  Pe as s,
  tt as t,
};

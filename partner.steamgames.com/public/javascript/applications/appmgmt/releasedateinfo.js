/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Y as t,
  _t as n,
  kt as r,
  nt as i,
  on as a,
} from "./mobx.esm.js";
import {
  At as o,
  Rt as s,
  Ta as c,
  Ut as l,
  Zt as u,
  en as d,
  ka as f,
  kn as p,
  ma as m,
  oa as h,
  qi as g,
  ra as _,
  s as v,
  sa as y,
  sn as b,
  u as x,
  yr as S,
} from "./dialogs.js";
import { t as C } from "./useQuery.js";
import { t as w } from "./reactqueryroot.js";
import { t as ee } from "./useMutation.js";
import { B as T } from "./storeitem.js";
import { c as te } from "./imageuploaderpanel.js";
import { r as E, t as ne } from "./modals.js";
import { t as re } from "./axios.js";
import { t as D } from "./throbber.js";
import { n as ie } from "./timeutils.js";
import { t as ae } from "./partnereventshareddates.js";
var O = a(r()),
  oe = `ZqSK587Dwus-`,
  k = n();
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
  L = a(re()),
  R = 748,
  z = 896;
function be(e, n) {
  return ee({
    mutationFn: async (r) => {
      let {
          rgEditionsToSave: a,
          rgGraphicsToDelete: o,
          mapGraphicsToUpload: s,
          mapAltText: c,
        } = r,
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
      let d = `${i.PARTNER_BASE_URL}admin/game/quickupdateajax/${e}`;
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
    return this.rgSet.add(t), this;
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
function xe(t) {
  let [n, r] = (0, O.useState)(`closed`),
    a = t.rgEditions,
    [o, s] = (0, O.useState)(new B(a)),
    c = new Map();
  for (let e of Object.keys(t.rgEditionsComparisonGraphics))
    c.set(e, t.rgEditionsComparisonGraphics[e]);
  let [l, u] = (0, O.useState)(() => {
      let e = new Map();
      for (let n of Object.keys(t.rgEditionsAltText))
        e.set(n, t.rgEditionsAltText[n]);
      return e;
    }),
    [d, f] = (0, O.useState)(c),
    p = Object.keys(t.rgEditionsComparisonGraphics).length > 0,
    m = be(t.nItemId, a),
    _ = new Map();
  for (let e of t.rgCandidates) _.set(e.nId, e);
  let v = null;
  if (
    o.size > 0 &&
    t.nBasePackageId !== -1 &&
    !o.has({ packageid: t.nBasePackageId })
  ) {
    let e = t.rgCandidates.find((e) => e.nId === t.nBasePackageId);
    v = h(
      `#StoreAdmin_EditEditions_MustIncludeCheapestBasePageError`,
      e?.strName,
      t.nBasePackageId,
    );
  }
  let b = async () => {
      let e = new Map();
      d.forEach((t, n) => {
        t instanceof File && e.set(n, t);
      });
      let t = [];
      c.forEach((e, n) => {
        d.has(n) || t.push(n);
      }),
        m.mutate({
          rgEditionsToSave: Array.from(o),
          mapGraphicsToUpload: e,
          mapAltText: l,
          rgGraphicsToDelete: t,
        }),
        r(`alert`);
    },
    S = () => {
      s(new B(a)), r(`closed`);
    },
    C = () => {
      r(`refreshing`), window.location.reload();
    },
    w = O.useId();
  return (0, k.jsxs)(k.Fragment, {
    children: [
      (0, k.jsx)(E, {
        active: n === `editor` || n === `alert`,
        children: (0, k.jsxs)(x, {
          "aria-labelledby": w,
          closeModal: () => r(`closed`),
          children: [
            n === `editor` &&
              (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsxs)(`div`, {
                    className: `T7v-MZ4cIwI-`,
                    children: [
                      (0, k.jsx)(`h2`, {
                        id: w,
                        children: h(`#StoreAdmin_EditEditions_DialogTitle`),
                      }),
                      m.isPending && (0, k.jsx)(D, {}),
                      !m.isPending &&
                        (0, k.jsxs)(k.Fragment, {
                          children: [
                            v !== null &&
                              (0, k.jsxs)(`div`, {
                                className: `fpGGKKGNA1Y-`,
                                children: [
                                  (0, k.jsx)(g, {}),
                                  (0, k.jsx)(`div`, { children: v }),
                                ],
                              }),
                            (0, k.jsx)(Ce, {
                              rgEditions: o,
                              rgCandidates: t.rgCandidates,
                              setEditions: s,
                            }),
                            (0, k.jsx)(`div`, { className: `vIHobvnT6b0-` }),
                            (0, k.jsx)(we, {
                              mapOriginalImages: c,
                              mapImages: d,
                              setImages: f,
                              mapAltText: l,
                              setAltText: u,
                              bAppHasSteamChinaToolsEnabled:
                                t.bAppHasSteamChinaToolsEnabled,
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
                        disabled: v !== null,
                        onClick: b,
                        children: h(`#StoreAdmin_EditEditions_SaveButton`),
                      }),
                      (0, k.jsx)(`button`, {
                        onClick: S,
                        children: h(`#StoreAdmin_EditEditions_CancelButton`),
                      }),
                    ],
                  }),
                  (0, k.jsx)(`p`, {
                    className: `gCn-Vxi9VPw-`,
                    children: y(
                      `#StoreAdmin_EditEditions_NeedToPublishNotice`,
                      (0, k.jsx)(`a`, {
                        target: `_blank`,
                        href: `${i.PARTNER_BASE_URL}admin/game/edit/${t.nItemId}?activetab=tab_publish`,
                      }),
                    ),
                  }),
                ],
              }),
            n === `alert` &&
              (0, k.jsx)(k.Fragment, {
                children: (0, k.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, k.jsx)(`h2`, {
                      children: h(`#StoreAdmin_EditEditions_SavingTitle`),
                    }),
                    (0, k.jsxs)(`div`, {
                      className: `_2Euwmvsq7yw-`,
                      children: [
                        m.isPending &&
                          (0, k.jsxs)(k.Fragment, {
                            children: [
                              (0, k.jsx)(D, {}),
                              ` `,
                              h(`#StoreAdmin_EditEditions_Saving`),
                            ],
                          }),
                        !m.isPending &&
                          (0, k.jsx)(`span`, {
                            children: h(`#StoreAdmin_EditEditions_Saved`),
                          }),
                      ],
                    }),
                    (0, k.jsx)(`span`, {
                      className: `_53IA82aOGpo-`,
                      children: y(
                        `#StoreAdmin_EditEditions_NeedToPublishAlert`,
                        (0, k.jsx)(`a`, {
                          target: `_blank`,
                          href: `${i.PARTNER_BASE_URL}admin/game/edit/${t.nItemId}?activetab=tab_publish`,
                        }),
                      ),
                    }),
                    (0, k.jsx)(`div`, {
                      className: `O-m7d-IwQ2c-`,
                      children: (0, k.jsx)(`button`, {
                        onClick: C,
                        children: h(`#StoreAdmin_EditEditions_OK`),
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      (t.rgCandidates.length > 1 || t.rgEditions.length > 0) &&
        (0, k.jsx)(k.Fragment, {
          children: (0, k.jsxs)(`div`, {
            className: e(`-VtEdw9C43A-`, p && `pBh5PfMTwpg-`),
            children: [
              n === `closed` &&
                (0, k.jsxs)(k.Fragment, {
                  children: [
                    (0, k.jsx)(`button`, {
                      className: void 0,
                      onClick: () => r(`editor`),
                      children: h(
                        `#StoreAdmin_EditEditions_ManageEditionsButton`,
                      ),
                    }),
                    o?.size > 0
                      ? (0, k.jsx)(`span`, {
                          children: h(
                            `#StoreAdmin_EditEditions_ManageEditionsDescription`,
                            o.size,
                          ),
                        })
                      : (0, k.jsx)(`span`, {
                          children: h(
                            `#StoreAdmin_EditEditions_GroupEditionsDescription`,
                          ),
                        }),
                    (0, k.jsx)(`span`, {
                      children: p
                        ? (0, k.jsx)(`span`, {
                            className: e(`_6XZF74-pNFM-`, `icon_check_green`),
                            children: h(
                              `#StoreAdmin_EditEditions_ManageEditions_HasComparisonGraphic`,
                            ),
                          })
                        : h(
                            `#StoreAdmin_EditEditions_ManageEditions_NoComparisonGraphic`,
                          ),
                    }),
                  ],
                }),
              n === `refreshing` &&
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
function Ce(t) {
  let { rgEditions: n, rgCandidates: r, setEditions: a } = t,
    o = new Map();
  for (let e of t.rgCandidates) o.set(e.nId, e);
  let [s, c] = (0, O.useState)(``),
    l = (e, t) => (r) => {
      let i = new B(n);
      r.target.checked
        ? i.add(e === `package` ? { packageid: t } : { bundleid: t })
        : i.delete(e === `package` ? { packageid: t } : { bundleid: t }),
        a(i);
    },
    u = (e) => {
      let t = e.target.value;
      c(t);
    },
    d = r.filter(
      (e) => e.strName.toLowerCase().indexOf(s.toLowerCase()) !== -1,
    );
  return (0, k.jsxs)(`div`, {
    className: ue,
    children: [
      (0, k.jsx)(`p`, {
        children: y(
          `#StoreAdmin_EditEditions_GroupEditionsIntro`,
          (0, k.jsx)(`a`, {
            target: `_blank`,
            href: `${i.PARTNER_BASE_URL}doc/store/manageeditions`,
          }),
        ),
      }),
      (0, k.jsx)(`br`, {}),
      (0, k.jsx)(`h3`, { children: h(`#StoreAdmin_EditEditions_StepNumber1`) }),
      (0, k.jsx)(`p`, {
        children: h(`#StoreAdmin_EditEditions_SelectEditionsDescription`),
      }),
      (0, k.jsx)(`div`, {
        className: de,
        children: (0, k.jsx)(`input`, {
          type: `text`,
          placeholder: h(`#StoreAdmin_EditEditions_FilterDescription`),
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
                  children: h(`#StoreAdmin_EditEditions_ColumnEdition`),
                }),
                (0, k.jsx)(`td`, {
                  children: h(`#StoreAdmin_EditEditions_ColumnPackageTitle`),
                }),
                (0, k.jsx)(`td`, {
                  children: h(`#StoreAdmin_EditEditions_ColumnState`),
                }),
                (0, k.jsx)(`td`, {
                  children: h(`#StoreAdmin_EditEditions_ColumnPrice`),
                }),
              ],
            }),
          }),
          (0, k.jsx)(`tbody`, {
            children: d.map((t) => {
              let r = n.has(Se(t)),
                i = fe;
              return (
                t.strReleaseState === `Released`
                  ? (i = pe)
                  : t.strReleaseState === `Prepurchase`
                    ? (i = me)
                    : t.strReleaseState === `Beta` && (i = he),
                (0, k.jsxs)(
                  `tr`,
                  {
                    className: e(i, void 0),
                    children: [
                      (0, k.jsx)(`td`, {
                        children: (0, k.jsx)(`input`, {
                          type: `checkbox`,
                          onChange: l(t.eType, t.nId),
                          checked: r,
                        }),
                      }),
                      (0, k.jsx)(`td`, { children: t.strName }),
                      (0, k.jsx)(`td`, {
                        children: t.strLocalizedReleaseState,
                      }),
                      (0, k.jsx)(`td`, {
                        dangerouslySetInnerHTML: { __html: t.strPricing },
                      }),
                    ],
                  },
                  t.nId,
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
    l = _(e.bAppHasSteamChinaToolsEnabled),
    [u, d] = (0, O.useState)(`english`),
    f = (0, O.useRef)(null),
    p = null;
  if (n.has(u)) {
    let e = n.get(u);
    p = e instanceof File ? URL.createObjectURL(e) : e;
  }
  let v = async (e) => {
      if (e.target.files && e.target.files[0]) {
        let t = e.target.files[0],
          i = await createImageBitmap(t);
        if (i.width !== R || i.height !== z) {
          c(
            h(
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
        a.set(u, t), r(a), c(null);
      }
    },
    y = (e) => {
      let t = new Map(i);
      t.set(u, e.target.value), a(t);
    },
    b = (e) => {
      d(e.target.value), c(null);
    },
    x = () => {
      if (n.has(u)) {
        let e = new Map(n);
        e.delete(u), r(e), c(null);
      }
    },
    S = (e) => (n.has(e) && n.get(e) instanceof File ? A : n.has(e) ? j : M);
  return (0, k.jsxs)(`div`, {
    className: ge,
    children: [
      (0, k.jsx)(`h3`, { children: h(`#StoreAdmin_EditEditions_StepNumber2`) }),
      (0, k.jsx)(`p`, {
        children: h(
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
            ref: f,
            onChange: v,
            style: { display: `none` },
          }),
          (0, k.jsx)(`select`, {
            onChange: b,
            className: S(u),
            children: m(l, (e, t) =>
              (0, k.jsx)(
                `option`,
                { value: t, className: S(t), children: e },
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
          (0, k.jsxs)(k.Fragment, { children: [(0, k.jsx)(g, {}), s] }),
      }),
      (0, k.jsx)(`div`, {
        className: N,
        onClick: () => f.current?.click(),
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
                h(
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
            a.set(u, t), r(a), c(null);
          }
        },
        children: p
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(`div`, {
                  className: P,
                  children: h(`#StoreAdmin_EditEditions_DragAndDropToReplace`),
                }),
                (0, k.jsx)(`img`, { src: p }),
                (0, k.jsx)(`div`, {
                  className: I,
                  children: (0, k.jsx)(`a`, {
                    onClick: x,
                    children: h(`#StoreAdmin_EditEditions_Delete`),
                  }),
                }),
              ],
            })
          : (0, k.jsx)(`div`, {
              className: F,
              children: h(`#StoreAdmin_EditEditions_DragAndDropHere`),
            }),
      }),
      (0, k.jsx)(`h3`, { children: h(`#StoreAdmin_EditEditions_StepNumber3`) }),
      (0, k.jsx)(`label`, {
        htmlFor: `altTextArea`,
        children: (0, k.jsx)(`p`, {
          children: h(`#StoreAdmin_EditEditions_AltTextDescription`),
        }),
      }),
      (0, k.jsx)(`textarea`, {
        id: `altTextArea`,
        className: ye,
        onChange: y,
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
    s = !!t,
    c = O.useMemo(
      () => (i || Ne).map((e) => ({ label: T(e, t, null, a), data: e })),
      [t, i, a],
    ),
    l = O.useCallback(
      (e) => {
        r(e.data);
      },
      [r],
    ),
    u = h(
      t ? `#GameEdit_ComingSoon_SelectAnOption` : `#App_Landing_NoDateSelected`,
    );
  return (0, k.jsx)(o, {
    disabled: !s,
    strDefaultLabel: u,
    rgOptions: c,
    selectedOption: s ? n : null,
    onChange: l,
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
        w.invalidateQueries({ queryKey: [`ReleaseRequest`, t] }), r(e, n, l);
      },
      [t, r, l],
    ),
    d = (0, k.jsx)(Ke, { setOnOKButton: a, onCommit: u });
  return (
    c
      ? (d = (0, k.jsx)(q, {
          strError: h(`#Error_ErrorCommunicatingWithNetwork`),
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
        `${i.PARTNER_BASE_URL}apprelease/ajaxgetreleaserequest/${e}`,
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
      rtReleaseDate: r,
      strComingSoonDisplay: a,
    } = K(),
    { setOnOKButton: o, onCommit: s } = e,
    [c, l] = O.useState(r),
    [u, d] = O.useState(a || void 0),
    [f, m] = O.useState(`none`),
    [g, _] = O.useState(),
    v = O.useCallback((e) => {
      _(e), m(`none`);
    }, []),
    x = O.useCallback(() => {
      c
        ? u
          ? (m(`submitting`),
            _(null),
            Ze({
              unAppID: t,
              rtReleaseDate: n ? c : null,
              strComingSoonDisplay: u,
            })
              .then(() => {
                m(`refreshing`), s(c, u);
              })
              .catch((e) => {
                v(e);
              }))
          : v(h(`#App_Landing_ReleaseDate_Error_ComingSoonDisplay`))
        : v(h(`#App_Landing_ReleaseDate_Error_NoDate`));
    }, [t, c, u, n, s, v]);
  return (
    O.useEffect(() => {
      o(f == `none` ? () => x : null);
    }, [x, n, f, o]),
    (0, k.jsxs)(k.Fragment, {
      children: [
        g && (0, k.jsx)(q, { strError: g }),
        (0, k.jsx)(qe, {}),
        (0, k.jsxs)(b, {
          children: [
            (0, k.jsxs)(J, {
              label: h(`#App_Landing_IntendedReleaseDateTitle`),
              children: [
                (0, k.jsx)(Y, { rtSelectedDate: c, setSelectedDate: l }),
                (0, k.jsx)(Ye, {}),
              ],
            }),
            (0, k.jsxs)(J, {
              label: h(`#App_Landing_PublicDateDisplayTitle`),
              children: [
                (0, k.jsx)(W, { rtSteamReleaseDate: c, value: u, onChange: d }),
                (0, k.jsx)(`p`, {
                  children: h(`#App_Landing_ReleaseDateStorePage`),
                }),
                (0, k.jsx)(`p`, {
                  children: h(`#App_Landing_ReleaseDateStoreListing`),
                }),
              ],
            }),
          ],
        }),
        (0, k.jsx)(`div`, {
          className: ze,
          children: y(
            `#App_Landing_NeedHelpWithReleaseDates`,
            (0, k.jsx)(`a`, {
              target: `_blank`,
              href: `${i.PARTNER_BASE_URL}doc/store/coming_soon`,
            }),
            (0, k.jsx)(`a`, {
              target: `_blank`,
              href: `${p()}wizard/HelpWithPublishing`,
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
          children: h(`#App_Landing_Release_EarliestDate_BuildReview`),
        })
      : (0, k.jsx)(X, {
          children: h(`#App_Landing_Release_EarliestDate`, f(i)),
        })
    : r && a
      ? (0, k.jsx)(X, {
          children: h(`#App_Landing_Release_EarliestDate_TwoWeeks30Days`),
        })
      : a
        ? (0, k.jsx)(X, {
            children: h(`#App_Landing_Release_EarliestDate_TwoWeeks`),
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
      (0, k.jsx)(u, {
        children: h(
          i
            ? `#App_Landing_Set_Release_Date`
            : `#App_Landing_Change_Release_Date`,
        ),
      }),
      (0, k.jsx)(s, { className: Ie, children: r }),
      (0, k.jsx)(d, {
        bOKDisabled: !n,
        onCancel: t,
        strCancelText: h(`#App_Landing_Requested_Date_Cancel`),
        onOK: n,
        strOKText: h(`#App_Landing_Requested_Date_Update`),
      }),
    ],
  });
}
function J(e) {
  let { label: t, children: n } = e;
  return (0, k.jsxs)(l, {
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
            children: h(`#App_Landing_Set_Release_Date_SetIntended`),
          }),
          (0, k.jsx)(`p`, {
            children: h(`#App_Landing_Set_Release_Date_Weekends`),
          }),
          (0, k.jsx)(`p`, {
            children: h(`#App_Landing_Set_Release_Date_PacificTime`),
          }),
        ],
      })
    : (0, k.jsx)(`p`, {
        children: y(
          h(
            `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Desc`,
            f(n),
          ),
          (0, k.jsx)(`a`, {
            href: `${p()}wizard/HelpWithPublishing?issueid=905`,
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
        children: h(
          `#App_Landing_Set_Release_Date_ComingSoonWarning_CantSet_Note`,
          f(t),
        ),
      });
}
async function Ze(e) {
  let { unAppID: n, rtReleaseDate: r, strComingSoonDisplay: a } = e,
    o = `${i.PARTNER_BASE_URL}apprelease/ajaxupdatereleaserequest/${n}`,
    s = new FormData();
  s.append(`sessionid`, t()),
    r && s.append(`release_date`, r.toString()),
    s.append(`coming_soon_display`, a);
  let c = await L.default.post(o, s);
  if (!c.data || c.data.success != 1)
    throw h(
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
function tt(t) {
  let { bIsGameEdit: n, unAppID: r, rgEarliestAdvancedAccessDate: i } = t,
    [a, o] = O.useState(t.rtReleaseDate),
    [s, c] = O.useState(t.strComingSoonDisplay),
    [l, u] = O.useState(!1),
    [d, f] = O.useState(!1),
    p = O.useCallback(() => u(!0), []),
    m = O.useCallback(() => u(!1), []),
    g = O.useCallback((e, t, n) => {
      o(e), c(t), u(!1), n && f(!0);
    }, []);
  return (0, k.jsxs)(k.Fragment, {
    children: [
      l && (0, k.jsx)(We, { appid: r, onClose: m, onCommit: g }),
      d &&
        (0, k.jsx)(nt, { appid: r, bIsGameEdit: n, closeModal: () => f(!1) }),
      (0, k.jsxs)(`div`, {
        className: e(Te, n && `rWtT1JIPT9Q-`),
        children: [
          (0, k.jsxs)(`div`, {
            className: Ee,
            children: [
              (0, k.jsx)($, {
                label: h(`#App_Landing_SpecifiedReleaseDate`),
                children: (0, k.jsx)(Q, { rtReleaseDate: a }),
              }),
              (0, k.jsx)($, {
                label: h(`#App_Landing_CustomersSeeReleaseDate`),
                children: (0, k.jsx)(`div`, {
                  className: e(H, s ? U : void 0),
                  children: s ? T(s, a) : h(`#App_Landing_UnsetReleaseDate`),
                }),
              }),
            ],
          }),
          (0, k.jsxs)(`div`, {
            className: De,
            onClick: p,
            children: [
              (0, k.jsx)(`div`, { className: e(V, Oe) }),
              (0, k.jsx)(`div`, { className: Ae, children: (0, k.jsx)(S, {}) }),
              (0, k.jsx)(`div`, { className: e(V, ke) }),
            ],
          }),
        ],
      }),
      i * 1e3 > new Date().getTime() &&
        (0, k.jsx)($, {
          label: h(`#App_Landing_EarliestAdvancedAccessDate`),
          children: (0, k.jsx)(Q, { rtReleaseDate: i }),
        }),
    ],
  });
}
function Q(t) {
  let { rtReleaseDate: n } = t;
  return n
    ? (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(`div`, { className: e(H, U), children: f(n) }),
          (0, k.jsx)(`div`, {
            className: e(void 0, U),
            children: c(n, {}, { timeZoneName: `short` }),
          }),
        ],
      })
    : (0, k.jsx)(`div`, {
        className: e(H, void 0),
        children: h(`#App_Landing_UnsetReleaseDate`),
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
      n
        ? (window.TabSelect(`tab_publish`), window.scrollTo(0, 0))
        : (window.location.href =
            Z.GameEditByAppID(t.toString()) + `?activetab=tab_publish`),
        r();
    }, [t, n, r]);
  return (0, k.jsx)(E, {
    active: !0,
    children: (0, k.jsx)(v, {
      strTitle: h(`#App_Landing_ReleaseDate_ChangesSaved`),
      strDescription: h(`#App_Landing_Release_PublishStorePrompt`),
      strOKButtonText: h(`#App_Landing_Release_PrepareToPublish`),
      onOK: i,
      strCancelButtonText: h(`#Button_OK`),
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

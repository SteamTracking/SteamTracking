/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Pt as e,
  S as t,
  W as n,
  k as r,
  n as i,
  nt as a,
  r as o,
} from "./chunk~de7f2df91c.js";
import {
  C as s,
  a as c,
  c as l,
  l as u,
  n as d,
  r as f,
  s as p,
  u as m,
} from "./chunk~44f252525d.js";
import { n as h, r as ee, t as g } from "./chunk~9fc22a4638.js";
import { E as _, S as v, i as y, x as b } from "./chunk~96e60d7578.js";
import { t as x } from "./chunk~726542bc75.js";
import { t as S } from "./chunk~f4e4ed5c17.js";
var C = e(a()),
  w = `_02J3s0qaZkU-`,
  T = `XrXc527-eN0-`,
  te = `_2h8UzfafL2A-`,
  E = `OUTjRoJcqDI-`,
  D = `Mba5aeMyD74-`,
  ne = `ZS5lkohTp30-`,
  re = `gJMyzfvqkDU-`,
  O = `ONPdTqvV5is-`,
  k = `n8I06srQMyE-`,
  A = `tvx-N1pOzKI-`,
  j = `p3Z6a2v1jSI-`,
  ie = `fZIuooVSW6Y-`,
  ae = `DNGDzyn3pjM-`,
  oe = `_2SGpEv7zmb0-`,
  se = `zLPnm4RPZGw-`,
  ce = `x7Z4zGexv3M-`,
  le = `gg6Wckp-slI-`,
  ue = `OSFqPWpbgOo-`,
  de = `ejkphKJv29s-`,
  fe = `_7Nf-8oVKH8c-`,
  pe = `aQ89MSCoEO8-`,
  me = `tgWb-IZd1os-`,
  he = `aGdyUNKTIyg-`,
  M = `yOva2cBwWGo-`,
  N = `SEsGpoqSlXM-`,
  ge = `ak7K-NfFup8-`,
  P = `AaOSww5oQOk-`,
  _e = `BokTpzJnPPs-`,
  ve = `ZbrKuEQLPZY-`,
  ye = `W7BCeh-Erbg-`,
  be = `s-J90uH4hi0-`,
  xe = `XkXQyg0-G28-`,
  F = `CW2BJ2R8ZH8-`,
  I = `obNi1xU4fK8-`,
  Se = `EzHQYP6eeW0-`,
  Ce = `_3VDjvUJf6ow-`,
  L = `-nx27Hufw30-`,
  R = `_8SJPXnsYTCU-`,
  z = `oTfq5ek2Qb8-`,
  B = `x0Yx8FPSO78-`,
  V = `_--Cz8DzUUQs-`,
  H = `M-Kipwu-EMQ-`,
  we = `_5uD7K-RgZjE-`,
  Te = `Np-MRcB2ZCc-`,
  Ee = `xhSg3O1-s-4-`,
  De = `_0Xb838ZOWhk-`,
  Oe = `x6QjzoVnN-k-`,
  U = `WtoR3YGFUwo-`,
  W = `LEkmCZFOfsE-`,
  ke = `OL29XhgFZFo-`,
  Ae = `YE9yneICx-s-`,
  je = `_101nlblgc0E-`,
  Me = `em4cudlPFQI-`,
  Ne = `Rd6vxmKREw0-`,
  Pe = `iQCBhM6qmcs-`,
  Fe = `JMyi-G5QloM-`,
  Ie = `p7wfXdyaJmc-`,
  Le = `efx3iPvt-SU-`,
  Re = `BhlXNkh8sic-`,
  ze = `_9KSQ4brMfEA-`,
  G = e(S()),
  K = class {
    constructor() {
      b(this);
    }
    getData(e, t, n) {
      let r = this.eState == 1 || this.eState == 4;
      return (
        this.isExpired() &&
          !r &&
          ((this.eState = 1),
          t()
            .then((r) => {
              this.eState == 4
                ? (this.expireData(), this.getData(e, t, n))
                : ((this.data = n ? n(r) : r),
                  r
                    ? (this.delayNewData(e), (this.eState = 2))
                    : (this.eState = 3));
            })
            .catch((e) => {
              ((this.data = n(void 0)), (this.eState = 3));
            })),
        this.data
      );
    }
    clearData() {
      ((this.eState = 0), (this.data = null), (this.nExpirationTime = 0));
    }
    setDataPending() {
      this.eState = 1;
    }
    isDataPending() {
      return this.eState == 1;
    }
    setData(e, t) {
      ((this.data = t), this.delayNewData(e), (this.eState = 2));
    }
    expireData() {
      this.nExpirationTime = 0;
    }
    isExpired() {
      let e = Date.now() / 1e3;
      return this.nExpirationTime < e;
    }
    delayNewData(e) {
      if (e <= 0) this.nExpirationTime = 2 ** 53 - 1;
      else {
        let t = Date.now() / 1e3;
        this.nExpirationTime = t + e;
      }
    }
    rerequestDataIfPending() {
      this.eState == 1 && (this.eState = 4);
    }
    getCachedData() {
      return this.data;
    }
    data = void 0;
    eState = 0;
    nExpirationTime = 0;
  };
(i([v], K.prototype, `data`, void 0),
  i([v], K.prototype, `nExpirationTime`, void 0));
var q = class {
  constructor() {
    b(this);
  }
  getAsyncDataWrapper(e) {
    let t = this.m_mapKeyToDataWrapper.get(e);
    return (t || ((t = new K()), this.m_mapKeyToDataWrapper.set(e, t)), t);
  }
  clearKey(e) {
    (this.m_mapKeyToDataWrapper.get(e)?.clearData(),
      this.m_mapKeyToDataWrapper.delete(e));
  }
  getAllElements() {
    return Array.from(this.m_mapKeyToDataWrapper.values()).map((e) =>
      e.getCachedData(),
    );
  }
  getAllElementsAndKeys() {
    let e = [],
      t = this.m_mapKeyToDataWrapper.entries(),
      n = t.next();
    for (; !n.done;)
      (e.push({ key: n.value[0], data: n.value[1].getCachedData() }),
        (n = t.next()));
    return e;
  }
  m_mapKeyToDataWrapper = new Map();
};
i([v], q.prototype, `m_mapKeyToDataWrapper`, void 0);
var J = class e {
  constructor() {
    b(this);
  }
  static s_SteamMLStore;
  m_asyncSchemaList = new q();
  m_asyncSchemaDetails = new q();
  m_asyncProblemList = new K();
  m_asyncProblemDetails = new q();
  static Get() {
    return (
      e.s_SteamMLStore ||
        ((e.s_SteamMLStore = new e()), e.s_SteamMLStore.Init()),
      e.s_SteamMLStore
    );
  }
  Init() {}
  GetSchemaList(e, n) {
    let i = e + `_` + n;
    return this.m_asyncSchemaList.getAsyncDataWrapper(i).getData(
      30,
      async () =>
        await G.default.get(
          `${r.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${n}&sessionid=${t()}`,
        ),
      (e) => e.data.schemas,
    );
  }
  GetSchemaDetails(e, n) {
    return this.m_asyncSchemaDetails.getAsyncDataWrapper(n).getData(
      30,
      async () =>
        await G.default.get(
          `${r.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${n}&sessionid=${t()}`,
        ),
      (e) => JSON.parse(e.data.schema_description_json),
    );
  }
  GetProblemList() {
    return this.m_asyncProblemList.getData(
      30,
      async () =>
        await G.default.get(
          `${r.PARTNER_BASE_URL}steamml/get_problems?sessionid=${t()}`,
        ),
      (e) => e.data.problems,
    );
  }
  GetProblemDetails(e) {
    return this.m_asyncProblemDetails.getAsyncDataWrapper(e).getData(
      30,
      async () =>
        await G.default.get(
          `${r.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${t()}`,
        ),
      (e) => e.data.problem,
    );
  }
  CreateProblem(e, n, i) {
    let a = new FormData();
    return (
      a.append(`sessionid`, t()),
      a.append(`name`, e),
      a.append(`description`, n),
      a.append(`schemaids`, i.join(`,`)),
      G.default
        .post(`${r.PARTNER_BASE_URL}steamml/create_problem`, a)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
  EditProblemName(e, t) {
    let n = new FormData();
    (n.append(`name`, t), this.EditProblem(e, n));
  }
  EditProblemDesc(e, t) {
    let n = new FormData();
    (n.append(`description`, t), this.EditProblem(e, n));
  }
  EditProblemSchemas(e, t) {
    let n = new FormData();
    (n.append(`schemaids`, t.join(`,`)), this.EditProblem(e, n));
  }
  EditProblem(e, n) {
    return (
      n.append(`sessionid`, t()),
      n.append(`problemid`, e.toString()),
      G.default
        .post(`${r.PARTNER_BASE_URL}steamml/edit_problem`, n)
        .then(() => {
          this.m_asyncProblemDetails.getAsyncDataWrapper(e).expireData();
        })
    );
  }
  DeleteProblem(e) {
    let n = new FormData();
    return (
      n.append(`sessionid`, t()),
      n.append(`problemid`, e.toString()),
      G.default
        .post(`${r.PARTNER_BASE_URL}steamml/delete_problem`, n)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
};
(i([v], J.prototype, `m_asyncSchemaList`, void 0),
  i([v], J.prototype, `m_asyncSchemaDetails`, void 0),
  i([v], J.prototype, `m_asyncProblemList`, void 0),
  i([v], J.prototype, `m_asyncProblemDetails`, void 0),
  i([y], J.prototype, `Init`, null));
var Y = n(),
  Be = s((e) => {
    let t = m().schemaid == `0`,
      n = [
        { label: `816 - Dota Beta`, value: `816` },
        { label: `570 - Dota`, value: `570` },
        { label: `730 - CS:GO`, value: `730` },
        { label: `1015410 - SteamML`, value: `1015410` },
      ],
      [r, i] = (0, C.useState)(n[0].value);
    if (!t) return null;
    let a = J.Get().GetSchemaList(parseInt(r), !0);
    if (!a) return null;
    let o = [];
    for (let e of a)
      o.push(
        (0, Y.jsxs)(
          h,
          {
            to: $.SteamMLSchemas(e.appid, e.schemaid),
            className: A,
            children: [
              (0, Y.jsxs)(`div`, {
                className: oe,
                children: [
                  (0, Y.jsx)(`div`, { className: ie, children: e.name }),
                  (0, Y.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: j,
                        children: `Schema ID`,
                      }),
                      ` `,
                      e.schemaid,
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: ae,
                children: [`AppID `, e.appid],
              }),
              (0, Y.jsxs)(`div`, {
                className: oe,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: se,
                    children: [
                      (0, Y.jsx)(`span`, { className: j, children: `Rows:` }),
                      ` `,
                      e.row_count,
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: ce,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: j,
                        children: `Keep Count:`,
                      }),
                      ` `,
                      x(e.keep_count),
                    ],
                  }),
                ],
              }),
            ],
          },
          e.schemaid,
        ),
      );
    return (0, Y.jsxs)(`div`, {
      className: re,
      children: [
        (0, Y.jsx)(`select`, {
          className: O,
          value: r,
          onChange: (e) => i(e.target.value),
          children: n.map((e) =>
            (0, Y.jsx)(
              `option`,
              { value: e.value, children: e.label },
              e.value,
            ),
          ),
        }),
        o,
      ],
    });
  });
function X(e) {
  switch (e) {
    case 1:
      return `int32`;
    case 2:
      return `int64`;
    case 3:
      return `bool`;
    case 4:
      return `float`;
    case 5:
      return `enum`;
    case 6:
      return `timestamp`;
  }
  return ``;
}
function Ve(e) {
  switch (e) {
    case 1:
      return ge;
    case 2:
      return _e;
    case 3:
      return ve;
    case 4:
      return ye;
    case 5:
      return be;
    case 6:
      return xe;
  }
  return ``;
}
function Z(e, t, n) {
  let r,
    i = t.indexOf(e.name),
    a = i == -1 && !e.count;
  return (
    e.structure
      ? (r = (0, Y.jsxs)(`div`, {
          className: o(M, void 0),
          children: [
            !e.count &&
              (0, Y.jsxs)(`div`, {
                className: `e7iVLXlvG-I-`,
                onClick: () => {
                  n(a ? [...t, e.name] : t.slice(0, i).concat(t.slice(i + 1)));
                },
                children: [
                  (0, Y.jsx)(`div`, {
                    className: o(a && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                    children: `▼`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `SEsGpoqSlXM-`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `CW2BJ2R8ZH8-`,
                        children: e.name,
                      }),
                      (0, Y.jsx)(`div`, {
                        className: `AaOSww5oQOk-`,
                        children: `STRUCT`,
                      }),
                    ],
                  }),
                ],
              }),
            e.structure.member.map((e) =>
              (0, Y.jsx)(
                `div`,
                { className: o(a && `aSW2roouXk0-`, I), children: Z(e, t, n) },
                e.name,
              ),
            ),
          ],
        }))
      : e.array && e.array.primitive
        ? (r = (0, Y.jsx)(`div`, {
            className: o(M, void 0),
            children: (0, Y.jsxs)(`div`, {
              className: o(N, Ve(e.array.primitive.type_info.type)),
              children: [
                (0, Y.jsx)(`div`, { className: F, children: e.name }),
                (0, Y.jsxs)(`div`, {
                  className: P,
                  children: [
                    X(e.array.primitive.type_info.type),
                    ` [`,
                    e.array.max_length,
                    `]`,
                  ],
                }),
              ],
            }),
          }))
        : e.array && e.array.structure
          ? (r = (0, Y.jsxs)(`div`, {
              className: o(M, void 0),
              children: [
                !e.count &&
                  (0, Y.jsxs)(`div`, {
                    className: `e7iVLXlvG-I-`,
                    onClick: () => {
                      n(
                        a
                          ? [...t, e.name]
                          : t.slice(0, i).concat(t.slice(i + 1)),
                      );
                    },
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: o(a && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                        children: `▼`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `SEsGpoqSlXM-`,
                        children: [
                          (0, Y.jsx)(`div`, {
                            className: `CW2BJ2R8ZH8-`,
                            children: e.name,
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `AaOSww5oQOk-`,
                            children: [`STRUCT [`, e.array.max_length, `]`],
                          }),
                        ],
                      }),
                    ],
                  }),
                e.array.structure.member.map((e) =>
                  (0, Y.jsx)(
                    `div`,
                    {
                      className: o(a && `aSW2roouXk0-`, I),
                      children: Z(e, t, n),
                    },
                    e.name,
                  ),
                ),
              ],
            }))
          : e.primitive &&
            (r = (0, Y.jsx)(`div`, {
              className: o(M, void 0),
              children: (0, Y.jsxs)(`div`, {
                className: o(N, Ve(e.primitive.type_info.type)),
                children: [
                  (0, Y.jsx)(`div`, { className: F, children: e.name }),
                  (0, Y.jsx)(`div`, {
                    className: P,
                    children: X(e.primitive.type_info.type),
                  }),
                ],
              }),
            })),
    r
  );
}
var He = s((e) => {
    let t = m(),
      n = t.schemaid == `0`,
      [r, i] = (0, C.useState)([]);
    if (n) return null;
    let a = J.Get().GetSchemaDetails(parseInt(t.appid), t.schemaid);
    return a
      ? (console.log(_(a)),
        (0, Y.jsxs)(`div`, {
          className: le,
          children: [
            (0, Y.jsx)(h, {
              to: $.SteamMLSchemas(`0`),
              className: ue,
              children: `<< BACK`,
            }),
            (0, Y.jsx)(`div`, {
              className: de,
              children: (0, Y.jsxs)(`div`, {
                className: fe,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: pe,
                    children: [`SCHEMA `, a.name],
                  }),
                  (0, Y.jsx)(`div`, { className: me, children: t.schemaid }),
                ],
              }),
            }),
            (0, Y.jsx)(`div`, { className: he, children: Z(a, r, i) }),
          ],
        }))
      : null;
  }),
  Ue = s((e) =>
    (0, Y.jsxs)(`div`, {
      className: ne,
      children: [(0, Y.jsx)(Be, {}), (0, Y.jsx)(He, {})],
    }),
  ),
  Q = (e) =>
    (0, Y.jsx)(`div`, {
      className: o(
        T,
        e.acceptStyle && `_9JpnoXVXMSQ-`,
        e.cancelStyle && `jUNwRlBUAe4-`,
        e.disabled && `Bnr6Za9kXxQ-`,
      ),
      style: { minWidth: e.minWidth },
      onClick: (t) => {
        e.disabled || (e.onClick(), t.stopPropagation());
      },
      children: (0, Y.jsx)(`div`, { className: te, children: e.children }),
    }),
  We = ({ problem: e }) => (
    console.log(_(e)),
    (0, Y.jsxs)(h, {
      to: $.SteamMLProblems(e.problemid),
      className: Ce,
      children: [
        (0, Y.jsx)(`div`, { className: L, children: e.name }),
        !e.active &&
          (0, Y.jsx)(`div`, {
            className: `ppcbxioOlS4-`,
            children: `Inactive`,
          }),
        (0, Y.jsx)(`div`, { className: R, children: e.problem_description }),
        (0, Y.jsx)(`div`, { className: z, children: e.problemid }),
        (0, Y.jsxs)(`div`, {
          className: B,
          children: [
            (0, Y.jsxs)(`div`, {
              className: V,
              children: [
                `Created `,
                new Date(e.create_time * 1e3).toLocaleDateString([`en-us`]),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: H,
              children: [
                `Last modified `,
                new Date(e.update_time * 1e3).toLocaleDateString([`en-us`]),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  Ge = (e) => {
    let [t, n] = (0, C.useState)(!1),
      [i, a] = (0, C.useState)(``),
      [s, c] = (0, C.useState)(``),
      [l, u] = (0, C.useState)([]),
      d = J.Get()
        .GetSchemaList(0, !0)
        ?.sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name),
      f = i.length > 0 && s.length > 0 && l.length > 0,
      p = () => {
        J.Get().CreateProblem(i, s, l);
      };
    return (0, Y.jsxs)(`div`, {
      className: o(we, !t && `rJjXnBtPbjo-`, t && `_6g8QQ-OtiVc-`),
      onClick: () => n(!0),
      children: [
        (0, Y.jsxs)(`div`, {
          className: Te,
          children: [
            (0, Y.jsx)(`img`, {
              className: Ee,
              src: `${r.IMG_URL}webui/storeadmin/plus.png`,
            }),
            (0, Y.jsx)(`div`, {
              className: Oe,
              children: `Add New Problem` + (t ? `` : `?`),
            }),
          ],
        }),
        (0, Y.jsxs)(`div`, {
          className: De,
          children: [
            (0, Y.jsxs)(`div`, {
              className: U,
              children: [
                (0, Y.jsx)(`div`, { className: j, children: `Name` }),
                (0, Y.jsx)(`input`, {
                  className: W,
                  type: `text`,
                  value: i,
                  onChange: (e) => a(e.target.value),
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: U,
              children: [
                (0, Y.jsx)(`div`, { className: j, children: `Description` }),
                (0, Y.jsx)(`input`, {
                  className: W,
                  type: `text`,
                  value: s,
                  onChange: (e) => c(e.target.value),
                }),
              ],
            }),
            d &&
              (0, Y.jsxs)(`div`, {
                className: `OL29XhgFZFo-`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `_0sDeXpjQOF0-`,
                    children: `Select Schemas to Include`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `_101nlblgc0E-`,
                    children: d.map((e) => {
                      let t = l.indexOf(e.schemaid) != -1;
                      return (0, Y.jsx)(
                        `div`,
                        {
                          className: o(`OFyWGKrCiFg-`, t && `O-GKWpa9oIQ-`),
                          onClick: () =>
                            u(
                              t
                                ? l.filter((t) => t != e.schemaid)
                                : l.concat(e.schemaid),
                            ),
                          children: e.name,
                        },
                        e.schemaid,
                      );
                    }),
                  }),
                ],
              }),
            (0, Y.jsxs)(`div`, {
              className: Ae,
              children: [
                (0, Y.jsx)(Q, {
                  acceptStyle: !0,
                  minWidth: 100,
                  disabled: !f,
                  onClick: () => f && p(),
                  children: `Create`,
                }),
                (0, Y.jsx)(Q, {
                  cancelStyle: !0,
                  minWidth: 100,
                  onClick: () => n(!1),
                  children: `Cancel`,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ke = s(({ schemaid: e }) => {
    let t = J.Get().GetSchemaList(0, !0),
      n;
    if (t) {
      let r = t.filter((t) => t.schemaid == e);
      r.length > 0 && (n = r[0]);
    }
    return (0, Y.jsx)(`div`, {
      className: A,
      children:
        n && (0, Y.jsx)(`div`, { className: `fZIuooVSW6Y-`, children: n.name }),
    });
  }),
  qe = (e) => {
    (0, C.useEffect)(() => {
      let t = (t) => {
        t.keyCode === 27 && e();
      };
      return (
        window.addEventListener(`keydown`, t),
        () => {
          window.removeEventListener(`keydown`, t);
        }
      );
    }, [e]);
  },
  Je = s(({ problem: e }) => {
    let [t, n] = (0, C.useState)(!1),
      [r, i] = (0, C.useState)(e.name),
      [a, s] = (0, C.useState)(!1),
      [c, u] = (0, C.useState)(e.problem_description),
      [d, f] = (0, C.useState)(!1),
      [p, m] = (0, C.useState)(e.schemaid),
      ee = l(),
      g = (0, C.useRef)(null),
      _ = (0, C.useRef)(null),
      v = parseInt(e.problemid),
      y = J.Get()
        .GetSchemaList(0, !0)
        ?.slice()
        .sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name);
    qe(() => {
      (b(), x(), u(e.problem_description), s(!1));
    });
    let b = () => {
        (i(e.name), n(!1));
      },
      x = () => {
        (u(e.problem_description), s(!1));
      },
      S = () => {
        (m(e.schemaid), f(!1));
      },
      w = () => {
        (x(), S(), n(!0));
      },
      T = () => {
        (b(), S(), s(!0));
      },
      te = () => {
        (b(), x(), f(!0));
      },
      E = () => {
        (J.Get().EditProblemName(v, r), (e.name = r), n(!1));
      },
      D = () => {
        (J.Get().EditProblemDesc(v, c), (e.problem_description = c), s(!1));
      },
      ne = () => {
        (J.Get().EditProblemSchemas(v, p), (e.schemaid = p), f(!1));
      },
      O = () => {
        (J.Get().DeleteProblem(v), ee.push($.SteamMLProblems(0)));
      };
    return (
      t && g.current.focus(),
      a && _.current.focus(),
      (0, Y.jsxs)(`div`, {
        className: Me,
        children: [
          (0, Y.jsx)(h, {
            to: $.SteamMLProblems(0),
            className: Ne,
            children: `<< BACK `,
          }),
          (0, Y.jsxs)(`div`, {
            className: Pe,
            children: [
              (0, Y.jsx)(`div`, {
                className: o(L, t && `n8I06srQMyE-`),
                onClick: (e) => w(),
                children: e.name,
              }),
              (0, Y.jsx)(`form`, {
                className: t ? void 0 : k,
                onSubmit: (e) => {
                  (E(), e.preventDefault());
                },
                children: (0, Y.jsx)(`input`, {
                  ref: g,
                  className: Fe,
                  type: `text`,
                  value: r,
                  onBlur: () => b(),
                  onFocus: (e) => e.target.select(),
                  onChange: (e) => i(e.target.value),
                }),
              }),
              (0, Y.jsx)(`div`, {
                className: o(R, a && `n8I06srQMyE-`),
                onClick: (e) => T(),
                children: e.problem_description,
              }),
              (0, Y.jsx)(`form`, {
                className: a ? void 0 : k,
                onSubmit: (e) => {
                  (D(), e.preventDefault());
                },
                children: (0, Y.jsx)(`input`, {
                  ref: _,
                  className: Ie,
                  type: `text`,
                  value: c,
                  onBlur: () => x(),
                  onFocus: (e) => e.target.select(),
                  onChange: (e) => u(e.target.value),
                }),
              }),
              (0, Y.jsx)(`div`, { className: z, children: e.problemid }),
              (0, Y.jsxs)(`div`, {
                className: B,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: V,
                    children: [
                      `Created `,
                      new Date(e.create_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: H,
                    children: [
                      `Last modified `,
                      new Date(e.update_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: ke,
            children: [
              (0, Y.jsx)(`div`, { className: Le, children: `Schemas:` }),
              (0, Y.jsx)(`div`, {
                className: Re,
                onClick: () => te(),
                children: `Edit`,
              }),
              (0, Y.jsx)(`div`, {
                className: o(re, d && `n8I06srQMyE-`),
                children: e.schemaid.map((e) =>
                  (0, Y.jsx)(Ke, { schemaid: e }, e),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: o(je, (!d || !y) && `n8I06srQMyE-`),
                children:
                  y &&
                  y.map((e) => {
                    let t = p.indexOf(e.schemaid) != -1;
                    return (0, Y.jsx)(
                      `div`,
                      {
                        className: o(`OFyWGKrCiFg-`, t && `O-GKWpa9oIQ-`),
                        onClick: () =>
                          m(
                            t
                              ? p.filter((t) => t != e.schemaid)
                              : p.concat(e.schemaid),
                          ),
                        children: e.name,
                      },
                      e.schemaid,
                    );
                  }),
              }),
              d &&
                (0, Y.jsxs)(`div`, {
                  className: `YE9yneICx-s-`,
                  children: [
                    (0, Y.jsx)(Q, {
                      minWidth: 100,
                      acceptStyle: !0,
                      disabled: p.length == 0,
                      onClick: () => ne(),
                      children: `Accept`,
                    }),
                    (0, Y.jsx)(Q, {
                      minWidth: 100,
                      cancelStyle: !0,
                      onClick: () => S(),
                      children: `Cancel`,
                    }),
                  ],
                }),
              (0, Y.jsx)(`div`, {
                className: o(ze, d && `n8I06srQMyE-`),
                onClick: () => O(),
                children: `Delete Problem`,
              }),
            ],
          }),
        ],
      })
    );
  }),
  Ye = s((e) => {
    let t = m(),
      n = t.problemid == `0`,
      r,
      i;
    return (
      n
        ? (r = J.Get().GetProblemList())
        : (i = J.Get().GetProblemDetails(parseInt(t.problemid))),
      (0, Y.jsxs)(`div`, {
        className: Se,
        children: [
          n &&
            r &&
            (0, Y.jsxs)(`div`, {
              className: `TCfr0Ygz3UA-`,
              children: [
                r.map((e) => (0, Y.jsx)(We, { problem: e }, e.problemid)),
                r.length == 0 &&
                  (0, Y.jsx)(`div`, {
                    className: `_90sG72RgVkI-`,
                    children: `No Existing Problems`,
                  }),
                (0, Y.jsx)(Ge, {}),
              ],
            }),
          !n &&
            i &&
            (0, Y.jsx)(`div`, {
              className: `em4cudlPFQI-`,
              children: (0, Y.jsx)(Je, { problem: i }),
            }),
        ],
      })
    );
  }),
  $ = {
    SteamMLBase: () => `steamml`,
    SteamMLSchemas: (e, t) => `/schemas/${e ?? `0`}/${t ?? `0`}`,
    SteamMLModels: () => `/models`,
    SteamMLProblems: (e) => `/problems/${e ?? `0`}`,
  },
  Xe = class extends C.Component {
    render() {
      return (0, Y.jsx)(`div`, {
        className: w,
        children: (0, Y.jsxs)(g, {
          basename: ee() + $.SteamMLBase(),
          children: [
            (0, Y.jsx)(Ze, {}),
            (0, Y.jsxs)(c, {
              children: [
                (0, Y.jsx)(f, {
                  exact: !0,
                  path: $.SteamMLSchemas(`:appid`, `:schemaid`),
                  component: Ue,
                }),
                (0, Y.jsx)(f, {
                  exact: !0,
                  path: $.SteamMLModels(),
                  component: Qe,
                }),
                (0, Y.jsx)(f, {
                  exact: !0,
                  path: $.SteamMLProblems(`:problemid`),
                  component: Ye,
                }),
                (0, Y.jsx)(f, {
                  exact: !0,
                  path: `/`,
                  children: (0, Y.jsx)(d, { to: $.SteamMLSchemas() }),
                }),
              ],
            }),
          ],
        }),
      });
    }
  },
  Ze = (e) => {
    let t = u(),
      n = p(t.pathname, {
        path: $.SteamMLSchemas(`:appid`, `:schemaid`),
        exact: !0,
      }),
      r = p(t.pathname, { path: $.SteamMLModels(), exact: !0 }),
      i = p(t.pathname, { path: $.SteamMLProblems(`:problemid`), exact: !0 });
    return (0, Y.jsxs)(`div`, {
      className: E,
      children: [
        (0, Y.jsx)(h, {
          to: $.SteamMLSchemas(),
          className: o(D, n && `O-GKWpa9oIQ-`),
          children: `SCHEMAS`,
        }),
        (0, Y.jsx)(h, {
          to: $.SteamMLModels(),
          className: o(D, r && `O-GKWpa9oIQ-`),
          children: `MODELS`,
        }),
        (0, Y.jsx)(h, {
          to: $.SteamMLProblems(),
          className: o(D, i && `O-GKWpa9oIQ-`),
          children: `PROBLEMS`,
        }),
      ],
    });
  },
  Qe = (e) => (0, Y.jsx)(`div`, { children: `MODEL PAGE` });
export { $ as SteamMLRoutes, Xe as default };

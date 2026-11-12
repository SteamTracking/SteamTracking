/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  D as r,
  S as i,
  X as a,
  a as o,
  j as s,
  rt as c,
  sn as l,
  vt as u,
} from "./chunk~de7f2df91c.js";
import {
  C as d,
  a as f,
  c as p,
  l as m,
  n as ee,
  r as h,
  s as g,
  u as _,
} from "./chunk~44f252525d.js";
import { n as v, r as y, t as b } from "./chunk~9fc22a4638.js";
import { t as x } from "./chunk~726542bc75.js";
import { t as S } from "./chunk~f4e4ed5c17.js";
var C = l(t()),
  w = `_02J3s0qaZkU-`,
  T = `XrXc527-eN0-`,
  E = `_2h8UzfafL2A-`,
  D = `OUTjRoJcqDI-`,
  O = `Mba5aeMyD74-`,
  k = `ZS5lkohTp30-`,
  te = `gJMyzfvqkDU-`,
  ne = `ONPdTqvV5is-`,
  re = `n8I06srQMyE-`,
  A = `tvx-N1pOzKI-`,
  j = `p3Z6a2v1jSI-`,
  ie = `fZIuooVSW6Y-`,
  ae = `DNGDzyn3pjM-`,
  M = `_2SGpEv7zmb0-`,
  oe = `zLPnm4RPZGw-`,
  se = `x7Z4zGexv3M-`,
  ce = `gg6Wckp-slI-`,
  le = `OSFqPWpbgOo-`,
  ue = `ejkphKJv29s-`,
  de = `_7Nf-8oVKH8c-`,
  fe = `aQ89MSCoEO8-`,
  pe = `tgWb-IZd1os-`,
  me = `aGdyUNKTIyg-`,
  N = `yOva2cBwWGo-`,
  P = `SEsGpoqSlXM-`,
  he = `ak7K-NfFup8-`,
  F = `AaOSww5oQOk-`,
  ge = `BokTpzJnPPs-`,
  _e = `ZbrKuEQLPZY-`,
  ve = `W7BCeh-Erbg-`,
  ye = `s-J90uH4hi0-`,
  be = `XkXQyg0-G28-`,
  I = `CW2BJ2R8ZH8-`,
  L = `obNi1xU4fK8-`,
  xe = `EzHQYP6eeW0-`,
  Se = `_3VDjvUJf6ow-`,
  R = `-nx27Hufw30-`,
  z = `_8SJPXnsYTCU-`,
  B = `oTfq5ek2Qb8-`,
  V = `x0Yx8FPSO78-`,
  H = `_--Cz8DzUUQs-`,
  U = `M-Kipwu-EMQ-`,
  Ce = `_5uD7K-RgZjE-`,
  we = `Np-MRcB2ZCc-`,
  Te = `xhSg3O1-s-4-`,
  Ee = `_0Xb838ZOWhk-`,
  De = `x6QjzoVnN-k-`,
  W = `WtoR3YGFUwo-`,
  G = `LEkmCZFOfsE-`,
  Oe = `OL29XhgFZFo-`,
  ke = `YE9yneICx-s-`,
  Ae = `_101nlblgc0E-`,
  je = `em4cudlPFQI-`,
  Me = `Rd6vxmKREw0-`,
  Ne = `iQCBhM6qmcs-`,
  Pe = `JMyi-G5QloM-`,
  Fe = `p7wfXdyaJmc-`,
  Ie = `efx3iPvt-SU-`,
  Le = `BhlXNkh8sic-`,
  Re = `_9KSQ4brMfEA-`,
  K = l(S()),
  q = class {
    constructor() {
      i(this);
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
(e([n], q.prototype, `data`, void 0),
  e([n], q.prototype, `nExpirationTime`, void 0));
var J = class {
  constructor() {
    i(this);
  }
  getAsyncDataWrapper(e) {
    let t = this.m_mapKeyToDataWrapper.get(e);
    return (t || ((t = new q()), this.m_mapKeyToDataWrapper.set(e, t)), t);
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
e([n], J.prototype, `m_mapKeyToDataWrapper`, void 0);
var Y = class e {
  constructor() {
    i(this);
  }
  static s_SteamMLStore;
  m_asyncSchemaList = new J();
  m_asyncSchemaDetails = new J();
  m_asyncProblemList = new q();
  m_asyncProblemDetails = new J();
  static Get() {
    return (
      e.s_SteamMLStore ||
        ((e.s_SteamMLStore = new e()), e.s_SteamMLStore.Init()),
      e.s_SteamMLStore
    );
  }
  Init() {}
  GetSchemaList(e, t) {
    let n = e + `_` + t;
    return this.m_asyncSchemaList.getAsyncDataWrapper(n).getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${t}&sessionid=${a()}`,
        ),
      (e) => e.data.schemas,
    );
  }
  GetSchemaDetails(e, t) {
    return this.m_asyncSchemaDetails.getAsyncDataWrapper(t).getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${t}&sessionid=${a()}`,
        ),
      (e) => JSON.parse(e.data.schema_description_json),
    );
  }
  GetProblemList() {
    return this.m_asyncProblemList.getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_problems?sessionid=${a()}`,
        ),
      (e) => e.data.problems,
    );
  }
  GetProblemDetails(e) {
    return this.m_asyncProblemDetails.getAsyncDataWrapper(e).getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${a()}`,
        ),
      (e) => e.data.problem,
    );
  }
  CreateProblem(e, t, n) {
    let r = new FormData();
    return (
      r.append(`sessionid`, a()),
      r.append(`name`, e),
      r.append(`description`, t),
      r.append(`schemaids`, n.join(`,`)),
      K.default
        .post(`${c.PARTNER_BASE_URL}steamml/create_problem`, r)
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
  EditProblem(e, t) {
    return (
      t.append(`sessionid`, a()),
      t.append(`problemid`, e.toString()),
      K.default
        .post(`${c.PARTNER_BASE_URL}steamml/edit_problem`, t)
        .then(() => {
          this.m_asyncProblemDetails.getAsyncDataWrapper(e).expireData();
        })
    );
  }
  DeleteProblem(e) {
    let t = new FormData();
    return (
      t.append(`sessionid`, a()),
      t.append(`problemid`, e.toString()),
      K.default
        .post(`${c.PARTNER_BASE_URL}steamml/delete_problem`, t)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
};
(e([n], Y.prototype, `m_asyncSchemaList`, void 0),
  e([n], Y.prototype, `m_asyncSchemaDetails`, void 0),
  e([n], Y.prototype, `m_asyncProblemList`, void 0),
  e([n], Y.prototype, `m_asyncProblemDetails`, void 0),
  e([o], Y.prototype, `Init`, null));
var X = u(),
  ze = d((e) => {
    let t = _().schemaid == `0`,
      n = [
        { label: `816 - Dota Beta`, value: `816` },
        { label: `570 - Dota`, value: `570` },
        { label: `730 - CS:GO`, value: `730` },
        { label: `1015410 - SteamML`, value: `1015410` },
      ],
      [r, i] = (0, C.useState)(n[0].value);
    if (!t) return null;
    let a = Y.Get().GetSchemaList(parseInt(r), !0);
    if (!a) return null;
    let o = [];
    for (let e of a)
      o.push(
        (0, X.jsxs)(
          v,
          {
            to: $.SteamMLSchemas(e.appid, e.schemaid),
            className: A,
            children: [
              (0, X.jsxs)(`div`, {
                className: M,
                children: [
                  (0, X.jsx)(`div`, { className: ie, children: e.name }),
                  (0, X.jsxs)(`div`, {
                    className: void 0,
                    children: [
                      (0, X.jsx)(`span`, {
                        className: j,
                        children: `Schema ID`,
                      }),
                      ` `,
                      e.schemaid,
                    ],
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: ae,
                children: [`AppID `, e.appid],
              }),
              (0, X.jsxs)(`div`, {
                className: M,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: oe,
                    children: [
                      (0, X.jsx)(`span`, { className: j, children: `Rows:` }),
                      ` `,
                      e.row_count,
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: se,
                    children: [
                      (0, X.jsx)(`span`, {
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
    return (0, X.jsxs)(`div`, {
      className: te,
      children: [
        (0, X.jsx)(`select`, {
          className: ne,
          value: r,
          onChange: (e) => i(e.target.value),
          children: n.map((e) =>
            (0, X.jsx)(
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
function Be(e) {
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
      return he;
    case 2:
      return ge;
    case 3:
      return _e;
    case 4:
      return ve;
    case 5:
      return ye;
    case 6:
      return be;
  }
  return ``;
}
function Z(e, t, n) {
  let r,
    i = t.indexOf(e.name),
    a = i == -1 && !e.count;
  return (
    e.structure
      ? (r = (0, X.jsxs)(`div`, {
          className: s(N, void 0),
          children: [
            !e.count &&
              (0, X.jsxs)(`div`, {
                className: `e7iVLXlvG-I-`,
                onClick: () => {
                  n(a ? [...t, e.name] : t.slice(0, i).concat(t.slice(i + 1)));
                },
                children: [
                  (0, X.jsx)(`div`, {
                    className: s(a && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                    children: `▼`,
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `SEsGpoqSlXM-`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `CW2BJ2R8ZH8-`,
                        children: e.name,
                      }),
                      (0, X.jsx)(`div`, {
                        className: `AaOSww5oQOk-`,
                        children: `STRUCT`,
                      }),
                    ],
                  }),
                ],
              }),
            e.structure.member.map((e) =>
              (0, X.jsx)(
                `div`,
                { className: s(a && `aSW2roouXk0-`, L), children: Z(e, t, n) },
                e.name,
              ),
            ),
          ],
        }))
      : e.array && e.array.primitive
        ? (r = (0, X.jsx)(`div`, {
            className: s(N, void 0),
            children: (0, X.jsxs)(`div`, {
              className: s(P, Ve(e.array.primitive.type_info.type)),
              children: [
                (0, X.jsx)(`div`, { className: I, children: e.name }),
                (0, X.jsxs)(`div`, {
                  className: F,
                  children: [
                    Be(e.array.primitive.type_info.type),
                    ` [`,
                    e.array.max_length,
                    `]`,
                  ],
                }),
              ],
            }),
          }))
        : e.array && e.array.structure
          ? (r = (0, X.jsxs)(`div`, {
              className: s(N, void 0),
              children: [
                !e.count &&
                  (0, X.jsxs)(`div`, {
                    className: `e7iVLXlvG-I-`,
                    onClick: () => {
                      n(
                        a
                          ? [...t, e.name]
                          : t.slice(0, i).concat(t.slice(i + 1)),
                      );
                    },
                    children: [
                      (0, X.jsx)(`div`, {
                        className: s(a && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                        children: `▼`,
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `SEsGpoqSlXM-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `CW2BJ2R8ZH8-`,
                            children: e.name,
                          }),
                          (0, X.jsxs)(`div`, {
                            className: `AaOSww5oQOk-`,
                            children: [`STRUCT [`, e.array.max_length, `]`],
                          }),
                        ],
                      }),
                    ],
                  }),
                e.array.structure.member.map((e) =>
                  (0, X.jsx)(
                    `div`,
                    {
                      className: s(a && `aSW2roouXk0-`, L),
                      children: Z(e, t, n),
                    },
                    e.name,
                  ),
                ),
              ],
            }))
          : e.primitive &&
            (r = (0, X.jsx)(`div`, {
              className: s(N, void 0),
              children: (0, X.jsxs)(`div`, {
                className: s(P, Ve(e.primitive.type_info.type)),
                children: [
                  (0, X.jsx)(`div`, { className: I, children: e.name }),
                  (0, X.jsx)(`div`, {
                    className: F,
                    children: Be(e.primitive.type_info.type),
                  }),
                ],
              }),
            })),
    r
  );
}
var He = d((e) => {
    let t = _(),
      n = t.schemaid == `0`,
      [i, a] = (0, C.useState)([]);
    if (n) return null;
    let o = Y.Get().GetSchemaDetails(parseInt(t.appid), t.schemaid);
    return o
      ? (console.log(r(o)),
        (0, X.jsxs)(`div`, {
          className: ce,
          children: [
            (0, X.jsx)(v, {
              to: $.SteamMLSchemas(`0`),
              className: le,
              children: `<< BACK`,
            }),
            (0, X.jsx)(`div`, {
              className: ue,
              children: (0, X.jsxs)(`div`, {
                className: de,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: fe,
                    children: [`SCHEMA `, o.name],
                  }),
                  (0, X.jsx)(`div`, { className: pe, children: t.schemaid }),
                ],
              }),
            }),
            (0, X.jsx)(`div`, { className: me, children: Z(o, i, a) }),
          ],
        }))
      : null;
  }),
  Ue = d((e) =>
    (0, X.jsxs)(`div`, {
      className: k,
      children: [(0, X.jsx)(ze, {}), (0, X.jsx)(He, {})],
    }),
  ),
  Q = (e) =>
    (0, X.jsx)(`div`, {
      className: s(
        T,
        e.acceptStyle && `_9JpnoXVXMSQ-`,
        e.cancelStyle && `jUNwRlBUAe4-`,
        e.disabled && `Bnr6Za9kXxQ-`,
      ),
      style: { minWidth: e.minWidth },
      onClick: (t) => {
        e.disabled || (e.onClick(), t.stopPropagation());
      },
      children: (0, X.jsx)(`div`, { className: E, children: e.children }),
    }),
  We = ({ problem: e }) => (
    console.log(r(e)),
    (0, X.jsxs)(v, {
      to: $.SteamMLProblems(e.problemid),
      className: Se,
      children: [
        (0, X.jsx)(`div`, { className: R, children: e.name }),
        !e.active &&
          (0, X.jsx)(`div`, {
            className: `ppcbxioOlS4-`,
            children: `Inactive`,
          }),
        (0, X.jsx)(`div`, { className: z, children: e.problem_description }),
        (0, X.jsx)(`div`, { className: B, children: e.problemid }),
        (0, X.jsxs)(`div`, {
          className: V,
          children: [
            (0, X.jsxs)(`div`, {
              className: H,
              children: [
                `Created `,
                new Date(e.create_time * 1e3).toLocaleDateString([`en-us`]),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: U,
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
      [r, i] = (0, C.useState)(``),
      [a, o] = (0, C.useState)(``),
      [l, u] = (0, C.useState)([]),
      d = Y.Get()
        .GetSchemaList(0, !0)
        ?.sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name),
      f = r.length > 0 && a.length > 0 && l.length > 0,
      p = () => {
        Y.Get().CreateProblem(r, a, l);
      };
    return (0, X.jsxs)(`div`, {
      className: s(Ce, !t && `rJjXnBtPbjo-`, t && `_6g8QQ-OtiVc-`),
      onClick: () => n(!0),
      children: [
        (0, X.jsxs)(`div`, {
          className: we,
          children: [
            (0, X.jsx)(`img`, {
              className: Te,
              src: `${c.IMG_URL}webui/storeadmin/plus.png`,
            }),
            (0, X.jsx)(`div`, {
              className: De,
              children: `Add New Problem` + (t ? `` : `?`),
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: Ee,
          children: [
            (0, X.jsxs)(`div`, {
              className: W,
              children: [
                (0, X.jsx)(`div`, { className: j, children: `Name` }),
                (0, X.jsx)(`input`, {
                  className: G,
                  type: `text`,
                  value: r,
                  onChange: (e) => i(e.target.value),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: W,
              children: [
                (0, X.jsx)(`div`, { className: j, children: `Description` }),
                (0, X.jsx)(`input`, {
                  className: G,
                  type: `text`,
                  value: a,
                  onChange: (e) => o(e.target.value),
                }),
              ],
            }),
            d &&
              (0, X.jsxs)(`div`, {
                className: `OL29XhgFZFo-`,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `_0sDeXpjQOF0-`,
                    children: `Select Schemas to Include`,
                  }),
                  (0, X.jsx)(`div`, {
                    className: `_101nlblgc0E-`,
                    children: d.map((e) => {
                      let t = l.indexOf(e.schemaid) != -1;
                      return (0, X.jsx)(
                        `div`,
                        {
                          className: s(`OFyWGKrCiFg-`, t && `O-GKWpa9oIQ-`),
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
            (0, X.jsxs)(`div`, {
              className: ke,
              children: [
                (0, X.jsx)(Q, {
                  acceptStyle: !0,
                  minWidth: 100,
                  disabled: !f,
                  onClick: () => f && p(),
                  children: `Create`,
                }),
                (0, X.jsx)(Q, {
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
  Ke = d(({ schemaid: e }) => {
    let t = Y.Get().GetSchemaList(0, !0),
      n;
    if (t) {
      let r = t.filter((t) => t.schemaid == e);
      r.length > 0 && (n = r[0]);
    }
    return (0, X.jsx)(`div`, {
      className: A,
      children:
        n && (0, X.jsx)(`div`, { className: `fZIuooVSW6Y-`, children: n.name }),
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
  Je = d(({ problem: e }) => {
    let [t, n] = (0, C.useState)(!1),
      [r, i] = (0, C.useState)(e.name),
      [a, o] = (0, C.useState)(!1),
      [c, l] = (0, C.useState)(e.problem_description),
      [u, d] = (0, C.useState)(!1),
      [f, m] = (0, C.useState)(e.schemaid),
      ee = p(),
      h = (0, C.useRef)(null),
      g = (0, C.useRef)(null),
      _ = parseInt(e.problemid),
      y = Y.Get()
        .GetSchemaList(0, !0)
        ?.slice()
        .sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name);
    qe(() => {
      (b(), x(), l(e.problem_description), o(!1));
    });
    let b = () => {
        (i(e.name), n(!1));
      },
      x = () => {
        (l(e.problem_description), o(!1));
      },
      S = () => {
        (m(e.schemaid), d(!1));
      },
      w = () => {
        (x(), S(), n(!0));
      },
      T = () => {
        (b(), S(), o(!0));
      },
      E = () => {
        (b(), x(), d(!0));
      },
      D = () => {
        (Y.Get().EditProblemName(_, r), (e.name = r), n(!1));
      },
      O = () => {
        (Y.Get().EditProblemDesc(_, c), (e.problem_description = c), o(!1));
      },
      k = () => {
        (Y.Get().EditProblemSchemas(_, f), (e.schemaid = f), d(!1));
      },
      ne = () => {
        (Y.Get().DeleteProblem(_), ee.push($.SteamMLProblems(0)));
      };
    return (
      t && h.current.focus(),
      a && g.current.focus(),
      (0, X.jsxs)(`div`, {
        className: je,
        children: [
          (0, X.jsx)(v, {
            to: $.SteamMLProblems(0),
            className: Me,
            children: `<< BACK `,
          }),
          (0, X.jsxs)(`div`, {
            className: Ne,
            children: [
              (0, X.jsx)(`div`, {
                className: s(R, t && `n8I06srQMyE-`),
                onClick: (e) => w(),
                children: e.name,
              }),
              (0, X.jsx)(`form`, {
                className: t ? void 0 : re,
                onSubmit: (e) => {
                  (D(), e.preventDefault());
                },
                children: (0, X.jsx)(`input`, {
                  ref: h,
                  className: Pe,
                  type: `text`,
                  value: r,
                  onBlur: () => b(),
                  onFocus: (e) => e.target.select(),
                  onChange: (e) => i(e.target.value),
                }),
              }),
              (0, X.jsx)(`div`, {
                className: s(z, a && `n8I06srQMyE-`),
                onClick: (e) => T(),
                children: e.problem_description,
              }),
              (0, X.jsx)(`form`, {
                className: a ? void 0 : re,
                onSubmit: (e) => {
                  (O(), e.preventDefault());
                },
                children: (0, X.jsx)(`input`, {
                  ref: g,
                  className: Fe,
                  type: `text`,
                  value: c,
                  onBlur: () => x(),
                  onFocus: (e) => e.target.select(),
                  onChange: (e) => l(e.target.value),
                }),
              }),
              (0, X.jsx)(`div`, { className: B, children: e.problemid }),
              (0, X.jsxs)(`div`, {
                className: V,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: H,
                    children: [
                      `Created `,
                      new Date(e.create_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: U,
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
          (0, X.jsxs)(`div`, {
            className: Oe,
            children: [
              (0, X.jsx)(`div`, { className: Ie, children: `Schemas:` }),
              (0, X.jsx)(`div`, {
                className: Le,
                onClick: () => E(),
                children: `Edit`,
              }),
              (0, X.jsx)(`div`, {
                className: s(te, u && `n8I06srQMyE-`),
                children: e.schemaid.map((e) =>
                  (0, X.jsx)(Ke, { schemaid: e }, e),
                ),
              }),
              (0, X.jsx)(`div`, {
                className: s(Ae, (!u || !y) && `n8I06srQMyE-`),
                children:
                  y &&
                  y.map((e) => {
                    let t = f.indexOf(e.schemaid) != -1;
                    return (0, X.jsx)(
                      `div`,
                      {
                        className: s(`OFyWGKrCiFg-`, t && `O-GKWpa9oIQ-`),
                        onClick: () =>
                          m(
                            t
                              ? f.filter((t) => t != e.schemaid)
                              : f.concat(e.schemaid),
                          ),
                        children: e.name,
                      },
                      e.schemaid,
                    );
                  }),
              }),
              u &&
                (0, X.jsxs)(`div`, {
                  className: `YE9yneICx-s-`,
                  children: [
                    (0, X.jsx)(Q, {
                      minWidth: 100,
                      acceptStyle: !0,
                      disabled: f.length == 0,
                      onClick: () => k(),
                      children: `Accept`,
                    }),
                    (0, X.jsx)(Q, {
                      minWidth: 100,
                      cancelStyle: !0,
                      onClick: () => S(),
                      children: `Cancel`,
                    }),
                  ],
                }),
              (0, X.jsx)(`div`, {
                className: s(Re, u && `n8I06srQMyE-`),
                onClick: () => ne(),
                children: `Delete Problem`,
              }),
            ],
          }),
        ],
      })
    );
  }),
  Ye = d((e) => {
    let t = _(),
      n = t.problemid == `0`,
      r,
      i;
    return (
      n
        ? (r = Y.Get().GetProblemList())
        : (i = Y.Get().GetProblemDetails(parseInt(t.problemid))),
      (0, X.jsxs)(`div`, {
        className: xe,
        children: [
          n &&
            r &&
            (0, X.jsxs)(`div`, {
              className: `TCfr0Ygz3UA-`,
              children: [
                r.map((e) => (0, X.jsx)(We, { problem: e }, e.problemid)),
                r.length == 0 &&
                  (0, X.jsx)(`div`, {
                    className: `_90sG72RgVkI-`,
                    children: `No Existing Problems`,
                  }),
                (0, X.jsx)(Ge, {}),
              ],
            }),
          !n &&
            i &&
            (0, X.jsx)(`div`, {
              className: `em4cudlPFQI-`,
              children: (0, X.jsx)(Je, { problem: i }),
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
      return (0, X.jsx)(`div`, {
        className: w,
        children: (0, X.jsxs)(b, {
          basename: y() + $.SteamMLBase(),
          children: [
            (0, X.jsx)(Ze, {}),
            (0, X.jsxs)(f, {
              children: [
                (0, X.jsx)(h, {
                  exact: !0,
                  path: $.SteamMLSchemas(`:appid`, `:schemaid`),
                  component: Ue,
                }),
                (0, X.jsx)(h, {
                  exact: !0,
                  path: $.SteamMLModels(),
                  component: Qe,
                }),
                (0, X.jsx)(h, {
                  exact: !0,
                  path: $.SteamMLProblems(`:problemid`),
                  component: Ye,
                }),
                (0, X.jsx)(h, {
                  exact: !0,
                  path: `/`,
                  children: (0, X.jsx)(ee, { to: $.SteamMLSchemas() }),
                }),
              ],
            }),
          ],
        }),
      });
    }
  },
  Ze = (e) => {
    let t = m(),
      n = g(t.pathname, {
        path: $.SteamMLSchemas(`:appid`, `:schemaid`),
        exact: !0,
      }),
      r = g(t.pathname, { path: $.SteamMLModels(), exact: !0 }),
      i = g(t.pathname, { path: $.SteamMLProblems(`:problemid`), exact: !0 });
    return (0, X.jsxs)(`div`, {
      className: D,
      children: [
        (0, X.jsx)(v, {
          to: $.SteamMLSchemas(),
          className: s(O, n && `O-GKWpa9oIQ-`),
          children: `SCHEMAS`,
        }),
        (0, X.jsx)(v, {
          to: $.SteamMLModels(),
          className: s(O, r && `O-GKWpa9oIQ-`),
          children: `MODELS`,
        }),
        (0, X.jsx)(v, {
          to: $.SteamMLProblems(),
          className: s(O, i && `O-GKWpa9oIQ-`),
          children: `PROBLEMS`,
        }),
      ],
    });
  },
  Qe = (e) => (0, X.jsx)(`div`, { children: `MODEL PAGE` });
export { $ as SteamMLRoutes, Xe as default };

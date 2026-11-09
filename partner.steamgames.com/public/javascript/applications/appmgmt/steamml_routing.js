/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  E as t,
  S as n,
  Y as r,
  _t as i,
  i as a,
  k as o,
  kt as s,
  nt as c,
  on as l,
  x as u,
} from "./mobx.esm.js";
import {
  C as d,
  a as f,
  c as p,
  l as m,
  n as ee,
  r as h,
  s as g,
  u as _,
} from "./react-router.js";
import { n as v, r as y, t as b } from "./react-router-dom.js";
import { t as x } from "./formatnumber.js";
import { t as S } from "./axios.js";
var C = l(s()),
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
      u(this);
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
(o([n], q.prototype, `data`, void 0),
  o([n], q.prototype, `nExpirationTime`, void 0));
var J = class {
  constructor() {
    u(this);
  }
  getAsyncDataWrapper(e) {
    let t;
    return (
      this.m_mapKeyToDataWrapper.has(e)
        ? (t = this.m_mapKeyToDataWrapper.get(e))
        : ((t = new q()), this.m_mapKeyToDataWrapper.set(e, t)),
      t
    );
  }
  clearKey(e) {
    (this.m_mapKeyToDataWrapper.has(e) &&
      this.m_mapKeyToDataWrapper.get(e).clearData(),
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
o([n], J.prototype, `m_mapKeyToDataWrapper`, void 0);
var Y = class e {
  constructor() {
    u(this);
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
          `${c.PARTNER_BASE_URL}steamml/get_schemas?appid=${e}&includesteammlapp=${t}&sessionid=${r()}`,
        ),
      (e) => e.data.schemas,
    );
  }
  GetSchemaDetails(e, t) {
    return this.m_asyncSchemaDetails.getAsyncDataWrapper(t).getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_schema_details?appid=${e}&schemaid=${t}&sessionid=${r()}`,
        ),
      (e) => JSON.parse(e.data.schema_description_json),
    );
  }
  GetProblemList() {
    return this.m_asyncProblemList.getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_problems?sessionid=${r()}`,
        ),
      (e) => e.data.problems,
    );
  }
  GetProblemDetails(e) {
    return this.m_asyncProblemDetails.getAsyncDataWrapper(e).getData(
      30,
      async () =>
        await K.default.get(
          `${c.PARTNER_BASE_URL}steamml/get_problem_details?problemid=${e}&sessionid=${r()}`,
        ),
      (e) => e.data.problem,
    );
  }
  CreateProblem(e, t, n) {
    let i = new FormData();
    return (
      i.append(`sessionid`, r()),
      i.append(`name`, e),
      i.append(`description`, t),
      i.append(`schemaids`, n.join(`,`)),
      K.default
        .post(`${c.PARTNER_BASE_URL}steamml/create_problem`, i)
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
      t.append(`sessionid`, r()),
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
      t.append(`sessionid`, r()),
      t.append(`problemid`, e.toString()),
      K.default
        .post(`${c.PARTNER_BASE_URL}steamml/delete_problem`, t)
        .then(() => {
          this.m_asyncProblemList.clearData();
        })
    );
  }
};
(o([n], Y.prototype, `m_asyncSchemaList`, void 0),
  o([n], Y.prototype, `m_asyncSchemaDetails`, void 0),
  o([n], Y.prototype, `m_asyncProblemList`, void 0),
  o([n], Y.prototype, `m_asyncProblemDetails`, void 0),
  o([a], Y.prototype, `Init`, null));
var X = i(),
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
function Z(t, n, r) {
  let i,
    a = n.indexOf(t.name),
    o = a == -1 && !t.count;
  return (
    t.structure
      ? (i = (0, X.jsxs)(`div`, {
          className: e(N, void 0),
          children: [
            !t.count &&
              (0, X.jsxs)(`div`, {
                className: `e7iVLXlvG-I-`,
                onClick: () => {
                  r(o ? [...n, t.name] : n.slice(0, a).concat(n.slice(a + 1)));
                },
                children: [
                  (0, X.jsx)(`div`, {
                    className: e(o && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                    children: `▼`,
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `SEsGpoqSlXM-`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `CW2BJ2R8ZH8-`,
                        children: t.name,
                      }),
                      (0, X.jsx)(`div`, {
                        className: `AaOSww5oQOk-`,
                        children: `STRUCT`,
                      }),
                    ],
                  }),
                ],
              }),
            t.structure.member.map((t) =>
              (0, X.jsx)(
                `div`,
                { className: e(o && `aSW2roouXk0-`, L), children: Z(t, n, r) },
                t.name,
              ),
            ),
          ],
        }))
      : t.array && t.array.primitive
        ? (i = (0, X.jsx)(`div`, {
            className: e(N, void 0),
            children: (0, X.jsxs)(`div`, {
              className: e(P, Ve(t.array.primitive.type_info.type)),
              children: [
                (0, X.jsx)(`div`, { className: I, children: t.name }),
                (0, X.jsxs)(`div`, {
                  className: F,
                  children: [
                    Be(t.array.primitive.type_info.type),
                    ` [`,
                    t.array.max_length,
                    `]`,
                  ],
                }),
              ],
            }),
          }))
        : t.array && t.array.structure
          ? (i = (0, X.jsxs)(`div`, {
              className: e(N, void 0),
              children: [
                !t.count &&
                  (0, X.jsxs)(`div`, {
                    className: `e7iVLXlvG-I-`,
                    onClick: () => {
                      r(
                        o
                          ? [...n, t.name]
                          : n.slice(0, a).concat(n.slice(a + 1)),
                      );
                    },
                    children: [
                      (0, X.jsx)(`div`, {
                        className: e(o && `sbhCBV8PUaU-`, `fz2xQh7zg6E-`),
                        children: `▼`,
                      }),
                      (0, X.jsxs)(`div`, {
                        className: `SEsGpoqSlXM-`,
                        children: [
                          (0, X.jsx)(`div`, {
                            className: `CW2BJ2R8ZH8-`,
                            children: t.name,
                          }),
                          (0, X.jsxs)(`div`, {
                            className: `AaOSww5oQOk-`,
                            children: [`STRUCT [`, t.array.max_length, `]`],
                          }),
                        ],
                      }),
                    ],
                  }),
                t.array.structure.member.map((t) =>
                  (0, X.jsx)(
                    `div`,
                    {
                      className: e(o && `aSW2roouXk0-`, L),
                      children: Z(t, n, r),
                    },
                    t.name,
                  ),
                ),
              ],
            }))
          : t.primitive &&
            (i = (0, X.jsx)(`div`, {
              className: e(N, void 0),
              children: (0, X.jsxs)(`div`, {
                className: e(P, Ve(t.primitive.type_info.type)),
                children: [
                  (0, X.jsx)(`div`, { className: I, children: t.name }),
                  (0, X.jsx)(`div`, {
                    className: F,
                    children: Be(t.primitive.type_info.type),
                  }),
                ],
              }),
            })),
    i
  );
}
var He = d((e) => {
    let n = _(),
      r = n.schemaid == `0`,
      [i, a] = (0, C.useState)([]);
    if (r) return null;
    let o = Y.Get().GetSchemaDetails(parseInt(n.appid), n.schemaid);
    return o
      ? (console.log(t(o)),
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
                  (0, X.jsx)(`div`, { className: pe, children: n.schemaid }),
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
  Q = (t) =>
    (0, X.jsx)(`div`, {
      className: e(
        T,
        t.acceptStyle && `_9JpnoXVXMSQ-`,
        t.cancelStyle && `jUNwRlBUAe4-`,
        t.disabled && `Bnr6Za9kXxQ-`,
      ),
      style: { minWidth: t.minWidth },
      onClick: (e) => {
        t.disabled || (t.onClick(), e.stopPropagation());
      },
      children: (0, X.jsx)(`div`, { className: E, children: t.children }),
    }),
  We = ({ problem: e }) => (
    console.log(t(e)),
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
  Ge = (t) => {
    let [n, r] = (0, C.useState)(!1),
      [i, a] = (0, C.useState)(``),
      [o, s] = (0, C.useState)(``),
      [l, u] = (0, C.useState)([]),
      d = Y.Get()
        .GetSchemaList(0, !0)
        ?.sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name),
      f = i.length > 0 && o.length > 0 && l.length > 0,
      p = () => {
        Y.Get().CreateProblem(i, o, l);
      };
    return (0, X.jsxs)(`div`, {
      className: e(Ce, !n && `rJjXnBtPbjo-`, n && `_6g8QQ-OtiVc-`),
      onClick: () => r(!0),
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
              children: `Add New Problem` + (n ? `` : `?`),
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
                  value: i,
                  onChange: (e) => a(e.target.value),
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
                  value: o,
                  onChange: (e) => s(e.target.value),
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
                    children: d.map((t) => {
                      let n = l.indexOf(t.schemaid) != -1;
                      return (0, X.jsx)(
                        `div`,
                        {
                          className: e(`OFyWGKrCiFg-`, n && `O-GKWpa9oIQ-`),
                          onClick: () =>
                            u(
                              n
                                ? l.filter((e) => e != t.schemaid)
                                : l.concat(t.schemaid),
                            ),
                          children: t.name,
                        },
                        t.schemaid,
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
                  onClick: () => r(!1),
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
  Je = d(({ problem: t }) => {
    let [n, r] = (0, C.useState)(!1),
      [i, a] = (0, C.useState)(t.name),
      [o, s] = (0, C.useState)(!1),
      [c, l] = (0, C.useState)(t.problem_description),
      [u, d] = (0, C.useState)(!1),
      [f, m] = (0, C.useState)(t.schemaid),
      ee = p(),
      h = (0, C.useRef)(null),
      g = (0, C.useRef)(null),
      _ = parseInt(t.problemid),
      y = Y.Get()
        .GetSchemaList(0, !0)
        ?.slice()
        .sort((e, t) => (e.name < t.name ? -1 : 1))
        ?.filter((e, t, n) => t == 0 || e.name != n[t - 1].name);
    qe(() => {
      (b(), x(), l(t.problem_description), s(!1));
    });
    let b = () => {
        (a(t.name), r(!1));
      },
      x = () => {
        (l(t.problem_description), s(!1));
      },
      S = () => {
        (m(t.schemaid), d(!1));
      },
      w = () => {
        (x(), S(), r(!0));
      },
      T = () => {
        (b(), S(), s(!0));
      },
      E = () => {
        (b(), x(), d(!0));
      },
      D = () => {
        (Y.Get().EditProblemName(_, i), (t.name = i), r(!1));
      },
      O = () => {
        (Y.Get().EditProblemDesc(_, c), (t.problem_description = c), s(!1));
      },
      k = () => {
        (Y.Get().EditProblemSchemas(_, f), (t.schemaid = f), d(!1));
      },
      ne = () => {
        (Y.Get().DeleteProblem(_), ee.push($.SteamMLProblems(0)));
      };
    return (
      n && h.current.focus(),
      o && g.current.focus(),
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
                className: e(R, n && `n8I06srQMyE-`),
                onClick: (e) => w(),
                children: t.name,
              }),
              (0, X.jsx)(`form`, {
                className: n ? void 0 : re,
                onSubmit: (e) => {
                  (D(), e.preventDefault());
                },
                children: (0, X.jsx)(`input`, {
                  ref: h,
                  className: Pe,
                  type: `text`,
                  value: i,
                  onBlur: () => b(),
                  onFocus: (e) => e.target.select(),
                  onChange: (e) => a(e.target.value),
                }),
              }),
              (0, X.jsx)(`div`, {
                className: e(z, o && `n8I06srQMyE-`),
                onClick: (e) => T(),
                children: t.problem_description,
              }),
              (0, X.jsx)(`form`, {
                className: o ? void 0 : re,
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
              (0, X.jsx)(`div`, { className: B, children: t.problemid }),
              (0, X.jsxs)(`div`, {
                className: V,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: H,
                    children: [
                      `Created `,
                      new Date(t.create_time * 1e3).toLocaleDateString([
                        `en-us`,
                      ]),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: U,
                    children: [
                      `Last modified `,
                      new Date(t.update_time * 1e3).toLocaleDateString([
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
                className: e(te, u && `n8I06srQMyE-`),
                children: t.schemaid.map((e) =>
                  (0, X.jsx)(Ke, { schemaid: e }, e),
                ),
              }),
              (0, X.jsx)(`div`, {
                className: e(Ae, (!u || !y) && `n8I06srQMyE-`),
                children:
                  y &&
                  y.map((t) => {
                    let n = f.indexOf(t.schemaid) != -1;
                    return (0, X.jsx)(
                      `div`,
                      {
                        className: e(`OFyWGKrCiFg-`, n && `O-GKWpa9oIQ-`),
                        onClick: () =>
                          m(
                            n
                              ? f.filter((e) => e != t.schemaid)
                              : f.concat(t.schemaid),
                          ),
                        children: t.name,
                      },
                      t.schemaid,
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
                className: e(Re, u && `n8I06srQMyE-`),
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
  Ze = (t) => {
    let n = m(),
      r = g(n.pathname, {
        path: $.SteamMLSchemas(`:appid`, `:schemaid`),
        exact: !0,
      }),
      i = g(n.pathname, { path: $.SteamMLModels(), exact: !0 }),
      a = g(n.pathname, { path: $.SteamMLProblems(`:problemid`), exact: !0 });
    return (0, X.jsxs)(`div`, {
      className: D,
      children: [
        (0, X.jsx)(v, {
          to: $.SteamMLSchemas(),
          className: e(O, r && `O-GKWpa9oIQ-`),
          children: `SCHEMAS`,
        }),
        (0, X.jsx)(v, {
          to: $.SteamMLModels(),
          className: e(O, i && `O-GKWpa9oIQ-`),
          children: `MODELS`,
        }),
        (0, X.jsx)(v, {
          to: $.SteamMLProblems(),
          className: e(O, a && `O-GKWpa9oIQ-`),
          children: `PROBLEMS`,
        }),
      ],
    });
  },
  Qe = (e) => (0, X.jsx)(`div`, { children: `MODEL PAGE` });
export { $ as SteamMLRoutes, Xe as default };

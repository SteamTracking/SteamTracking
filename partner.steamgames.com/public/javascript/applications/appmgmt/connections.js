/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { A as e, _t as t, kt as n, nt as r, on as i } from "./mobx.esm.js";
import { r as a } from "./src.js";
import {
  Ht as o,
  It as s,
  Ma as c,
  Nt as l,
  Pt as u,
  aa as d,
  nn as f,
} from "./dialogs.js";
import { c as p } from "./react-router.js";
import { t as m } from "./getpreferredlocales.js";
import { t as h } from "./axios.js";
import { t as g } from "./axiosutils.js";
import { t as _ } from "./throbber.js";
var v = i(n()),
  y = i(h()),
  b = `HSAg4o7r5Io-`,
  ee = `_91-FhJKPrv0-`,
  te = `Da2DIon4-II-`,
  ne = `ney-qgudmmA-`,
  x = `LrlrL1Pznj4-`,
  re = `_-3KMu1Yw5f0-`,
  ie = `MdGdDcTth44-`,
  ae = `Pfhh7-MRDxk-`,
  S = `nEP4IXh-g3s-`,
  C = `QOc3kHAFmB0-`,
  w = `DOZ4V04yi88-`,
  T = `TaCcbWsN9Ew-`,
  E = `IPRpuTUzHHc-`,
  D = `iGB6yDvY0i0-`,
  O = `MmENTTiGPnY-`,
  k = `UzWnsbgwixE-`,
  A = `ymEy9McI9cQ-`,
  j = `NbyOAogUr5g-`,
  M = `cyXziBB6Uvg-`,
  N = `pTClOWS7-RY-`,
  P = `Wd7tcHrvsP0-`,
  F = `pQReSqjDhJM-`,
  I = `bAp2436-gEM-`,
  L = `g6tvFSROsPE-`,
  R = `UmGHgh4iMyw-`,
  oe = `cDP-8Yf1LgY-`,
  z = `UmVep53NuZo-`,
  se = `zpSA3RSKXr4-`,
  ce = `pBiPeyX2KnE-`,
  le = `_-6q30pFrZAs-`,
  B = `G2IFbiODvgM-`,
  ue = `YZtQgWKIHp8-`,
  V = `CsSQZDCxtZo-`,
  de = `H3s1J4vhkuY-`,
  H = `RPTzoV190-A-`,
  fe = `Igr8qoFVGuc-`,
  pe = `zPAYmdohjLw-`,
  me = `-ISJw5em5NA-`,
  he = `MRILhS3aG5k-`,
  ge = `pZWx5MRX2L8-`,
  _e = `ejdfjv5Work-`,
  ve = `d-Tws82OCgI-`,
  ye = `ElUZAAmo5cg-`,
  U = t();
function W(t) {
  return (0, U.jsxs)(`span`, {
    className: e(T, t.className),
    children: [
      (0, U.jsx)(`span`, { className: de, children: t.label }),
      (0, U.jsx)(`span`, { className: j, children: t.children }),
    ],
  });
}
function G(t) {
  let n = t.host,
    i = n.type + `:` + n.id,
    a = t.host_role == `peer` ? `Peer` : `Client`,
    o = null;
  if (n.data_center)
    ((a = `Gameserver`),
      (o = (0, U.jsxs)(v.Fragment, {
        children: [
          (0, U.jsx)(`span`, { className: O, children: i }),
          ` in `,
          (0, U.jsx)(`span`, { className: k, children: n.data_center }),
        ],
      })));
  else if (n.steam_persona) {
    let e = r.COMMUNITY_BASE_URL + `/profiles/` + n.id;
    o = (0, U.jsxs)(v.Fragment, {
      children: [
        (0, U.jsx)(`span`, {
          className: O,
          children: (0, U.jsx)(`a`, { href: e, children: n.steam_persona }),
        }),
        ` (`,
        (0, U.jsx)(`span`, { className: O, children: i }),
        `)`,
      ],
    });
  } else
    o = (0, U.jsx)(v.Fragment, {
      children: (0, U.jsx)(`span`, { className: O, children: i }),
    });
  return (0, U.jsxs)(`div`, {
    className: e(D, n.data_center && `RRLMitTswLQ-`),
    children: [
      (0, U.jsxs)(`div`, {
        className: void 0,
        children: [
          (0, U.jsx)(W, { className: A, label: a, children: o }),
          n.connection_id != null &&
            (0, U.jsx)(W, {
              className: void 0,
              label: `ConnectionID`,
              children: n.connection_id,
            }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: ye,
        children: [
          n.addr &&
            (0, U.jsx)(W, { className: `addr`, label: `IP`, children: n.addr }),
          n.city_name &&
            (0, U.jsx)(W, {
              className: `city_name`,
              label: `City`,
              children: n.city_name,
            }),
          n.country_code &&
            (0, U.jsx)(W, {
              className: `country_code`,
              label: `Country`,
              children: n.country_code,
            }),
          n.as &&
            (0, U.jsx)(W, { className: `as`, label: `AS`, children: n.as }),
        ],
      }),
    ],
  });
}
function K(e, t) {
  return (
    (t ??= 0),
    e.toLocaleString(m(), {
      minimumFractionDigits: t,
      maximumFractionDigits: t,
    })
  );
}
function q(e) {
  let t = 1e30,
    n = -1e30;
  if (e && e.ping_pctile)
    for (let r in e.ping_pctile) {
      let i = parseFloat(r);
      if (i >= 5 && i <= 95) {
        let i = e.ping_pctile[r];
        (i < t && (t = i), i > n && (n = i));
      }
    }
  return [t, n];
}
function J(e) {
  let t = 1e30;
  if (e && e.quality_pctile)
    for (let n in e.quality_pctile) {
      let r = parseFloat(n);
      if (r >= 5 && r <= 95) {
        let r = e.quality_pctile[n];
        r < t && (t = r);
      }
    }
  return t;
}
function Y(e, t, n) {
  let r = n > 0 ? t / n : 0,
    i = (100 * r).toFixed(1) + `%`;
  return (0, U.jsxs)(
    `tr`,
    {
      children: [
        (0, U.jsx)(`th`, { className: void 0, children: e }),
        (0, U.jsx)(`td`, { className: B, children: i }),
        (0, U.jsxs)(`td`, {
          children: [
            (0, U.jsx)(`span`, {
              className: fe,
              style: { width: r * 90 + 1 + `px` },
            }),
            (0, U.jsx)(`span`, { className: void 0, children: K(t) }),
          ],
        }),
      ],
    },
    e,
  );
}
function X(e, t) {
  if (!(t > 0)) return null;
  let n = [];
  for (let r = 0; r < e.length; ++r) n.push(Y(e[r][0], e[r][1], t));
  return (0, U.jsx)(`table`, {
    className: H,
    children: (0, U.jsx)(`tbody`, { children: n }),
  });
}
function Z(e) {
  let t = [];
  for (let n = 0; n < e.length; ++n) {
    let [r, i] = e[n];
    i != null &&
      t.push(
        (0, U.jsxs)(
          `tr`,
          {
            children: [
              (0, U.jsxs)(`th`, { className: me, children: [r, `% <=`] }),
              (0, U.jsx)(`td`, { className: void 0, children: i }),
            ],
          },
          r,
        ),
      );
  }
  return t.length
    ? (0, U.jsx)(`table`, {
        className: pe,
        children: (0, U.jsx)(`tbody`, { children: t }),
      })
    : null;
}
function Q(e) {
  return e >= 0 ? e.toFixed(0) + `ms` : `???`;
}
function be(t) {
  let n = function (e) {
      let t = e >= 0 ? K(e) : `?`;
      return (0, U.jsx)(`td`, { className: ce, children: t + ` pkts` });
    },
    r = function (e) {
      let t = e >= 0 ? K(e) : `?`;
      return (0, U.jsx)(`td`, { className: le, children: t + `kb` });
    },
    i = function (e, t) {
      let n = ``;
      return (
        t > 0 && e >= 0 && (n = ((e / t) * 100).toFixed(3) + `%`),
        (0, U.jsx)(`td`, { className: B, children: n })
      );
    };
  return (0, U.jsxs)(`div`, {
    className: e(ue, void 0),
    children: [
      (0, U.jsx)(`div`, { className: z, children: `Summary counters` }),
      (0, U.jsx)(`table`, {
        children: (0, U.jsxs)(`tbody`, {
          children: [
            (0, U.jsxs)(`tr`, {
              children: [
                (0, U.jsx)(`th`, { children: `Sent` }),
                n(t.sent_pkt),
                r(t.sent_kb),
                (0, U.jsx)(`td`, { className: V }),
                (0, U.jsx)(`th`, { children: `Dropped` }),
                n(t.drop),
                i(t.drop, t.recv_seq),
              ],
            }),
            (0, U.jsxs)(`tr`, {
              children: [
                (0, U.jsx)(`th`, { children: `Recv` }),
                n(t.recv_pkt),
                r(t.recv_kb),
                (0, U.jsx)(`td`, { className: V }),
                (0, U.jsx)(`th`, { children: `Duplicate` }),
                n(t.dup),
                i(t.dup, t.recv_seq),
              ],
            }),
            (0, U.jsxs)(`tr`, {
              children: [
                (0, U.jsx)(`th`, { children: `Recv w/ seq` }),
                n(t.recv_seq),
                (0, U.jsx)(`td`, {}),
                (0, U.jsx)(`td`, { className: V }),
                (0, U.jsx)(`th`, { children: `Out of order` }),
                n(t.ooo),
                i(t.ooo, t.recv_seq),
              ],
            }),
            (0, U.jsxs)(`tr`, {
              children: [
                (0, U.jsx)(`th`, { children: `Summary` }),
                (0, U.jsx)(`td`, {
                  colSpan: 2,
                  className: void 0,
                  children: (0, U.jsx)(`span`, {
                    className: `flowqualityclass_` + t.quality_class,
                    children: t.quality_class,
                  }),
                }),
                (0, U.jsx)(`td`, { className: V }),
                (0, U.jsx)(`th`, { children: `Seq num lurch` }),
                n(t.seqlurch),
                i(t.seqlurch, t.recv_seq),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function xe(e) {
  let t = null,
    n = null,
    r = 0,
    i = e.quality_hist;
  if (i) {
    let e = [
      [`Perfect`, i[100] || 0],
      [`>99%`, i[99] || 0],
      [`97-99%`, i[97] || 0],
      [`95-97%`, i[95] || 0],
      [`90-95%`, i[90] || 0],
      [`75-90%`, i[75] || 0],
      [`50-75%`, i[50] || 0],
      [`<50%`, i[1] || 0],
      [`Dead`, i[0] || 0],
    ];
    for (let t = 0; t < e.length; ++t) r += e[t][1];
    t = X(e, r);
  }
  if (r <= 0) return null;
  let a = e.quality_pctile;
  if (a) {
    let e = (e) => (e == null ? void 0 : e + `%`);
    n = Z([
      [50, e(a[50])],
      [25, e(a[25])],
      [5, e(a[5])],
      [2, e(a[2])],
    ]);
  }
  let o = K(r) + ` measurement intervals`;
  return (0, U.jsxs)(`div`, {
    className: ve,
    children: [
      (0, U.jsx)(`div`, {
        className: z,
        children: `Quality interval breakdown`,
      }),
      (0, U.jsx)(`div`, { className: void 0, children: o }),
      t,
      n,
    ],
  });
}
function Se(e) {
  let t = null,
    n = e.ping_hist,
    r = 0;
  if (n) {
    let e = [
        [0, n[25] || 0],
        [25, n[50] || 0],
        [50, n[75] || 0],
        [75, n[100] || 0],
        [100, n[125] || 0],
        [125, n[150] || 0],
        [150, n[200] || 0],
        [200, n[300] || 0],
        [300, n.max || 0],
      ],
      i,
      a = 0;
    for (let t = 0; t < e.length; ++t)
      e[t][1] > 0 && ((i ??= t), (a = t + 1), (r += e[t][1]));
    if (r > 0) {
      ((i = Math.max(0, i - 2)), (a = Math.min(e.length, a + 2)));
      let n = [];
      for (let t = i; t < a; ++t) {
        let [o, s] = e[t];
        t == i && s == 0 && (o = 0);
        let c;
        ((c =
          t + 1 >= e.length || (t + 1 >= a && s == 0)
            ? Q(o) + `+`
            : o + `-` + Q(e[t + 1][0])),
          n.push(Y(c, s, r)));
      }
      t = (0, U.jsx)(`table`, {
        className: H,
        children: (0, U.jsx)(`tbody`, { children: n }),
      });
    }
  }
  let i = null,
    a = e.ping_pctile;
  if (a) {
    let e = (e) => (e == null ? void 0 : Q(e));
    i = Z([
      [5, e(a[5])],
      [50, e(a[50])],
      [75, e(a[75])],
      [95, e(a[95])],
      [98, e(a[98])],
    ]);
  }
  let o = null,
    s = 0,
    c = e.jitter_hist;
  if (c) {
    let e = [
      [`<1ms`, c[0] || 0],
      [`1-2ms`, c[1] || 0],
      [`2-5ms`, c[2] || 0],
      [`5-10ms`, c[5] || 0],
      [`10-20ms`, c[10] || 0],
      [`20ms+`, c[20] || 0],
    ];
    for (let t = 0; t < e.length; ++t) s += e[t][1];
    o = X(e, s);
  }
  if (!t && !i && !o) return null;
  let l = K(r) + ` samples`,
    u = K(s) + ` samples`;
  return (0, U.jsxs)(`div`, {
    className: he,
    children: [
      (0, U.jsxs)(`div`, {
        className: ge,
        children: [
          (0, U.jsx)(`div`, { className: z, children: `Round Trip Latency` }),
          (0, U.jsx)(`div`, { className: void 0, children: l }),
          t,
          i,
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: _e,
        children: [
          (0, U.jsx)(`div`, { className: z, children: `Jitter` }),
          (0, U.jsx)(`div`, { className: void 0, children: u }),
          o,
        ],
      }),
    ],
  });
}
function $(e) {
  let t = e.flow;
  return (0, U.jsxs)(`div`, {
    className: F,
    children: [
      (0, U.jsx)(`div`, { className: se, children: e.title }),
      t
        ? (0, U.jsxs)(v.Fragment, { children: [be(t), xe(t), Se(t)] })
        : (0, U.jsx)(`div`, {
            className: void 0,
            children: `(No data available)`,
          }),
    ],
  });
}
function Ce(e) {
  let t = e.sess,
    n = e.cxn,
    r = null,
    i = null;
  if (t.client_front || t.router_front) {
    let e =
      n.kind == `ded`
        ? `Front side statistics reported by client`
        : `Front side statistics reported by player`;
    r = (0, U.jsxs)(`div`, {
      className: P,
      children: [
        (0, U.jsx)($, { title: e, flow: t.client_front }),
        (0, U.jsx)($, {
          title: `Front side statistics reported by relay`,
          flow: t.router_front,
        }),
      ],
    });
  }
  return (
    (t.router_back || t.gameserver_back) &&
      (i = (0, U.jsxs)(`div`, {
        className: P,
        children: [
          (0, U.jsx)($, {
            title: `Back side statistics reported by relay`,
            flow: t.router_back,
          }),
          (0, U.jsx)($, {
            title: `Back side statistics reported by gameserver`,
            flow: t.gameserver_back,
          }),
        ],
      })),
    (0, U.jsxs)(`div`, {
      className: I,
      children: [
        (0, U.jsxs)(`div`, {
          className: void 0,
          children: [
            (0, U.jsx)(W, {
              label: `Relay address`,
              children: t.client.relay_addr,
            }),
            (0, U.jsx)(W, {
              label: `Relay POP`,
              children: t.client.relay_cluster,
            }),
            (0, U.jsx)(W, { label: `Active`, children: c(t.active_time) }),
          ],
        }),
        r,
        i,
      ],
    })
  );
}
function we(e) {
  if (!e || !e.length) return null;
  let t = e[0];
  for (let n = 1; n < e.length; ++n) {
    let r = e[n];
    (r.primary > t.primary ||
      (r.primary == t.primary && r.active_time > t.active_time)) &&
      (t = r);
  }
  return t;
}
function Te(e) {
  let t = e.cxn,
    n = t.client,
    r = t.peer,
    i = t.client_e2e,
    a = t.peer_e2e,
    [s, l] = v.useState(!1),
    u = we(t.client_sessions),
    f = null,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    y = null,
    b = [];
  if (u) {
    if (
      (r &&
        u.client.connection_id == r.connection_id &&
        (!n || (u.client.connection_id, n.connection_id)),
      u.start_time && u.duration)
    ) {
      let e = new Date(u.start_time * 1e3),
        t = new Date((u.start_time + u.duration) * 1e3),
        n = d.GetPreferredLocales(),
        r = e.toLocaleString(n, {
          weekday: `short`,
          year: `numeric`,
          month: `short`,
          day: `numeric`,
        }),
        i = e.toLocaleString(n, {
          hour12: !1,
          hour: `2-digit`,
          minute: `2-digit`,
          second: `2-digit`,
        }),
        a = t.toLocaleString(n, {
          hour12: !1,
          hour: `2-digit`,
          minute: `2-digit`,
          second: `2-digit`,
          timeZoneName: `short`,
        }),
        o = c(u.duration);
      f = (0, U.jsxs)(`span`, {
        className: void 0,
        children: [
          (0, U.jsxs)(W, { label: `Time`, children: [r, ` `, i, `--`, a] }),
          (0, U.jsx)(W, { label: `Duration`, children: o }),
        ],
      });
    }
    if (
      (u.close_code &&
        (p = (0, U.jsxs)(W, {
          label: `Closed`,
          className: L,
          children: [u.close_type, ` `, u.close_msg, ` (`, u.close_code, `)`],
        })),
      u.experience_class)
    ) {
      let e = u.class_reason ? ` (${u.class_reason})` : ``;
      m = (0, U.jsxs)(W, {
        label: `Experience`,
        children: [
          (0, U.jsx)(`span`, {
            className: `experience_` + u.experience_class,
            children: u.experience_class,
          }),
          e,
        ],
      });
    }
  }
  if (t.app) {
    let e = Object.keys(t.app);
    if (e.length > 0) {
      e.sort();
      let n = [];
      for (let r of e) n.push((0, U.jsx)(W, { label: r, children: t.app[r] }));
      h = (0, U.jsxs)(`div`, {
        className: R,
        children: [
          (0, U.jsx)(`span`, {
            className: oe,
            children: `Application fields:`,
          }),
          n,
        ],
      });
    }
  }
  if (i || a) {
    let [e, n] = q(i),
      [r, o] = q(a),
      c = Math.min(e, r),
      l = Math.max(n, o);
    if (c <= l) {
      let e =
        c * 0.03 + 2 < l
          ? `${c}--${l}ms`
          : Math.floor((c + l) / 2 + 0.5) + `ms`;
      g = (0, U.jsx)(W, { label: `Ping`, children: e });
    }
    let u = J(i),
      d = J(a),
      f = Math.min(u, d);
    if (
      (f >= 0 &&
        f <= 100 &&
        (_ = (0, U.jsx)(W, {
          label: `Packet delivery`,
          children: `${f.toFixed(2)}%`,
        })),
      s)
    ) {
      let e =
        t.kind == `ded`
          ? `End-to-end statistics reported by gameserver`
          : `End-to-end statistics reported by peer`;
      y = (0, U.jsxs)(`div`, {
        className: P,
        children: [
          (0, U.jsx)($, {
            title: `End-to-end statistics reported by client`,
            flow: i,
          }),
          (0, U.jsx)($, { title: e, flow: a }),
        ],
      });
    }
  }
  if (s) {
    let e = function (e) {
        let t = [...e];
        return (
          t.sort((e, t) => (t.active_time || 0) - (e.active_time || 0)), t
        );
      },
      n = t.client_sessions && t.client_sessions.length > 0,
      r = t.peer_sessions && t.peer_sessions.length > 0;
    if (n) {
      t.kind == `p2p` || r
        ? b.push(
            (0, U.jsx)(`div`, {
              className: N,
              children: `Client relay sessions`,
            }),
          )
        : b.push(
            (0, U.jsx)(`div`, { className: N, children: `Relay sessions` }),
          );
      for (let n of e(t.client_sessions))
        b.push((0, U.jsx)(Ce, { cxn: t, sess: n, host_role: `client` }));
    }
    if (r) {
      b.push(
        (0, U.jsx)(`div`, { className: N, children: `Peer relay sessions` }),
      );
      for (let n of e(t.peer_sessions))
        b.push((0, U.jsx)(Ce, { cxn: t, sess: n, host_role: `peer` }));
    }
  }
  return (0, U.jsxs)(
    `div`,
    {
      className: S,
      children: [
        (0, U.jsxs)(`div`, {
          className: C,
          children: [
            (0, U.jsxs)(`div`, { className: w, children: [f, g, _, m, h, p] }),
            (0, U.jsx)(o, {
              className: M,
              label: `Details`,
              checked: s,
              onChange: l,
            }),
          ],
        }),
        (0, U.jsxs)(`div`, {
          className: E,
          children: [
            (0, U.jsx)(G, { host: t.client, host_role: `client` }),
            (0, U.jsx)(G, { host: t.peer, host_role: `peer` }),
          ],
        }),
        y,
        b,
      ],
    },
    e.key,
  );
}
function Ee(t) {
  let n = p(),
    i = t.appId,
    [o, c] = v.useState(!1),
    [d, m] = v.useState(``),
    [h, S] = v.useState(void 0),
    [C, w] = v.useState(``),
    [T, E] = v.useState(``),
    [D, O] = v.useState(``),
    [k, A] = v.useState(0),
    [j, M] = v.useState(``),
    [N, P] = v.useState(``);
  v.useEffect(() => {
    let e = new URLSearchParams(n.location.search),
      t = e.get(`client_id`) || ``,
      a = e.get(`peer_id`) || ``,
      o = e.get(`kind`) || ``,
      s = e.get(`app_name1`) || ``,
      l = e.get(`app_value1`) || ``;
    if ((w(t), E(a), O(o), M(s), P(l), !e.toString() && k == 0)) return;
    (c(!0), m(``), i > 0 && e.set(`appid`, `` + i));
    let u = r.PARTNER_BASE_URL + `sdr/ajaxsessionsearch?` + e.toString();
    (async () => {
      try {
        let e = await y.default.get(u);
        e?.data?.success == 1
          ? S(e.data.connections)
          : (console.error(
              `sdrsessionsearch: OnPerformSearch error code  ` +
                e?.data?.success +
                ` msg: ` +
                e?.data?.msg,
            ),
            m(e?.data?.success + ` msg: ` + e?.data?.msg));
      } catch (e) {
        let t = g(e);
        (console.error(`sdrsessionsearch: OnPerformSearch ` + t.strErrorMsg, t),
          m(t.strErrorMsg));
      }
      c(!1);
    })();
  }, [i, n.location, k]);
  let F = () => {
      let e = new URLSearchParams();
      (C && e.set(`client_id`, C),
        T && e.set(`peer_id`, T),
        D && e.set(`kind`, D),
        j && N && (e.set(`app_name1`, j), e.set(`app_value1`, N)));
      let t = { ...n.location };
      ((t.search = e.toString()), t != n.location && n.push(t), A(k + 1));
    },
    I = null;
  if (h !== void 0) {
    let e = [];
    for (let t of h) {
      let n = (t.client.id || ``) + `-` + (t.client.connection_id || ``);
      e.push((0, U.jsx)(Te, { cxn: t }, n));
    }
    I = (0, U.jsxs)(`div`, {
      className: ie,
      children: [
        (0, U.jsxs)(`div`, {
          className: ae,
          children: [`Found `, h.length, ` connection(s)`],
        }),
        e,
      ],
    });
  }
  let L = D == `ded` ? `Gameserver` : `Peer`,
    R = v.useId();
  return (0, U.jsx)(a, {
    children: (0, U.jsxs)(`div`, {
      className: b,
      children: [
        (0, U.jsxs)(`div`, {
          className: ee,
          children: [
            (0, U.jsx)(U.Fragment, { children: `SDR Connections - ` }),
            t.appId > 0
              ? (0, U.jsxs)(U.Fragment, { children: [`App `, t.appId] })
              : (0, U.jsx)(U.Fragment, { children: `All apps` }),
            (0, U.jsx)(U.Fragment, { children: ` [BETA feature]` }),
          ],
        }),
        d && (0, U.jsx)(`div`, { className: void 0, children: d }),
        (0, U.jsxs)(`div`, {
          className: te,
          children: [
            (0, U.jsxs)(`div`, {
              className: e(`DialogInputLabelGroup`, ne),
              children: [
                (0, U.jsx)(`div`, {
                  id: R,
                  className: `DialogLabel`,
                  children: `Connection kind`,
                }),
                (0, U.jsxs)(u, {
                  labelId: R,
                  value: D,
                  onChange: (e) => O(e),
                  children: [
                    (0, U.jsx)(l, { value: ``, children: `Any` }),
                    (0, U.jsx)(l, {
                      value: `ded`,
                      children: `Dedicated server`,
                    }),
                    (0, U.jsx)(l, { value: `p2p`, children: `Peer-to-Peer` }),
                  ],
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              className: x,
              children: [
                (0, U.jsx)(s, {
                  type: `text`,
                  value: C,
                  disabled: !1,
                  label: `Client`,
                  onChange: (e) => w(e.currentTarget.value),
                }),
                (0, U.jsx)(s, {
                  type: `text`,
                  value: T,
                  disabled: !1,
                  label: L,
                  onChange: (e) => E(e.currentTarget.value),
                }),
              ],
            }),
            (0, U.jsxs)(`div`, {
              className: x,
              children: [
                (0, U.jsx)(s, {
                  type: `text`,
                  value: j,
                  disabled: !1,
                  label: `App field name 1`,
                  onChange: (e) => M(e.currentTarget.value),
                }),
                (0, U.jsx)(s, {
                  type: `text`,
                  value: N,
                  disabled: !1,
                  label: `App field value 1`,
                  onChange: (e) => P(e.currentTarget.value),
                }),
              ],
            }),
            (0, U.jsx)(`div`, {
              className: re,
              children: (0, U.jsx)(f, {
                onClick: F,
                disabled: o,
                children: `Search `,
              }),
            }),
          ],
        }),
        o && (0, U.jsx)(_, {}),
        I,
      ],
    }),
  });
}
export { Ee as default };

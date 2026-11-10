/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import {
  At as t,
  F as n,
  L as r,
  Lt as i,
  Pt as a,
  ft as o,
  kt as s,
  l as c,
  tt as l,
} from "./libraries.js";
import { t as u } from "./throbber.js";
import { t as d } from "./appinfostore.js";
import { n as f } from "./storeitemhooks.js";
import {
  $x as p,
  Cc as m,
  Hl as h,
  Jn as g,
  Lu as _,
  Ly as ee,
  Nb as v,
  Qn as y,
  Qx as b,
  Rx as te,
  Xx as x,
  Yc as S,
  Zx as C,
  dx as ne,
  eS as w,
  er as re,
  fu as ie,
  gx as T,
  hx as ae,
  ix as E,
  iy as oe,
  ki as se,
  mx as D,
  nS as O,
  ox as k,
  pu as ce,
  px as le,
  rS as A,
  rr as ue,
  sy as de,
  tS as j,
  ub as fe,
  ux as pe,
  vu as me,
  xS as he,
  zx as M,
} from "./main.js";
import "./steammessages_twofactor_pb.js";
import { t as ge } from "./logindialog.js";
var N = e(l()),
  P = class {
    rgModelNames = [];
    constructor() {
      s(this);
    }
    Init(e) {
      d.Init(e);
      let t = `${E.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
      N.default.get(t).then((e) => {
        if (e.data) {
          let t = [];
          for (let n of e.data) n != "default" && t.push(n);
          (t.sort(), (t = [`default`, ...t]), (this.rgModelNames = t));
        }
      });
    }
    async ComputePathBetweenApps(e, t, n, r, i, a, o) {
      let s = Math.acos(n),
        c = await new ve(
          async (e) => {
            let t = await this.GetNeighbors(e),
              n = [];
            for (let e = 0; e < t.length; e++) {
              let a = t[e];
              if ((!r || n.length > r) && (a.cost > s || (i && n.length >= i)))
                break;
              n.push(a);
            }
            return n;
          },
          this.EstimateCosts,
          (e, t) => e == t,
          o,
        ).FindPath(e, t, a || 10);
      if (c.path) {
        let e = [],
          t = 0;
        for (let n = 0; n < c.path.length; n++) {
          let r = c.path[n],
            i = r.cost - t;
          ((t = r.cost), e.push({ appid: r.node, similarity: Math.cos(i) }));
        }
        return e;
      }
      throw Error(`Unable to compute path.`);
    }
    async GetNeighbors(e) {
      let t = `${E.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`,
        n = await N.default.get(t),
        r = [];
      if (n.data && n.data.appid == e)
        for (let e = 0; e < n.data.similar_appids.length; e++)
          r.push({
            node: n.data.similar_appids[e],
            cost: Math.acos(n.data.similarity_scores[e]),
          });
      return r;
    }
    async EstimateCosts(e, t) {
      let n = `${E.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${t}&${e.map((e) => `appid[]=` + e.toString()).join(`&`)}`,
        r = await N.default.get(n);
      if (r.data && r.data.similarity_scores)
        return r.data.similarity_scores.map((e) => Math.acos(parseFloat(e)));
      throw Error(`Unable to fetch cost estimates`);
    }
  };
(v([t], P.prototype, `rgModelNames`, void 0),
  v([M], P.prototype, `GetNeighbors`, null),
  v([M], P.prototype, `EstimateCosts`, null));
var _e = class {
    m_fnCompare;
    m_Heap = [];
    m_Length = 0;
    constructor(e) {
      this.m_fnCompare = e;
    }
    get length() {
      return this.m_Length;
    }
    Clear() {
      ((this.m_Heap = []), (this.m_Length = 0));
    }
    Peek() {
      if (this.m_Length > 0) return this.m_Heap[0];
    }
    Pop() {
      if (this.m_Length != 0) {
        let e = this.m_Heap[0];
        return (
          (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
          this.m_Length--,
          this.BubbleDown(),
          e
        );
      }
    }
    Push(e) {
      (this.m_Heap.length == this.m_Length
        ? this.m_Heap.push(e)
        : (this.m_Heap[this.m_Length] = e),
        this.m_Length++,
        this.BubbleUp());
    }
    FindElement(e) {
      for (let t = 0; t < this.m_Length; t++)
        if (e(this.m_Heap[t])) return { index: t, element: this.m_Heap[t] };
    }
    LowerPriorityOfElement(e, t) {
      ((this.m_Heap[e] = t), this.BubbleUp(e));
    }
    BubbleDown() {
      let e = 0;
      do {
        let t = e * 2 + 1,
          n = e * 2 + 2,
          r = e;
        if (
          (t < this.m_Length &&
            this.m_fnCompare(this.m_Heap[r], this.m_Heap[t]) > 0 &&
            (r = t),
          n < this.m_Length &&
            this.m_fnCompare(this.m_Heap[r], this.m_Heap[n]) > 0 &&
            (r = n),
          r != e)
        ) {
          let t = this.m_Heap[e];
          ((this.m_Heap[e] = this.m_Heap[r]), (this.m_Heap[r] = t), (e = r));
        } else break;
      } while (e < this.m_Length);
    }
    BubbleUp(e) {
      let t = e || this.m_Length - 1;
      for (; t > 0;) {
        let e = (t - 1) >> 1;
        if (this.m_fnCompare(this.m_Heap[e], this.m_Heap[t]) > 0) {
          let n = this.m_Heap[e];
          ((this.m_Heap[e] = this.m_Heap[t]), (this.m_Heap[t] = n), (t = e));
        } else break;
      }
    }
  },
  ve = class {
    m_fnGetNeighbors;
    m_fnEstimateCosts;
    m_fnEquality;
    m_fnIterationCallback;
    constructor(e, t, n, r) {
      ((this.m_fnGetNeighbors = e),
        (this.m_fnEstimateCosts = t),
        (this.m_fnEquality = n),
        (this.m_fnIterationCallback = r));
    }
    async FindPath(e, t, n) {
      let r = new _e((e, t) => e.cost - t.cost),
        i = new Set();
      r.Push({ node: e, cost: 0 });
      let a = new Map(),
        o = new Map(),
        s = new Map(),
        c = (await this.m_fnEstimateCosts([e], t))[0];
      (a.set(e, c), o.set(e, 0));
      let l = 0;
      for (; r.length > 0 && l < n;) {
        let e = r.Pop();
        if (this.m_fnEquality(e.node, t)) {
          let t = [],
            n = e.node;
          for (; s.has(n);) (t.push(n), (n = s.get(n)));
          let r = [];
          for (let e = t.length - 1; e >= 0; e--)
            r.push({ node: t[e], cost: o.get(t[e]) });
          return { path: r };
        }
        i.add(e.node);
        let n = await this.m_fnGetNeighbors(e.node);
        if (n.length > 0) {
          let c = await this.m_fnEstimateCosts(
            n.map((e) => e.node),
            t,
          );
          if (c.length != n.length)
            return (
              console.warn(
                `Failed to fetch expected number of cost estimates. Failing pathfinding.`,
              ),
              {}
            );
          let l = o.get(e.node);
          for (let t = 0; t < n.length; t++) {
            let u = n[t],
              d = l + u.cost;
            if (
              (!o.has(u.node) || d < o.get(u.node)) &&
              (s.set(u.node, e.node),
              o.set(u.node, d),
              a.set(u.node, u.cost + c[t]),
              !i.has(u.node))
            ) {
              let e = u.cost + c[t],
                n = r.FindElement((e) => e.node == u.node);
              n
                ? n.element.cost > e &&
                  r.LowerPriorityOfElement(n.index, { node: u.node, cost: e })
                : r.Push({ node: u.node, cost: e });
            }
          }
        }
        (l++, this.m_fnIterationCallback && this.m_fnIterationCallback());
      }
      throw Error(`No path found.`);
    }
  },
  F = new P();
window.g_LabsSandbox = F;
var I = e(i()),
  ye = `WVhYXTPPa5Q-`,
  be = `x3LMY1wB7Z8-`,
  L = `n0-NbgKnVgg-`,
  xe = `_72I-MQtMZj8-`,
  Se = `MtuwGZaUAng-`,
  R = `CvXL-Wwt9TQ-`,
  z = `rCcaMabbZx4-`,
  B = `ddPMSRBRHGw-`,
  Ce = `_8cUEY8q0nYU-`,
  we = `NgWhKdDUzuY-`,
  Te = `lgXtUsuljdc-`,
  Ee = `_-5Y-zHiqGtQ-`,
  De = `ZUZRryOqfLs-`,
  Oe = `QlNwd-gOVoA-`,
  ke = `LEzgtgE3TQM-`,
  V = `BrotS3tOfxw-`,
  Ae = `AkJ02HXKMhs-`,
  H = `TauA-sfyWB8-`,
  je = `HHHUlYd80sY-`,
  Me = `UiEMtH5V5hM-`,
  U = `_0xUYDLGHKic-`,
  W = `oMov3TXH87I-`,
  Ne = `Q7tllLDG5wk-`,
  Pe = `N27spIgX8-A-`,
  Fe = `fgvlHXQJgVM-`,
  Ie = `z3E2YTZo-D4-`,
  Le = `AVkSlVChUus-`,
  Re = `-tfmW4i7r-U-`,
  ze = `_8NYUdIS8vVE-`,
  Be = `c7rqBghcJoQ-`,
  G = o(),
  K = class extends I.Component {
    state = {
      appid: 0,
      appinfo: null,
      mode: `display`,
      strSearch: ``,
      rgSuggestions: [],
    };
    m_currentRequest = 0;
    constructor(e) {
      (super(e),
        this.props.appidInitial &&
          (d.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(() => {
            (d.GetAppInfo(this.props.appidInitial),
              this.setState({
                appid: this.props.appidInitial,
                appinfo: d.GetAppInfo(this.props.appidInitial),
              }));
          }),
          (this.state.appid = this.props.appidInitial)));
    }
    OnDisplayClicked() {
      this.setState({ mode: `select` });
    }
    async UpdateAppSuggestions(e) {
      let t = e.target.value && e.target.value.trim();
      t?.length
        ? (window.clearTimeout(this.m_currentRequest),
          (this.m_currentRequest = window.setTimeout(async () => {
            let e = {
                cc: E.COUNTRY,
                l: E.LANGUAGE,
                realm: he.k_ESteamRealmGlobal,
                origin: self.origin,
                f: `jsonfull`,
                term: t.replace(` `, `+`),
                require_type: `game`,
                excluded_tags: [],
                excluded_content_descriptors: [],
              },
              n = `${E.STORE_BASE_URL}search/suggest`,
              r = await N.default.get(n, { params: e, withCredentials: !0 }),
              i;
            ((i = r?.data?.length
              ? r.data.map((e) =>
                  (0, G.jsxs)(
                    `div`,
                    {
                      className: Se,
                      onClickCapture: () => this.SetSelectedApp(parseInt(e.id)),
                      children: [
                        (0, G.jsx)(`img`, { src: e.img, className: be }),
                        (0, G.jsx)(`div`, {
                          className: L,
                          children:
                            e.name +
                            (this.props.showAppIds ? ` (${e.id})` : ``),
                        }),
                      ],
                    },
                    `suggestion-${e.id}`,
                  ),
                )
              : []),
              this.setState({ strSearch: t, rgSuggestions: i }));
          }, 250)))
        : this.setState({ strSearch: ``, rgSuggestions: null });
    }
    SetSelectedApp(e) {
      e && e != 0
        ? d.EnsureAppInfoForAppIDs([e]).then(() => {
            (d.GetAppInfo(e),
              this.setState({
                appid: e,
                appinfo: d.GetAppInfo(e),
                mode: `display`,
              }),
              this.props.fnOnSelection && this.props.fnOnSelection(e, this));
          })
        : this.setState({ appid: 0, appinfo: null, mode: `display` });
    }
    OnKeyUp(e) {
      e.keyCode == 27 && this.setState({ mode: `display` });
    }
    render() {
      let e = this.props.classOverride ?? `gekZDtV16Ho-`,
        t = null,
        n = (0, G.jsx)(y, {
          type: `text`,
          onChange: this.UpdateAppSuggestions,
        });
      if (this.state.mode == `display`) {
        let e = this.state.appinfo
          ? this.state.appinfo.name +
            (this.props.showAppIds ? ` (${this.state.appid})` : ``)
          : (this.props.strPrompt ?? `Select game`);
        t = (0, G.jsx)(`div`, {
          className: ye,
          children: (0, G.jsx)(`div`, { className: L, children: e }),
        });
      } else if (this.state.mode == `select`) {
        let e = this.state.strSearch.length > 0;
        t = (0, G.jsxs)(`div`, {
          className: xe,
          children: [
            n,
            e &&
              (0, G.jsx)(`div`, {
                className: `u6Os1UrBFLs-`,
                children: this.state.rgSuggestions,
              }),
          ],
        });
      }
      return (0, G.jsx)(`div`, {
        className: e,
        onClick: this.OnDisplayClicked,
        onKeyUpCapture: this.OnKeyUp,
        children: t,
      });
    }
  };
(v([M], K.prototype, `OnDisplayClicked`, null),
  v([M], K.prototype, `UpdateAppSuggestions`, null),
  v([M], K.prototype, `OnKeyUp`, null));
var q = class extends I.Component {
    render() {
      if (this.props.appid == 0) return (0, G.jsx)(`div`, { className: R });
      {
        let e = d.GetAppInfo(this.props.appid);
        if (!e || !e.is_valid) return (0, G.jsx)(`div`, { className: R });
        let t = [];
        if (this.props.score) {
          t.push((0, G.jsx)(`div`, { className: z }, `score-spacer`));
          let e = Math.round(this.props.score * 100).toString() + `%`;
          t.push(
            (0, G.jsx)(`div`, { className: B, children: e }, `score-value`),
          );
        }
        let n = e.name + ` (` + this.props.appid.toString() + `)`,
          r = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
        return (0, G.jsxs)(`div`, {
          className: R,
          onClick: () => r(this.props.appid),
          children: [(0, G.jsx)(`div`, { className: L, children: n }), t],
        });
      }
    }
  },
  J = class extends I.Component {
    state = {};
    ref_app_a = I.createRef();
    ref_app_b = I.createRef();
    componentDidMount() {
      this.OnAppSelected();
    }
    OnAppSelected() {
      if (
        this.ref_app_a.current &&
        this.ref_app_b.current &&
        this.ref_app_a.current.state.appid &&
        this.ref_app_b.current.state.appid
      ) {
        let e = this.ref_app_a.current.state.appid,
          t = this.ref_app_b.current.state.appid,
          n = `${E.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
        N.default.get(n).then((e) => {
          e.data && e.data.similarity_scores
            ? this.setState({ score: e.data.similarity_scores[0] })
            : this.setState({ score: null });
        });
      }
    }
    render() {
      let e = this.state.score ? (this.state.score * 100).toFixed(1) + `%` : ``;
      return (0, G.jsxs)(`div`, {
        className: Ae,
        children: [
          (0, G.jsx)(
            K,
            {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
            },
            `similar_app_a`,
          ),
          (0, G.jsx)(`div`, { className: H }),
          (0, G.jsx)(`div`, { className: B, children: e }),
          (0, G.jsx)(`div`, { className: H }),
          (0, G.jsx)(
            K,
            {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
            },
            `similar_app_b`,
          ),
        ],
      });
    }
  };
v([M], J.prototype, `OnAppSelected`, null);
var Y = class extends I.Component {
  selected_app = 0;
  similar_apps = [];
  similarity_scores = [];
  similarity_model = `default`;
  app_selector_ref = I.createRef();
  constructor(e) {
    (super(e), s(this), e.default_app && this.SetSelectedApp(e.default_app));
  }
  componentDidMount() {
    this.app_selector_ref.current &&
      this.SetSelectedApp(this.app_selector_ref.current.state.appid);
  }
  OnSelectedApp(e) {
    e && this.SetSelectedApp(e);
  }
  SetSelectedApp(e, t) {
    if (t || e != this.selected_app) {
      ((this.similar_apps = []),
        (this.selected_app = e),
        this.app_selector_ref.current &&
          this.app_selector_ref.current.SetSelectedApp(e));
      let t = `${E.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
      N.default.get(t).then((e) => {
        if (e.data && e.data.appid == this.selected_app) {
          let t = new Set(
            e.data.similar_appids.slice(0, this.props.max_similar),
          );
          (t.add(e.data.appid),
            d.EnsureAppInfoForAppIDs(t).then(() => {
              ((this.similar_apps = e.data.similar_appids),
                (this.similarity_scores = e.data.similarity_scores));
            }));
        }
      });
    }
  }
  OnModelChanged(e, t) {
    ((this.similarity_model = e.data),
      this.SetSelectedApp(this.selected_app, !0));
  }
  render() {
    let e = [],
      t,
      n = Math.min(
        this.similar_apps.length,
        this.similarity_scores.length,
        this.props.max_similar,
      );
    for (t = 0; t < n; t++) {
      let n = this.similar_apps[t],
        r = this.similarity_scores[t];
      e.push(
        (0, G.jsx)(
          q,
          { appid: n, score: r, fnOnSelected: this.SetSelectedApp },
          n,
        ),
      );
    }
    let r = [];
    for (let e of F.rgModelNames) {
      let t = { label: (0, G.jsx)(`div`, { children: e }, e), data: e };
      r.push(t);
    }
    return (0, G.jsxs)(`div`, {
      className: ke,
      children: [
        (0, G.jsx)(g, {
          rgOptions: r,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, G.jsx)(`h1`, { children: `Games similar to:` }),
        (0, G.jsx)(K, {
          fnOnSelection: this.OnSelectedApp,
          ref: this.app_selector_ref,
          appidInitial: 268500,
          showAppIds: !0,
        }),
        (0, G.jsx)(`div`, { className: V, children: e }),
      ],
    });
  }
};
(v([t], Y.prototype, `selected_app`, void 0),
  v([t], Y.prototype, `similar_apps`, void 0),
  v([t], Y.prototype, `similarity_scores`, void 0),
  v([t], Y.prototype, `similarity_model`, void 0),
  v([M], Y.prototype, `OnSelectedApp`, null),
  v([M], Y.prototype, `SetSelectedApp`, null),
  v([M], Y.prototype, `OnModelChanged`, null),
  (Y = v([c], Y)));
var X = class extends I.Component {
  selected_app = void 0;
  selected_operator = void 0;
  constructor(e) {
    (super(e),
      s(this),
      (this.selected_app = e.app),
      (this.selected_operator = e.operator));
  }
  OnSelectedApp(e) {
    e &&
      e != this.selected_app &&
      ((this.selected_app = e),
      this.props.fnOnChange && this.props.fnOnChange());
  }
  OnSelectedOperator(e, t) {
    ((this.selected_operator = e.data),
      this.props.fnOnChange && this.props.fnOnChange());
  }
  render() {
    let e = [
      { label: (0, G.jsx)(`div`, { children: `Plus` }, `Plus`), data: `Plus` },
      {
        label: (0, G.jsx)(`div`, { children: `Minus` }, `Minus`),
        data: `Minus`,
      },
    ];
    return (0, G.jsxs)(`div`, {
      className: Fe,
      children: [
        (0, G.jsx)(`div`, {
          className: Ie,
          children: (0, G.jsx)(g, {
            rgOptions: e,
            onChange: this.OnSelectedOperator,
            selectedOption: `Plus`,
          }),
        }),
        (0, G.jsx)(K, { fnOnSelection: this.OnSelectedApp }),
      ],
    });
  }
};
(v([t], X.prototype, `selected_app`, void 0),
  v([t], X.prototype, `selected_operator`, void 0),
  v([M], X.prototype, `OnSelectedApp`, null),
  v([M], X.prototype, `OnSelectedOperator`, null),
  (X = v([c], X)));
var Z = class extends I.Component {
  operands = [];
  similarity_model = `default`;
  similar_apps = [];
  similarity_scores = [];
  operand_refs;
  constructor(e) {
    (super(e), s(this), (this.operand_refs = []));
    for (let t = 0; t < e.max_operands; t++)
      this.operand_refs.push(I.createRef());
  }
  OnModelChanged(e, t) {
    ((this.similarity_model = e.data), this.RecomputeExpression());
  }
  OnAddOperand() {
    this.operands.length < this.props.max_operands &&
      this.operands.push({
        app: 0,
        operator: this.operands.length > 0 ? `Plus` : void 0,
      });
  }
  OnOperandChanged() {
    for (let e = 0; e < this.operands.length; e++) {
      let t = this.operand_refs[e].current;
      ((this.operands[e].app = t.selected_app),
        (this.operands[e].operator = t.selected_operator));
    }
    this.RecomputeExpression();
  }
  RecomputeExpression() {
    if (this.operands.length == 0) return;
    let e = this.operands.map((e) => `appid[]=` + e.app.toString()),
      t = `${E.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(`&`)}&model=${this.similarity_model}`;
    N.default.get(t).then((e) => {
      if (
        ((this.similar_apps = []),
        (this.similarity_scores = []),
        e.data && e.data.length == this.operands.length)
      ) {
        let t = e.data[0].components.map((e) => parseFloat(e));
        for (let n = 1; n < this.operands.length; n++) {
          let r = e.data[n].components.map((e) => parseFloat(e));
          this.operands[n].operator == `Plus`
            ? (t = t.map((e, t) => e + r[t]))
            : this.operands[n].operator == `Minus`
              ? (t = t.map((e, t) => e - r[t]))
              : console.log(`Unexpected operator ` + this.operands[n].operator);
        }
        let n = t.map((e) => e * e).reduce((e, t) => e + t, 0),
          r = Math.sqrt(n);
        if (r > 1e-4) {
          let e = t
              .map((e) => e / r)
              .map((e) => `x[]=` + e)
              .join(`&`),
            n = `${E.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
          N.default.get(n).then((e) => {
            let t = new Set(
              e.data.similar_appids.slice(0, this.props.max_similar),
            );
            d.EnsureAppInfoForAppIDs(t).then(() => {
              ((this.similar_apps = e.data.similar_appids),
                (this.similarity_scores = e.data.similarity_scores));
            });
          });
        }
      }
    });
  }
  render() {
    let e = [];
    for (let t of F.rgModelNames) {
      let n = { label: (0, G.jsx)(`div`, { children: t }, t), data: t };
      e.push(n);
    }
    let t = [],
      n = 0;
    for (let e of this.operands)
      (t.push(
        (0, G.jsx)(
          X,
          {
            app: e.app,
            operator: e.operator,
            fnOnChange: this.OnOperandChanged,
            ref: this.operand_refs[n],
          },
          n,
        ),
      ),
        n++);
    let r = null;
    this.operands.length < this.props.max_operands &&
      (r = (0, G.jsx)(`div`, {
        className: Le,
        onClick: this.OnAddOperand,
        children: `+`,
      }));
    let i = [],
      a = Math.min(
        this.similar_apps.length,
        this.similarity_scores.length,
        this.props.max_similar,
      );
    for (let e = 0; e < a; e++) {
      let t = this.similar_apps[e],
        n = this.similarity_scores[e];
      i.push((0, G.jsx)(q, { appid: t, score: n }, t));
    }
    return (0, G.jsxs)(`div`, {
      className: Pe,
      children: [
        (0, G.jsx)(g, {
          rgOptions: e,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, G.jsx)(`h1`, { children: `Mixture` }),
        t,
        r,
        (0, G.jsx)(`h1`, { children: `Games similar to mixture` }),
        (0, G.jsx)(`div`, { className: V, children: i }),
      ],
    });
  }
};
(v([t], Z.prototype, `operands`, void 0),
  v([t], Z.prototype, `similarity_model`, void 0),
  v([t], Z.prototype, `similar_apps`, void 0),
  v([t], Z.prototype, `similarity_scores`, void 0),
  v([M], Z.prototype, `OnModelChanged`, null),
  v([M], Z.prototype, `OnAddOperand`, null),
  v([M], Z.prototype, `OnOperandChanged`, null),
  (Z = v([c], Z)));
var Q = class extends I.Component {
  constructor(e) {
    (super(e), s(this));
  }
  app_start = 0;
  app_end = 0;
  in_progress = !1;
  progress_iteration = 0;
  found_path = void 0;
  IterationCallback() {
    this.progress_iteration++;
  }
  Pathfind() {
    this.in_progress ||
      ((this.in_progress = !0),
      (this.progress_iteration = 0),
      (this.found_path = void 0),
      F.ComputePathBetweenApps(
        this.app_start,
        this.app_end,
        0.75,
        3,
        10,
        200,
        this.IterationCallback,
      )
        .then((e) => {
          ((this.in_progress = !1),
            d.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(() => {
              this.found_path = e;
            }));
        })
        .catch((e) => {
          (console.warn(`Caught pathfinding failure because: ` + e.toString()),
            (this.in_progress = !1),
            (this.found_path = void 0));
        }));
  }
  OnSelectedStartApp(e) {
    d.EnsureAppInfoForAppIDs([e]).then(() => {
      this.app_start = e;
    });
  }
  OnSelectedEndApp(e) {
    d.EnsureAppInfoForAppIDs([e]).then(() => {
      this.app_end = e;
    });
  }
  render() {
    let e =
        this.app_start != 0 &&
        this.app_end != 0 &&
        !this.in_progress &&
        this.app_start != this.app_end,
      t = e ? U : m(U, void 0),
      n = null;
    n = this.in_progress
      ? (0, G.jsx)(`div`, {
          className: W,
          children: `Finding path, step ` + this.progress_iteration,
        })
      : this.found_path
        ? (0, G.jsx)(`div`, { className: W, children: `Found path` })
        : (0, G.jsx)(`div`, { className: W, children: `No path found` });
    let r = [];
    if (this.found_path)
      for (let e = 0; e < this.found_path.length; e++) {
        let t = this.found_path[e];
        r.push(
          (0, G.jsx)(
            q,
            { appid: t.appid, score: t.similarity },
            `pathstep` + e,
          ),
        );
      }
    return (0, G.jsxs)(`div`, {
      className: je,
      children: [
        (0, G.jsxs)(`div`, {
          className: Me,
          children: [
            (0, G.jsx)(K, {
              fnOnSelection: this.OnSelectedStartApp,
              strPrompt: `Select start game`,
            }),
            (0, G.jsx)(K, {
              fnOnSelection: this.OnSelectedEndApp,
              strPrompt: `Select end game`,
            }),
          ],
        }),
        (0, G.jsx)(`div`, {
          className: t,
          onClick: e ? this.Pathfind : () => {},
          children: `Pathfind!`,
        }),
        n,
        (0, G.jsx)(`div`, { className: Ne, children: r }),
      ],
    });
  }
};
(v([t], Q.prototype, `app_start`, void 0),
  v([t], Q.prototype, `app_end`, void 0),
  v([t], Q.prototype, `in_progress`, void 0),
  v([t], Q.prototype, `progress_iteration`, void 0),
  v([t], Q.prototype, `found_path`, void 0),
  v([M], Q.prototype, `IterationCallback`, null),
  v([M], Q.prototype, `Pathfind`, null),
  v([M], Q.prototype, `OnSelectedStartApp`, null),
  v([M], Q.prototype, `OnSelectedEndApp`, null),
  (Q = v([c], Q)));
function Ve() {
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`h1`, { children: `Similar Games` }),
      (0, G.jsx)(Y, { max_similar: 10 }),
      (0, G.jsx)(`div`, { className: z }),
      (0, G.jsx)(`h1`, { children: `Similarity` }),
      (0, G.jsx)(J, {}),
      (0, G.jsx)(`div`, { className: z }),
      (0, G.jsx)(`h1`, { children: `Mixer` }),
      (0, G.jsx)(Z, { max_similar: 10, max_operands: 6 }),
      (0, G.jsx)(`div`, { className: z }),
      (0, G.jsx)(`h1`, { children: `Pathfinder` }),
      (0, G.jsx)(Q, {}),
    ],
  });
}
var $ = e(a(), 1),
  He = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_score_factor || x(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_score_factor: {
              n: 1,
              d: 1,
              br: p.readDouble,
              bw: A.writeDouble,
            },
            playtime_max_seconds: {
              n: 10,
              d: 36e4,
              br: p.readInt32,
              bw: A.writeInt32,
            },
            playtime_max_games: {
              n: 11,
              d: 3,
              br: p.readInt32,
              bw: A.writeInt32,
            },
            playtime_score_factor: {
              n: 12,
              d: 0.9,
              br: p.readDouble,
              bw: A.writeDouble,
            },
            popularity_factor: { n: 20, d: 5, br: p.readEnum, bw: A.writeEnum },
            popularity_reciprocal: {
              n: 21,
              d: 1e4,
              br: p.readInt32,
              bw: A.writeInt32,
            },
            popularity_base_score: {
              n: 22,
              d: `5000000`,
              br: p.readInt64String,
              bw: A.writeInt64String,
            },
            played_since: { n: 23, br: p.readUint32, bw: A.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `StoreAppSimilarityPriorityOptions`;
    }
  },
  Ue = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || x(e.M()),
        $.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: A.writeFixed64String,
            },
            country_code: { n: 2, br: p.readString, bw: A.writeString },
            ids: { n: 3, c: D, r: !0, q: !0 },
            options: { n: 4, c: He },
            debug: { n: 5, br: p.readBool, bw: A.writeBool },
            include_owned_games: { n: 6, br: p.readBool, bw: A.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Request`;
    }
  },
  We = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.items || x(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { items: { n: 1, c: Ge, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response`;
    }
  },
  Ge = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || x(e.M()),
        $.Message.initialize(this, t, 0, -1, [50], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: D },
            already_owned: { n: 2, br: p.readBool, bw: A.writeBool },
            weight: { n: 3, br: p.readDouble, bw: A.writeDouble },
            weight_before_dedupe: { n: 4, br: p.readDouble, bw: A.writeDouble },
            debug_matches: { n: 50, c: Ke, r: !0, q: !0 },
            debug_popularity: { n: 51, c: qe },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem`;
    }
  },
  Ke = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.source_app || x(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            source_app: { n: 1, br: p.readInt32, bw: A.writeInt32 },
            weight: { n: 2, br: p.readDouble, bw: A.writeDouble },
            similarity: { n: 3, br: p.readDouble, bw: A.writeDouble },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo`;
    }
  },
  qe = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rank || x(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rank: { n: 1, br: p.readUint32, bw: A.writeUint32 },
            popularity_factor: { n: 2, br: p.readDouble, bw: A.writeDouble },
            weight_before_popularity: {
              n: 3,
              br: p.readDouble,
              bw: A.writeDouble,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo`;
    }
  },
  Je = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || x(e.M()),
        $.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: A.writeFixed64String,
            },
            sort: { n: 2, d: 1, br: p.readEnum, bw: A.writeEnum },
            clusters_to_return: { n: 3, br: p.readInt32, bw: A.writeInt32 },
            cluster_index: { n: 4, br: p.readInt32, bw: A.writeInt32 },
            context: { n: 10, c: pe },
            data_request: { n: 11, c: ne },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request`;
    }
  },
  Ye = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusters || x(e.M()),
        $.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { clusters: { n: 1, c: Xe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response`;
    }
  },
  Xe = class e extends $.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cluster_id || x(e.M()),
        $.Message.initialize(this, t, 0, -1, [5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cluster_id: { n: 1, br: p.readInt32, bw: A.writeInt32 },
            playtime_forever: { n: 2, br: p.readInt32, bw: A.writeInt32 },
            playtime_2weeks: { n: 3, br: p.readInt32, bw: A.writeInt32 },
            last_played: { n: 4, br: p.readUint32, bw: A.writeUint32 },
            played_appids: {
              n: 5,
              r: !0,
              q: !0,
              br: p.readInt32,
              pbr: p.readPackedInt32,
              bw: A.writeRepeatedInt32,
            },
            similar_items_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: p.readInt32,
              pbr: p.readPackedInt32,
              bw: A.writeRepeatedInt32,
            },
            similar_items: { n: 7, c: le, r: !0, q: !0 },
            similar_item_popularity_score: {
              n: 8,
              br: p.readDouble,
              bw: A.writeDouble,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= w(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return O(e.M(), t, n);
    }
    static fromObject(t) {
      return b(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new $.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      j(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new $.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster`;
    }
  },
  Ze;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `StoreAppSimilarity.PrioritizeAppsForUser#1`,
      T(Ue, t, n),
      We,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
    );
  }
  e.PrioritizeAppsForUser = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreAppSimilarity.IdentifyClustersFromPlaytime#1`,
      T(Je, t, n),
      Ye,
      { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
    );
  }
  e.IdentifyClustersFromPlaytime = n;
})((Ze ||= {}));
var Qe = class {
    m_SteamInterface;
    constructor(e) {
      this.m_SteamInterface = e;
    }
    LoadPlaytimeClusters(e, t, n, r) {
      return new $e(this.m_SteamInterface, e, t, n, r);
    }
  },
  $e = class {
    m_callbacksLoaded = new te();
    m_rgClusters;
    constructor(e, t, n, r, i) {
      let a = ae.Init(Je);
      (ie(a),
        i && ce(a, i),
        a.Body().set_steamid(t || k.steamid),
        r && a.Body().set_clusters_to_return(r),
        a.Body().set_sort(n),
        Ze.IdentifyClustersFromPlaytime(e.GetServiceTransport(), a).then(
          (e) => {
            let t = e.Body();
            this.m_rgClusters = [];
            for (let e of t.clusters())
              this.m_rgClusters.push(this.ReadCluster(e, i));
            this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
          },
        ));
    }
    ReadCluster(e, t) {
      let n;
      return (
        t && (n = e.similar_items().map((e) => h.Get().ReadItem(e, t))),
        {
          nClusterID: e.cluster_id(),
          nPlaytimeMinutes: e.playtime_forever(),
          nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
          rtLastPlayed: e.last_played(),
          rgAppIDsPlayed: e.played_appids(),
          rgSimilarItems: n.filter((e) => !!e),
          rgSimilarAppIDs: e.similar_items_appids(),
          flPopularityScore: e.similar_item_popularity_score(),
        }
      );
    }
    RegisterOnReadyCallback(e) {
      let t = this.m_callbacksLoaded.Register(e);
      return (
        this.m_rgClusters !== void 0 &&
          window.setTimeout(() => e(this.m_rgClusters), 0),
        t
      );
    }
  };
function et(e, t, n, r = 1, i = null, a = []) {
  let [o, s] = I.useState(null);
  return (
    I.useEffect(() => {
      if ((s(null), n))
        return e.LoadPlaytimeClusters(n, r, i, t).RegisterOnReadyCallback(s)
          .Unregister;
    }, [n, r, i, ...a]),
    o
  );
}
var tt = `U1eVOPgq7Qs-`,
  nt = `YHINLcprg3Q-`,
  rt = `xaJolC--bO0-`,
  it = `HexrG-5SAEA-`,
  at = `sxMHArvxX2E-`;
function ot(e) {
  let { SteamInterface: t } = e,
    n = I.useRef(void 0);
  return (
    (n.current ||= new Qe(t)),
    (0, G.jsxs)(G.Fragment, {
      children: [
        (0, G.jsxs)(`div`, {
          children: [
            (0, G.jsx)(`p`, {
              children: `This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.`,
            }),
            (0, G.jsxs)(`p`, {
              children: [
                `You can also `,
                (0, G.jsx)(`a`, {
                  href: `http://store-tc.k.steam.net/graph`,
                  target: `_blank`,
                  children: `browse the cluster data graphically`,
                }),
                ` (requires Rack VPN).`,
              ],
            }),
          ],
        }),
        (0, G.jsx)(ct, { SimilarityStore: n.current }),
      ],
    })
  );
}
var st = {
  3: `Total Playtime`,
  2: `Number of Played Games`,
  1: `Most Recently Played`,
};
function ct(e) {
  let { SimilarityStore: t } = e,
    [n, r] = I.useState(k.steamid),
    [i, a] = I.useState(`10`),
    [o, s] = I.useState(1),
    c = I.useCallback((e) => r(e.currentTarget.value), [r]),
    l = I.useCallback((e) => a(e.currentTarget.value), [a]),
    d = I.useCallback((e) => s(e.data), [s]),
    f = !1,
    p = I.useRef(k.steamid),
    m = n && new ee(n);
  m &&
    m.BIsValid() &&
    m.BIsIndividualAccount() &&
    ((p.current = m.ConvertTo64BitString()), (f = !0));
  let h;
  i && !isNaN(parseInt(i)) && (h = parseInt(i));
  let _ = I.useMemo(() => {
      let e = [];
      for (let t in st) e.push({ data: Number(t), label: st[t] });
      return e;
    }, []),
    v = et(t, { include_assets: !0, include_basic_info: !0 }, p.current, o, h);
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsxs)(re, {
        className: tt,
        children: [
          (0, G.jsx)(y, {
            label: `SteamID`,
            type: `text`,
            value: n,
            onChange: c,
            description: !f && `Invalid SteamID`,
          }),
          (0, G.jsx)(y, {
            label: `Clusters to return (Set to blank for all clusters)`,
            type: `text`,
            value: i,
            onChange: l,
          }),
          (0, G.jsx)(g, {
            label: `Sort clusters by`,
            rgOptions: _,
            selectedOption: o,
            onChange: d,
          }),
        ],
      }),
      f && !v && (0, G.jsx)(u, {}),
      v && (0, G.jsx)(lt, { rgPlaytimeClusters: v }),
    ],
  });
}
function lt(e) {
  let { rgPlaytimeClusters: t } = e;
  return (0, G.jsx)(`div`, {
    children: t.map((e) =>
      (0, G.jsx)(S, { children: (0, G.jsx)(ut, { cluster: e }) }, e.nClusterID),
    ),
  });
}
function ut(e) {
  let { cluster: t } = e,
    [n, r] = I.useState(!1),
    i = I.useCallback(() => r(!0), [r]),
    [a, o] = I.useState(!1),
    s = I.useCallback(() => o(!0), [o]),
    c = se({ onEnter: s });
  return (0, G.jsxs)(`div`, {
    ref: c,
    className: nt,
    children: [
      (0, G.jsxs)(`div`, {
        className: rt,
        children: [
          (0, G.jsxs)(`h1`, { children: [`Cluster `, t.nClusterID] }),
          (0, G.jsx)(S, {
            children: (0, G.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, G.jsxs)(`div`, {
                  children: [
                    (0, G.jsx)(`b`, { children: `Total Playtime:` }),
                    ` `,
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    `hr`,
                  ],
                }),
                (0, G.jsxs)(`div`, {
                  children: [
                    (0, G.jsx)(`b`, { children: `Last Played:` }),
                    ` `,
                    fe(t.rtLastPlayed),
                    ` `,
                  ],
                }),
                (0, G.jsxs)(`div`, {
                  children: [
                    (0, G.jsx)(`b`, { children: `Games played:` }),
                    ` `,
                    a &&
                      t.rgAppIDsPlayed.map((e) =>
                        (0, G.jsxs)(
                          I.Fragment,
                          { children: [(0, G.jsx)(ft, { appid: e }), `, `] },
                          e,
                        ),
                      ),
                  ],
                }),
                (0, G.jsxs)(`div`, {
                  children: [
                    (0, G.jsx)(`b`, { children: `Popularity Score:` }),
                    ` `,
                    Math.floor(t.flPopularityScore * 100),
                    `% \xA0`,
                    (0, G.jsx)(`span`, {
                      title: `Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%`,
                      style: { cursor: `default` },
                      children: `(?)`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      (0, G.jsxs)(`div`, {
        className: it,
        children: [
          (0, G.jsx)(`h3`, { children: `Similar titles:` }),
          (0, G.jsx)(S, {
            children: (0, G.jsx)(`ul`, {
              children: t.rgSimilarItems.map((e, t) =>
                n || t < 4
                  ? (0, G.jsx)(
                      `li`,
                      { children: (0, G.jsx)(pt, { item: e }) },
                      e.GetUniqueID(),
                    )
                  : null,
              ),
            }),
          }),
          !n &&
            (0, G.jsxs)(ue, {
              onClick: i,
              children: [`Show all `, t.rgSimilarItems.length],
            }),
        ],
      }),
    ],
  });
}
var dt = {};
function ft(e) {
  let { appid: t } = e,
    [n] = f(t, dt);
  return n
    ? (0, G.jsx)(`a`, {
        className: void 0,
        href: n.GetStorePageURL(),
        children: n.GetName(),
      })
    : null;
}
function pt(e) {
  let { item: t } = e;
  return (0, G.jsxs)(`a`, {
    className: at,
    href: t.GetStorePageURL(),
    children: [
      (0, G.jsx)(`img`, {
        src: t.GetAssets().GetSmallCapsuleURL(),
        loading: `lazy`,
      }),
      t.GetName(),
    ],
  });
}
var mt = [
  {
    path: `similarity`,
    render: () => (0, G.jsx)(Ve, {}),
    name: `ML Similarity`,
  },
  {
    path: `clustering`,
    render: (e) => (0, G.jsx)(ot, { SteamInterface: e.SteamInterface }),
    name: `Tag Clustering`,
    requires_login: !0,
  },
];
function ht(e) {
  let [t, i] = I.useState(!1),
    a = k.logged_in,
    o = de();
  if (
    ((0, I.useEffect)(() => {
      (F.Init(o), i(!0));
    }, [o]),
    !t)
  )
    return (0, G.jsx)(`div`, { className: Ce });
  let s = { SteamInterface: o };
  return (0, G.jsx)(`div`, {
    className: Ce,
    children: (0, G.jsxs)(`div`, {
      className: we,
      children: [
        (0, G.jsxs)(`div`, {
          className: Te,
          children: [
            (0, G.jsx)(`div`, { className: Ee, children: `Labs Sandbox` }),
            (0, G.jsx)(`div`, {
              className: De,
              children: `Internal testbed page for Steam Labs experiments`,
            }),
          ],
        }),
        (0, G.jsx)(`div`, {
          className: Re,
          children: mt.map((e) =>
            (0, G.jsx)(
              me,
              {
                to: `${_.LabsSandbox()}/${e.path}`,
                className: ze,
                activeClassName: Be,
                children: e.name,
              },
              e.path,
            ),
          ),
        }),
        (0, G.jsx)(`div`, {
          className: Oe,
          children: (0, G.jsx)(S, {
            children: (0, G.jsx)(r, {
              children: mt.map((e, t) =>
                (0, G.jsx)(
                  n,
                  {
                    path: `${_.LabsSandbox()}/${e.path}`,
                    render: (t) =>
                      !e.requires_login || a
                        ? e.render({ ...t, ...s })
                        : (0, G.jsx)(gt, {}),
                  },
                  e.path,
                ),
              ),
            }),
          }),
        }),
      ],
    }),
  });
}
function gt() {
  let e = oe();
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)(`h3`, { children: `Please login to view this page.` }),
      (0, G.jsx)(ge, {
        transport: e,
        platform: 2,
        onComplete: () => window.location.reload(),
      }),
    ],
  });
}
export { ht as default };

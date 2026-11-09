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
  $n as ee,
  $x as p,
  Iu as m,
  Iy as te,
  Jc as h,
  Lx as ne,
  Mb as g,
  Oi as re,
  Qx as _,
  Rx as v,
  Sc as ie,
  Vl as ae,
  Xx as y,
  Yx as b,
  Zn as x,
  Zx as S,
  _u as oe,
  ax as C,
  bS as se,
  du as ce,
  eS as w,
  fu as le,
  fx as ue,
  hx as T,
  lb as de,
  lx as fe,
  mx as pe,
  nS as E,
  nr as me,
  oy as he,
  px as D,
  qn as O,
  rx as k,
  ry as ge,
  tS as A,
  ux as _e,
} from "./main.js";
import "./steammessages_twofactor_pb.js";
import { t as ve } from "./logindialog.js";
var j = e(l()),
  M = class {
    rgModelNames = [];
    constructor() {
      s(this);
    }
    Init(e) {
      d.Init(e);
      let t = `${k.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
      j.default.get(t).then((e) => {
        if (e.data) {
          let t = [];
          for (let n of e.data) n != "default" && t.push(n);
          t.sort(), (t = [`default`, ...t]), (this.rgModelNames = t);
        }
      });
    }
    async ComputePathBetweenApps(e, t, n, r, i, a, o) {
      let s = Math.acos(n),
        c = await new be(
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
          (t = r.cost), e.push({ appid: r.node, similarity: Math.cos(i) });
        }
        return e;
      }
      throw Error(`Unable to compute path.`);
    }
    async GetNeighbors(e) {
      let t = `${k.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`,
        n = await j.default.get(t),
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
      let n = `${k.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${t}&${e.map((e) => `appid[]=` + e.toString()).join(`&`)}`,
        r = await j.default.get(n);
      if (r.data && r.data.similarity_scores)
        return r.data.similarity_scores.map((e) => Math.acos(parseFloat(e)));
      throw Error(`Unable to fetch cost estimates`);
    }
  };
g([t], M.prototype, `rgModelNames`, void 0),
  g([v], M.prototype, `GetNeighbors`, null),
  g([v], M.prototype, `EstimateCosts`, null);
var ye = class {
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
      (this.m_Heap = []), (this.m_Length = 0);
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
      this.m_Heap.length == this.m_Length
        ? this.m_Heap.push(e)
        : (this.m_Heap[this.m_Length] = e),
        this.m_Length++,
        this.BubbleUp();
    }
    FindElement(e) {
      for (let t = 0; t < this.m_Length; t++)
        if (e(this.m_Heap[t])) return { index: t, element: this.m_Heap[t] };
    }
    LowerPriorityOfElement(e, t) {
      (this.m_Heap[e] = t), this.BubbleUp(e);
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
          (this.m_Heap[e] = this.m_Heap[r]), (this.m_Heap[r] = t), (e = r);
        } else break;
      } while (e < this.m_Length);
    }
    BubbleUp(e) {
      let t = e || this.m_Length - 1;
      for (; t > 0; ) {
        let e = (t - 1) >> 1;
        if (this.m_fnCompare(this.m_Heap[e], this.m_Heap[t]) > 0) {
          let n = this.m_Heap[e];
          (this.m_Heap[e] = this.m_Heap[t]), (this.m_Heap[t] = n), (t = e);
        } else break;
      }
    }
  },
  be = class {
    m_fnGetNeighbors;
    m_fnEstimateCosts;
    m_fnEquality;
    m_fnIterationCallback;
    constructor(e, t, n, r) {
      (this.m_fnGetNeighbors = e),
        (this.m_fnEstimateCosts = t),
        (this.m_fnEquality = n),
        (this.m_fnIterationCallback = r);
    }
    async FindPath(e, t, n) {
      let r = new ye((e, t) => e.cost - t.cost),
        i = new Set();
      r.Push({ node: e, cost: 0 });
      let a = new Map(),
        o = new Map(),
        s = new Map(),
        c = (await this.m_fnEstimateCosts([e], t))[0];
      a.set(e, c), o.set(e, 0);
      let l = 0;
      for (; r.length > 0 && l < n; ) {
        let e = r.Pop();
        if (this.m_fnEquality(e.node, t)) {
          let t = [],
            n = e.node;
          for (; s.has(n); ) t.push(n), (n = s.get(n));
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
        l++, this.m_fnIterationCallback && this.m_fnIterationCallback();
      }
      throw Error(`No path found.`);
    }
  },
  N = new M();
window.g_LabsSandbox = N;
var P = e(i()),
  xe = `WVhYXTPPa5Q-`,
  Se = `x3LMY1wB7Z8-`,
  F = `n0-NbgKnVgg-`,
  Ce = `_72I-MQtMZj8-`,
  we = `MtuwGZaUAng-`,
  I = `CvXL-Wwt9TQ-`,
  L = `rCcaMabbZx4-`,
  R = `ddPMSRBRHGw-`,
  z = `_8cUEY8q0nYU-`,
  Te = `NgWhKdDUzuY-`,
  Ee = `lgXtUsuljdc-`,
  De = `_-5Y-zHiqGtQ-`,
  Oe = `ZUZRryOqfLs-`,
  ke = `QlNwd-gOVoA-`,
  Ae = `LEzgtgE3TQM-`,
  B = `BrotS3tOfxw-`,
  je = `AkJ02HXKMhs-`,
  V = `TauA-sfyWB8-`,
  Me = `HHHUlYd80sY-`,
  Ne = `UiEMtH5V5hM-`,
  H = `_0xUYDLGHKic-`,
  U = `oMov3TXH87I-`,
  Pe = `Q7tllLDG5wk-`,
  Fe = `N27spIgX8-A-`,
  Ie = `fgvlHXQJgVM-`,
  Le = `z3E2YTZo-D4-`,
  Re = `AVkSlVChUus-`,
  ze = `-tfmW4i7r-U-`,
  Be = `_8NYUdIS8vVE-`,
  Ve = `c7rqBghcJoQ-`,
  W = o(),
  G = class extends P.Component {
    state = {
      appid: 0,
      appinfo: null,
      mode: `display`,
      strSearch: ``,
      rgSuggestions: [],
    };
    m_currentRequest = 0;
    constructor(e) {
      super(e),
        this.props.appidInitial &&
          (d.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(() => {
            d.GetAppInfo(this.props.appidInitial),
              this.setState({
                appid: this.props.appidInitial,
                appinfo: d.GetAppInfo(this.props.appidInitial),
              });
          }),
          (this.state.appid = this.props.appidInitial));
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
                cc: k.COUNTRY,
                l: k.LANGUAGE,
                realm: se.k_ESteamRealmGlobal,
                origin: self.origin,
                f: `jsonfull`,
                term: t.replace(` `, `+`),
                require_type: `game`,
                excluded_tags: [],
                excluded_content_descriptors: [],
              },
              n = `${k.STORE_BASE_URL}search/suggest`,
              r = await j.default.get(n, { params: e, withCredentials: !0 }),
              i;
            (i = r?.data?.length
              ? r.data.map((e) =>
                  (0, W.jsxs)(
                    `div`,
                    {
                      className: we,
                      onClickCapture: () => this.SetSelectedApp(parseInt(e.id)),
                      children: [
                        (0, W.jsx)(`img`, { src: e.img, className: Se }),
                        (0, W.jsx)(`div`, {
                          className: F,
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
              this.setState({ strSearch: t, rgSuggestions: i });
          }, 250)))
        : this.setState({ strSearch: ``, rgSuggestions: null });
    }
    SetSelectedApp(e) {
      e && e != 0
        ? d.EnsureAppInfoForAppIDs([e]).then(() => {
            d.GetAppInfo(e),
              this.setState({
                appid: e,
                appinfo: d.GetAppInfo(e),
                mode: `display`,
              }),
              this.props.fnOnSelection && this.props.fnOnSelection(e, this);
          })
        : this.setState({ appid: 0, appinfo: null, mode: `display` });
    }
    OnKeyUp(e) {
      e.keyCode == 27 && this.setState({ mode: `display` });
    }
    render() {
      let e = this.props.classOverride ?? `gekZDtV16Ho-`,
        t = null,
        n = (0, W.jsx)(x, {
          type: `text`,
          onChange: this.UpdateAppSuggestions,
        });
      if (this.state.mode == `display`) {
        let e = this.state.appinfo
          ? this.state.appinfo.name +
            (this.props.showAppIds ? ` (${this.state.appid})` : ``)
          : (this.props.strPrompt ?? `Select game`);
        t = (0, W.jsx)(`div`, {
          className: xe,
          children: (0, W.jsx)(`div`, { className: F, children: e }),
        });
      } else if (this.state.mode == `select`) {
        let e = this.state.strSearch.length > 0;
        t = (0, W.jsxs)(`div`, {
          className: Ce,
          children: [
            n,
            e &&
              (0, W.jsx)(`div`, {
                className: `u6Os1UrBFLs-`,
                children: this.state.rgSuggestions,
              }),
          ],
        });
      }
      return (0, W.jsx)(`div`, {
        className: e,
        onClick: this.OnDisplayClicked,
        onKeyUpCapture: this.OnKeyUp,
        children: t,
      });
    }
  };
g([v], G.prototype, `OnDisplayClicked`, null),
  g([v], G.prototype, `UpdateAppSuggestions`, null),
  g([v], G.prototype, `OnKeyUp`, null);
var K = class extends P.Component {
    render() {
      if (this.props.appid == 0) return (0, W.jsx)(`div`, { className: I });
      {
        let e = d.GetAppInfo(this.props.appid);
        if (!e || !e.is_valid) return (0, W.jsx)(`div`, { className: I });
        let t = [];
        if (this.props.score) {
          t.push((0, W.jsx)(`div`, { className: L }, `score-spacer`));
          let e = Math.round(this.props.score * 100).toString() + `%`;
          t.push(
            (0, W.jsx)(`div`, { className: R, children: e }, `score-value`),
          );
        }
        let n = e.name + ` (` + this.props.appid.toString() + `)`,
          r = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
        return (0, W.jsxs)(`div`, {
          className: I,
          onClick: () => r(this.props.appid),
          children: [(0, W.jsx)(`div`, { className: F, children: n }), t],
        });
      }
    }
  },
  q = class extends P.Component {
    state = {};
    ref_app_a = P.createRef();
    ref_app_b = P.createRef();
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
          n = `${k.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
        j.default.get(n).then((e) => {
          e.data && e.data.similarity_scores
            ? this.setState({ score: e.data.similarity_scores[0] })
            : this.setState({ score: null });
        });
      }
    }
    render() {
      let e = this.state.score ? (this.state.score * 100).toFixed(1) + `%` : ``;
      return (0, W.jsxs)(`div`, {
        className: je,
        children: [
          (0, W.jsx)(
            G,
            {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
            },
            `similar_app_a`,
          ),
          (0, W.jsx)(`div`, { className: V }),
          (0, W.jsx)(`div`, { className: R, children: e }),
          (0, W.jsx)(`div`, { className: V }),
          (0, W.jsx)(
            G,
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
g([v], q.prototype, `OnAppSelected`, null);
var J = class extends P.Component {
  selected_app = 0;
  similar_apps = [];
  similarity_scores = [];
  similarity_model = `default`;
  app_selector_ref = P.createRef();
  constructor(e) {
    super(e), s(this), e.default_app && this.SetSelectedApp(e.default_app);
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
      (this.similar_apps = []),
        (this.selected_app = e),
        this.app_selector_ref.current &&
          this.app_selector_ref.current.SetSelectedApp(e);
      let t = `${k.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
      j.default.get(t).then((e) => {
        if (e.data && e.data.appid == this.selected_app) {
          let t = new Set(
            e.data.similar_appids.slice(0, this.props.max_similar),
          );
          t.add(e.data.appid),
            d.EnsureAppInfoForAppIDs(t).then(() => {
              (this.similar_apps = e.data.similar_appids),
                (this.similarity_scores = e.data.similarity_scores);
            });
        }
      });
    }
  }
  OnModelChanged(e, t) {
    (this.similarity_model = e.data),
      this.SetSelectedApp(this.selected_app, !0);
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
        (0, W.jsx)(
          K,
          { appid: n, score: r, fnOnSelected: this.SetSelectedApp },
          n,
        ),
      );
    }
    let r = [];
    for (let e of N.rgModelNames) {
      let t = { label: (0, W.jsx)(`div`, { children: e }, e), data: e };
      r.push(t);
    }
    return (0, W.jsxs)(`div`, {
      className: Ae,
      children: [
        (0, W.jsx)(O, {
          rgOptions: r,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, W.jsx)(`h1`, { children: `Games similar to:` }),
        (0, W.jsx)(G, {
          fnOnSelection: this.OnSelectedApp,
          ref: this.app_selector_ref,
          appidInitial: 268500,
          showAppIds: !0,
        }),
        (0, W.jsx)(`div`, { className: B, children: e }),
      ],
    });
  }
};
g([t], J.prototype, `selected_app`, void 0),
  g([t], J.prototype, `similar_apps`, void 0),
  g([t], J.prototype, `similarity_scores`, void 0),
  g([t], J.prototype, `similarity_model`, void 0),
  g([v], J.prototype, `OnSelectedApp`, null),
  g([v], J.prototype, `SetSelectedApp`, null),
  g([v], J.prototype, `OnModelChanged`, null),
  (J = g([c], J));
var Y = class extends P.Component {
  selected_app = void 0;
  selected_operator = void 0;
  constructor(e) {
    super(e),
      s(this),
      (this.selected_app = e.app),
      (this.selected_operator = e.operator);
  }
  OnSelectedApp(e) {
    e &&
      e != this.selected_app &&
      ((this.selected_app = e),
      this.props.fnOnChange && this.props.fnOnChange());
  }
  OnSelectedOperator(e, t) {
    (this.selected_operator = e.data),
      this.props.fnOnChange && this.props.fnOnChange();
  }
  render() {
    let e = [
      { label: (0, W.jsx)(`div`, { children: `Plus` }, `Plus`), data: `Plus` },
      {
        label: (0, W.jsx)(`div`, { children: `Minus` }, `Minus`),
        data: `Minus`,
      },
    ];
    return (0, W.jsxs)(`div`, {
      className: Ie,
      children: [
        (0, W.jsx)(`div`, {
          className: Le,
          children: (0, W.jsx)(O, {
            rgOptions: e,
            onChange: this.OnSelectedOperator,
            selectedOption: `Plus`,
          }),
        }),
        (0, W.jsx)(G, { fnOnSelection: this.OnSelectedApp }),
      ],
    });
  }
};
g([t], Y.prototype, `selected_app`, void 0),
  g([t], Y.prototype, `selected_operator`, void 0),
  g([v], Y.prototype, `OnSelectedApp`, null),
  g([v], Y.prototype, `OnSelectedOperator`, null),
  (Y = g([c], Y));
var X = class extends P.Component {
  operands = [];
  similarity_model = `default`;
  similar_apps = [];
  similarity_scores = [];
  operand_refs;
  constructor(e) {
    super(e), s(this), (this.operand_refs = []);
    for (let t = 0; t < e.max_operands; t++)
      this.operand_refs.push(P.createRef());
  }
  OnModelChanged(e, t) {
    (this.similarity_model = e.data), this.RecomputeExpression();
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
      (this.operands[e].app = t.selected_app),
        (this.operands[e].operator = t.selected_operator);
    }
    this.RecomputeExpression();
  }
  RecomputeExpression() {
    if (this.operands.length == 0) return;
    let e = this.operands.map((e) => `appid[]=` + e.app.toString()),
      t = `${k.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(`&`)}&model=${this.similarity_model}`;
    j.default.get(t).then((e) => {
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
            n = `${k.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
          j.default.get(n).then((e) => {
            let t = new Set(
              e.data.similar_appids.slice(0, this.props.max_similar),
            );
            d.EnsureAppInfoForAppIDs(t).then(() => {
              (this.similar_apps = e.data.similar_appids),
                (this.similarity_scores = e.data.similarity_scores);
            });
          });
        }
      }
    });
  }
  render() {
    let e = [];
    for (let t of N.rgModelNames) {
      let n = { label: (0, W.jsx)(`div`, { children: t }, t), data: t };
      e.push(n);
    }
    let t = [],
      n = 0;
    for (let e of this.operands)
      t.push(
        (0, W.jsx)(
          Y,
          {
            app: e.app,
            operator: e.operator,
            fnOnChange: this.OnOperandChanged,
            ref: this.operand_refs[n],
          },
          n,
        ),
      ),
        n++;
    let r = null;
    this.operands.length < this.props.max_operands &&
      (r = (0, W.jsx)(`div`, {
        className: Re,
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
      i.push((0, W.jsx)(K, { appid: t, score: n }, t));
    }
    return (0, W.jsxs)(`div`, {
      className: Fe,
      children: [
        (0, W.jsx)(O, {
          rgOptions: e,
          onChange: this.OnModelChanged,
          selectedOption: `default`,
        }),
        (0, W.jsx)(`h1`, { children: `Mixture` }),
        t,
        r,
        (0, W.jsx)(`h1`, { children: `Games similar to mixture` }),
        (0, W.jsx)(`div`, { className: B, children: i }),
      ],
    });
  }
};
g([t], X.prototype, `operands`, void 0),
  g([t], X.prototype, `similarity_model`, void 0),
  g([t], X.prototype, `similar_apps`, void 0),
  g([t], X.prototype, `similarity_scores`, void 0),
  g([v], X.prototype, `OnModelChanged`, null),
  g([v], X.prototype, `OnAddOperand`, null),
  g([v], X.prototype, `OnOperandChanged`, null),
  (X = g([c], X));
var Z = class extends P.Component {
  constructor(e) {
    super(e), s(this);
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
      N.ComputePathBetweenApps(
        this.app_start,
        this.app_end,
        0.75,
        3,
        10,
        200,
        this.IterationCallback,
      )
        .then((e) => {
          (this.in_progress = !1),
            d.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(() => {
              this.found_path = e;
            });
        })
        .catch((e) => {
          console.warn(`Caught pathfinding failure because: ` + e.toString()),
            (this.in_progress = !1),
            (this.found_path = void 0);
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
      t = e ? H : ie(H, void 0),
      n = null;
    n = this.in_progress
      ? (0, W.jsx)(`div`, {
          className: U,
          children: `Finding path, step ` + this.progress_iteration,
        })
      : this.found_path
        ? (0, W.jsx)(`div`, { className: U, children: `Found path` })
        : (0, W.jsx)(`div`, { className: U, children: `No path found` });
    let r = [];
    if (this.found_path)
      for (let e = 0; e < this.found_path.length; e++) {
        let t = this.found_path[e];
        r.push(
          (0, W.jsx)(
            K,
            { appid: t.appid, score: t.similarity },
            `pathstep` + e,
          ),
        );
      }
    return (0, W.jsxs)(`div`, {
      className: Me,
      children: [
        (0, W.jsxs)(`div`, {
          className: Ne,
          children: [
            (0, W.jsx)(G, {
              fnOnSelection: this.OnSelectedStartApp,
              strPrompt: `Select start game`,
            }),
            (0, W.jsx)(G, {
              fnOnSelection: this.OnSelectedEndApp,
              strPrompt: `Select end game`,
            }),
          ],
        }),
        (0, W.jsx)(`div`, {
          className: t,
          onClick: e ? this.Pathfind : () => {},
          children: `Pathfind!`,
        }),
        n,
        (0, W.jsx)(`div`, { className: Pe, children: r }),
      ],
    });
  }
};
g([t], Z.prototype, `app_start`, void 0),
  g([t], Z.prototype, `app_end`, void 0),
  g([t], Z.prototype, `in_progress`, void 0),
  g([t], Z.prototype, `progress_iteration`, void 0),
  g([t], Z.prototype, `found_path`, void 0),
  g([v], Z.prototype, `IterationCallback`, null),
  g([v], Z.prototype, `Pathfind`, null),
  g([v], Z.prototype, `OnSelectedStartApp`, null),
  g([v], Z.prototype, `OnSelectedEndApp`, null),
  (Z = g([c], Z));
function He() {
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`h1`, { children: `Similar Games` }),
      (0, W.jsx)(J, { max_similar: 10 }),
      (0, W.jsx)(`div`, { className: L }),
      (0, W.jsx)(`h1`, { children: `Similarity` }),
      (0, W.jsx)(q, {}),
      (0, W.jsx)(`div`, { className: L }),
      (0, W.jsx)(`h1`, { children: `Mixer` }),
      (0, W.jsx)(X, { max_similar: 10, max_operands: 6 }),
      (0, W.jsx)(`div`, { className: L }),
      (0, W.jsx)(`h1`, { children: `Pathfinder` }),
      (0, W.jsx)(Z, {}),
    ],
  });
}
var Q = e(a(), 1),
  Ue = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tag_score_factor || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: _.readDouble,
              bw: E.writeDouble,
            },
            playtime_max_seconds: {
              n: 10,
              d: 36e4,
              br: _.readInt32,
              bw: E.writeInt32,
            },
            playtime_max_games: {
              n: 11,
              d: 3,
              br: _.readInt32,
              bw: E.writeInt32,
            },
            playtime_score_factor: {
              n: 12,
              d: 0.9,
              br: _.readDouble,
              bw: E.writeDouble,
            },
            popularity_factor: { n: 20, d: 5, br: _.readEnum, bw: E.writeEnum },
            popularity_reciprocal: {
              n: 21,
              d: 1e4,
              br: _.readInt32,
              bw: E.writeInt32,
            },
            popularity_base_score: {
              n: 22,
              d: `5000000`,
              br: _.readInt64String,
              bw: E.writeInt64String,
            },
            played_since: { n: 23, br: _.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `StoreAppSimilarityPriorityOptions`;
    }
  },
  We = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [3], null);
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
              br: _.readFixed64String,
              bw: E.writeFixed64String,
            },
            country_code: { n: 2, br: _.readString, bw: E.writeString },
            ids: { n: 3, c: D, r: !0, q: !0 },
            options: { n: 4, c: Ue },
            debug: { n: 5, br: _.readBool, bw: E.writeBool },
            include_owned_games: { n: 6, br: _.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Request`;
    }
  },
  Ge = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { items: { n: 1, c: Ke, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response`;
    }
  },
  Ke = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [50], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, c: D },
            already_owned: { n: 2, br: _.readBool, bw: E.writeBool },
            weight: { n: 3, br: _.readDouble, bw: E.writeDouble },
            weight_before_dedupe: { n: 4, br: _.readDouble, bw: E.writeDouble },
            debug_matches: { n: 50, c: qe, r: !0, q: !0 },
            debug_popularity: { n: 51, c: Je },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem`;
    }
  },
  qe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.source_app || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            source_app: { n: 1, br: _.readInt32, bw: E.writeInt32 },
            weight: { n: 2, br: _.readDouble, bw: E.writeDouble },
            similarity: { n: 3, br: _.readDouble, bw: E.writeDouble },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo`;
    }
  },
  Je = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rank || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rank: { n: 1, br: _.readUint32, bw: E.writeUint32 },
            popularity_factor: { n: 2, br: _.readDouble, bw: E.writeDouble },
            weight_before_popularity: {
              n: 3,
              br: _.readDouble,
              bw: E.writeDouble,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo`;
    }
  },
  $ = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: _.readFixed64String,
              bw: E.writeFixed64String,
            },
            sort: { n: 2, d: 1, br: _.readEnum, bw: E.writeEnum },
            clusters_to_return: { n: 3, br: _.readInt32, bw: E.writeInt32 },
            cluster_index: { n: 4, br: _.readInt32, bw: E.writeInt32 },
            context: { n: 10, c: fe },
            data_request: { n: 11, c: _e },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request`;
    }
  },
  Ye = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clusters || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [1], null);
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
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response`;
    }
  },
  Xe = class e extends Q.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cluster_id || b(e.M()),
        Q.Message.initialize(this, t, 0, -1, [5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cluster_id: { n: 1, br: _.readInt32, bw: E.writeInt32 },
            playtime_forever: { n: 2, br: _.readInt32, bw: E.writeInt32 },
            playtime_2weeks: { n: 3, br: _.readInt32, bw: E.writeInt32 },
            last_played: { n: 4, br: _.readUint32, bw: E.writeUint32 },
            played_appids: {
              n: 5,
              r: !0,
              q: !0,
              br: _.readInt32,
              pbr: _.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            similar_items_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: _.readInt32,
              pbr: _.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            similar_items: { n: 7, c: ue, r: !0, q: !0 },
            similar_item_popularity_score: {
              n: 8,
              br: _.readDouble,
              bw: E.writeDouble,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= p(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return A(e.M(), t, n);
    }
    static fromObject(t) {
      return S(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new Q.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return y(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new Q.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
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
      T(We, t, n),
      Ge,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
    );
  }
  e.PrioritizeAppsForUser = t;
  function n(e, t, n) {
    return e.SendMsg(
      `StoreAppSimilarity.IdentifyClustersFromPlaytime#1`,
      T($, t, n),
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
    m_callbacksLoaded = new ne();
    m_rgClusters;
    constructor(e, t, n, r, i) {
      let a = pe.Init($);
      ce(a),
        i && le(a, i),
        a.Body().set_steamid(t || C.steamid),
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
        );
    }
    ReadCluster(e, t) {
      let n;
      return (
        t && (n = e.similar_items().map((e) => ae.Get().ReadItem(e, t))),
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
  let [o, s] = P.useState(null);
  return (
    P.useEffect(() => {
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
    n = P.useRef(void 0);
  return (
    (n.current ||= new Qe(t)),
    (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsxs)(`div`, {
          children: [
            (0, W.jsx)(`p`, {
              children: `This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.`,
            }),
            (0, W.jsxs)(`p`, {
              children: [
                `You can also `,
                (0, W.jsx)(`a`, {
                  href: `http://store-tc.k.steam.net/graph`,
                  target: `_blank`,
                  children: `browse the cluster data graphically`,
                }),
                ` (requires Rack VPN).`,
              ],
            }),
          ],
        }),
        (0, W.jsx)(ct, { SimilarityStore: n.current }),
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
    [n, r] = P.useState(C.steamid),
    [i, a] = P.useState(`10`),
    [o, s] = P.useState(1),
    c = P.useCallback((e) => r(e.currentTarget.value), [r]),
    l = P.useCallback((e) => a(e.currentTarget.value), [a]),
    d = P.useCallback((e) => s(e.data), [s]),
    f = !1,
    p = P.useRef(C.steamid),
    m = n && new te(n);
  m &&
    m.BIsValid() &&
    m.BIsIndividualAccount() &&
    ((p.current = m.ConvertTo64BitString()), (f = !0));
  let h;
  i && !isNaN(parseInt(i)) && (h = parseInt(i));
  let ne = P.useMemo(() => {
      let e = [];
      for (let t in st) e.push({ data: Number(t), label: st[t] });
      return e;
    }, []),
    g = et(t, { include_assets: !0, include_basic_info: !0 }, p.current, o, h);
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsxs)(ee, {
        className: tt,
        children: [
          (0, W.jsx)(x, {
            label: `SteamID`,
            type: `text`,
            value: n,
            onChange: c,
            description: !f && `Invalid SteamID`,
          }),
          (0, W.jsx)(x, {
            label: `Clusters to return (Set to blank for all clusters)`,
            type: `text`,
            value: i,
            onChange: l,
          }),
          (0, W.jsx)(O, {
            label: `Sort clusters by`,
            rgOptions: ne,
            selectedOption: o,
            onChange: d,
          }),
        ],
      }),
      f && !g && (0, W.jsx)(u, {}),
      g && (0, W.jsx)(lt, { rgPlaytimeClusters: g }),
    ],
  });
}
function lt(e) {
  let { rgPlaytimeClusters: t } = e;
  return (0, W.jsx)(`div`, {
    children: t.map((e) =>
      (0, W.jsx)(h, { children: (0, W.jsx)(ut, { cluster: e }) }, e.nClusterID),
    ),
  });
}
function ut(e) {
  let { cluster: t } = e,
    [n, r] = P.useState(!1),
    i = P.useCallback(() => r(!0), [r]),
    [a, o] = P.useState(!1),
    s = P.useCallback(() => o(!0), [o]),
    c = re({ onEnter: s });
  return (0, W.jsxs)(`div`, {
    ref: c,
    className: nt,
    children: [
      (0, W.jsxs)(`div`, {
        className: rt,
        children: [
          (0, W.jsxs)(`h1`, { children: [`Cluster `, t.nClusterID] }),
          (0, W.jsx)(h, {
            children: (0, W.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`b`, { children: `Total Playtime:` }),
                    ` `,
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    `hr`,
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`b`, { children: `Last Played:` }),
                    ` `,
                    de(t.rtLastPlayed),
                    ` `,
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`b`, { children: `Games played:` }),
                    ` `,
                    a &&
                      t.rgAppIDsPlayed.map((e) =>
                        (0, W.jsxs)(
                          P.Fragment,
                          { children: [(0, W.jsx)(ft, { appid: e }), `, `] },
                          e,
                        ),
                      ),
                  ],
                }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`b`, { children: `Popularity Score:` }),
                    ` `,
                    Math.floor(t.flPopularityScore * 100),
                    `% \xA0`,
                    (0, W.jsx)(`span`, {
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
      (0, W.jsxs)(`div`, {
        className: it,
        children: [
          (0, W.jsx)(`h3`, { children: `Similar titles:` }),
          (0, W.jsx)(h, {
            children: (0, W.jsx)(`ul`, {
              children: t.rgSimilarItems.map((e, t) =>
                n || t < 4
                  ? (0, W.jsx)(
                      `li`,
                      { children: (0, W.jsx)(pt, { item: e }) },
                      e.GetUniqueID(),
                    )
                  : null,
              ),
            }),
          }),
          !n &&
            (0, W.jsxs)(me, {
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
    ? (0, W.jsx)(`a`, {
        className: void 0,
        href: n.GetStorePageURL(),
        children: n.GetName(),
      })
    : null;
}
function pt(e) {
  let { item: t } = e;
  return (0, W.jsxs)(`a`, {
    className: at,
    href: t.GetStorePageURL(),
    children: [
      (0, W.jsx)(`img`, {
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
    render: () => (0, W.jsx)(He, {}),
    name: `ML Similarity`,
  },
  {
    path: `clustering`,
    render: (e) => (0, W.jsx)(ot, { SteamInterface: e.SteamInterface }),
    name: `Tag Clustering`,
    requires_login: !0,
  },
];
function ht(e) {
  let [t, i] = P.useState(!1),
    a = C.logged_in,
    o = he();
  if (
    ((0, P.useEffect)(() => {
      N.Init(o), i(!0);
    }, [o]),
    !t)
  )
    return (0, W.jsx)(`div`, { className: z });
  let s = { SteamInterface: o };
  return (0, W.jsx)(`div`, {
    className: z,
    children: (0, W.jsxs)(`div`, {
      className: Te,
      children: [
        (0, W.jsxs)(`div`, {
          className: Ee,
          children: [
            (0, W.jsx)(`div`, { className: De, children: `Labs Sandbox` }),
            (0, W.jsx)(`div`, {
              className: Oe,
              children: `Internal testbed page for Steam Labs experiments`,
            }),
          ],
        }),
        (0, W.jsx)(`div`, {
          className: ze,
          children: mt.map((e) =>
            (0, W.jsx)(
              oe,
              {
                to: `${m.LabsSandbox()}/${e.path}`,
                className: Be,
                activeClassName: Ve,
                children: e.name,
              },
              e.path,
            ),
          ),
        }),
        (0, W.jsx)(`div`, {
          className: ke,
          children: (0, W.jsx)(h, {
            children: (0, W.jsx)(r, {
              children: mt.map((e, t) =>
                (0, W.jsx)(
                  n,
                  {
                    path: `${m.LabsSandbox()}/${e.path}`,
                    render: (t) =>
                      !e.requires_login || a
                        ? e.render({ ...t, ...s })
                        : (0, W.jsx)(gt, {}),
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
  let e = ge();
  return (0, W.jsxs)(`div`, {
    children: [
      (0, W.jsx)(`h3`, { children: `Please login to view this page.` }),
      (0, W.jsx)(ve, {
        transport: e,
        platform: 2,
        onComplete: () => window.location.reload(),
      }),
    ],
  });
}
export { ht as default };

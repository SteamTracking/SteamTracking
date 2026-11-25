import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Ma as t,
  eo as n,
  nt as r,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { M as i } from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { et as a } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { t as o } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { o as s } from "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import { C as c } from "./library.js?contenthash=t9xy63v9";
import { bt as l } from "./chunk~a19d1add1e.js?contenthash=CgJyrdit";
var u = e(n(), 1),
  d = o(),
  f = class e extends u.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = u.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || `once`) == `once`;
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(e) {
      this.UpdateObserver(e);
    }
    UpdateObserver(e) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        e &&
        (e.rootMargin != this.m_observer.rootMargin ||
          e.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let t = this.m_refElement.current;
      if (
        (this.m_observer &&
          t != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && t)
      ) {
        let e = { root: this.FindScrollableAncestor(t) };
        (this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = s(t, this.OnIntersection, e)));
      }
      this.m_observer &&
        t &&
        t != this.m_elTracked &&
        (this.m_observer.observe(t), (this.m_elTracked = t));
    }
    FindScrollableAncestor(t) {
      return a(t, (t) => {
        let n = this.props.horizontal
          ? window.getComputedStyle(t).overflowX
          : window.getComputedStyle(t).overflowY;
        return !!(
          n == `scroll` ||
          n == `auto` ||
          t.classList.contains(e.GetScrollableClassname())
        );
      });
    }
    HandleRef = (e) => {
      (r(this.m_refElement, e),
        this.props.containerRef && r(this.props.containerRef, e));
    };
    OnIntersection = (e) => {
      let t = !1;
      for (let n of e)
        if (n.isIntersecting) {
          t = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != t &&
        ((this.m_bPreviouslyIntersecting = t),
        this.props.onVisibilityChange && this.props.onVisibilityChange(t),
        t && this.BTriggerOnce() && this.DestroyObserver());
    };
    render() {
      let {
        onVisibilityChange: e,
        rootMargin: t,
        trigger: n,
        horizontal: r,
        containerRef: a,
        ...o
      } = this.props;
      return (0, d.jsx)(i, {
        ref: this.HandleRef,
        ...o,
        children: this.props.children,
      });
    }
  },
  p = u.createContext({ enabled: !0 });
function m(e) {
  let {
      placeholderWidth: t,
      placeholderHeight: n,
      holdGamepadFocus: r = !1,
      onRender: a,
      style: o,
      mode: s = `JustLoad`,
      children: c,
      ...l
    } = e,
    m = u.useContext(p),
    [h, g] = u.useState(() => ({
      bRenderChildren: !m.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = u.useRef(null),
    v = s === `LoadAndUnload` && m.enabled,
    y = u.useCallback(
      (e) => {
        g((t) => {
          if (t.bRenderChildren === e || (t.bRenderChildren && !v)) return t;
          let n = 0,
            r = 0;
          if (_.current) {
            let e = _.current.getBoundingClientRect();
            e && ((n = e.width), (r = e.height));
          }
          return (
            e && a && a(),
            { bRenderChildren: e, nPrevRenderWidth: n, nPrevRenderHeight: r }
          );
        });
      },
      [v, a],
    );
  u.useEffect(() => {
    m.enabled || y(!0);
  }, [m.enabled, y]);
  let b = o;
  if (!h.bRenderChildren) {
    let e = h.nPrevRenderWidth || t,
      r = h.nPrevRenderHeight || n;
    (r !== void 0 || e !== void 0) && (b = { ...o, minHeight: r, minWidth: e });
  }
  let x = v ? `repeated` : `once`,
    S = (0, d.jsx)(f, {
      containerRef: _,
      style: b,
      ...l,
      onVisibilityChange: y,
      trigger: x,
      children: h.bRenderChildren && c,
    });
  return (
    r &&
      (S = (0, d.jsx)(i, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        children: S,
      })),
    S
  );
}
var h = `hZ-dKtI-DOE-`,
  g = `_48uVrbfJQEM-`,
  _ = `Lt6SJZ-PR1A-`,
  v = `vmIVedNuofw-`,
  y = `gFqPN18pEI8-`,
  b = `yGT3R-m6gZk-`,
  x = `-I4fAFaLKxA-`,
  S = `bPmDLn-lEoc-`,
  C = `_6txFjo9b8Zk-`,
  w = `_6y4EcbHPzTE-`,
  T = `LQrwY5m9KjE-`,
  E = `HHtwpv2BsZo-`,
  D = `tdXc-z1nXGI-`,
  O = `D0L0mwSYCaE-`,
  k = `SGi7-TqE4Rs-`,
  A = `uPjG9NaDuUg-`,
  j = `G9e5dN5XFKM-`,
  M = `Cx2zVOdOEwU-`,
  N = `rk6-75sKTfs-`,
  P = `D4J8JhjevEo-`,
  F = `OobKWZLrT2Q-`,
  I = `zoD9wRMnlzg-`,
  L = `x25qTcshK-4-`,
  R = `LQZsciPFbvE-`,
  z = `oo8VFYEMJNU-`,
  B = `_6SdwjlcjQF4-`,
  V = `_8m3-fAAnr8I-`,
  H = `kg-spn-7ESc-`,
  U = `wErgDaiILYk-`,
  W = e(c()),
  G = class extends l {
    constructor() {
      super();
    }
    BTransportReady() {
      return !0;
    }
    GetServerTime() {
      return t.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
    }
    async RequestEmoticonListInternal() {
      let e = [];
      try {
        let n = await W.default.get(t.CHAT_BASE_URL + `actions/EmoticonData`, {
          withCredentials: !0,
        });
        if (n.data.emoticons)
          for (let t of n.data.emoticons) {
            let n = t.name;
            if (n) {
              if (n.startsWith(`^`)) e.push({ name: n });
              else {
                let r = { name: n.substr(1, n.length - 2) },
                  i = r.name.toLowerCase();
                (i != r.name && (r.name_normalized = i),
                  t.time_last_used && (r.last_used = t.time_last_used),
                  t.use_count && (r.use_count = t.use_count),
                  t.time_received && (r.time_received = t.time_received),
                  t.appid && (r.appid = t.appid),
                  e.push(r));
              }
            }
          }
      } catch (e) {
        console.error(`error loading emoticon list`, e);
      }
      this.OnEmoticonListReceived(e);
    }
  };
export {
  j as A,
  F as C,
  V as D,
  B as E,
  f as M,
  H as O,
  g as S,
  z as T,
  O as _,
  _ as a,
  A as b,
  I as c,
  w as d,
  D as f,
  v as g,
  S as h,
  h as i,
  m as j,
  x as k,
  y as l,
  P as m,
  k as n,
  b as o,
  C as p,
  E as r,
  L as s,
  G as t,
  N as u,
  M as v,
  R as w,
  U as x,
  T as y,
};

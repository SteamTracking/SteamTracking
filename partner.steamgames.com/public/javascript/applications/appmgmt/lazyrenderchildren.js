/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { _t as e, kt as t, on as n } from "./mobx.esm.js";
import { kt as r, wt as i } from "./src.js";
import { Ra as a } from "./dialogs.js";
import { t as o } from "./useresizeobserver.js";
var s = n(t(), 1),
  c = e(),
  l = class e extends s.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = s.createRef();
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
        this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = o(t, this.OnIntersection, e));
      }
      this.m_observer &&
        t &&
        t != this.m_elTracked &&
        (this.m_observer.observe(t), (this.m_elTracked = t));
    }
    FindScrollableAncestor(t) {
      return i(t, (t) => {
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
      r(this.m_refElement, e),
        this.props.containerRef && r(this.props.containerRef, e);
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
        containerRef: i,
        ...o
      } = this.props;
      return (0, c.jsx)(a, {
        ref: this.HandleRef,
        ...o,
        children: this.props.children,
      });
    }
  },
  u = s.createContext({ enabled: !0 });
function d(e) {
  let {
      placeholderWidth: t,
      placeholderHeight: n,
      holdGamepadFocus: r = !1,
      onRender: i,
      style: o,
      mode: d = `JustLoad`,
      children: f,
      ...p
    } = e,
    m = s.useContext(u),
    [h, g] = s.useState(() => ({
      bRenderChildren: !m.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = s.useRef(null),
    v = d === `LoadAndUnload` && m.enabled,
    y = s.useCallback(
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
            e && i && i(),
            { bRenderChildren: e, nPrevRenderWidth: n, nPrevRenderHeight: r }
          );
        });
      },
      [v, i],
    );
  s.useEffect(() => {
    m.enabled || y(!0);
  }, [m.enabled, y]);
  let b = o;
  if (!h.bRenderChildren) {
    let e = h.nPrevRenderWidth || t,
      r = h.nPrevRenderHeight || n;
    (r !== void 0 || e !== void 0) && (b = { ...o, minHeight: r, minWidth: e });
  }
  let x = v ? `repeated` : `once`,
    S = (0, c.jsx)(l, {
      containerRef: _,
      style: b,
      ...p,
      onVisibilityChange: y,
      trigger: x,
      children: h.bRenderChildren && f,
    });
  return (
    r &&
      (S = (0, c.jsx)(a, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        children: S,
      })),
    S
  );
}
export { l as n, d as t };

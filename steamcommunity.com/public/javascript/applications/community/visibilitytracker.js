/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Pt as t, ot as n } from "./libraries.js";
import { Cu as r, Od as i, Vu as a, tt as o } from "./main.js";
var s = e(t(), 1),
  c = n(),
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
        (this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = o(t, this.OnIntersection, e)));
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
      (i(this.m_refElement, e),
        this.props.containerRef && i(this.props.containerRef, e));
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
        horizontal: i,
        containerRef: a,
        ...o
      } = this.props;
      return (0, c.jsx)(r, {
        ref: this.HandleRef,
        ...o,
        children: this.props.children,
      });
    }
  };
export { l as t };

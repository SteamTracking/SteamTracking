var _ = _(_(), 1),
  _ = _(),
  _ = class _ extends _.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = _.createRef();
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
    componentDidUpdate(_) {
      this.UpdateObserver(_);
    }
    UpdateObserver(_) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        _ &&
        (_.rootMargin != this.m_observer.rootMargin ||
          _.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let _ = this.m_refElement.current;
      if (
        (this.m_observer &&
          _ != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && _)
      ) {
        let _ = {
          root: this.FindScrollableAncestor(_),
        };
        this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
          this.props.thresholds && (_.threshold = this.props.thresholds),
          (this.m_observer = _(_, this.OnIntersection, _));
      }
      this.m_observer &&
        _ &&
        _ != this.m_elTracked &&
        (this.m_observer.observe(_), (this.m_elTracked = _));
    }
    FindScrollableAncestor(_) {
      return _(_, (_) => {
        let _ = this.props.horizontal
          ? window.getComputedStyle(_).overflowX
          : window.getComputedStyle(_).overflowY;
        return !!(
          _ == `scroll` ||
          _ == `auto` ||
          _.classList.contains(_.GetScrollableClassname())
        );
      });
    }
    HandleRef = (_) => {
      _(this.m_refElement, _),
        this.props.containerRef && _(this.props.containerRef, _);
    };
    OnIntersection = (_) => {
      let _ = !1;
      for (let _ of _)
        if (_.isIntersecting) {
          _ = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != _ &&
        ((this.m_bPreviouslyIntersecting = _),
        this.props.onVisibilityChange && this.props.onVisibilityChange(_),
        _ && this.BTriggerOnce() && this.DestroyObserver());
    };
    render() {
      let {
        onVisibilityChange: _,
        rootMargin: _,
        trigger: _,
        horizontal: _,
        containerRef: _,
        ..._
      } = this.props;
      return (0, _.jsx)(_, {
        ref: this.HandleRef,
        ..._,
        children: this.props.children,
      });
    }
  };
export { _ };

import { _ } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import { _, _, _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { _ } from "./chunk~6780060d19.js?contenthash=D23mWcHU";
import { _ } from "./chunk~fac4c69429.js?contenthash=Coq9a0Uf";
import { _ } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { _ } from "./chunk~6efc40bd45.js?contenthash=BD8MmAIt";
import { _ } from "./library.js?contenthash=t9xy63v9";
import { _ } from "./chunk~a19d1add1e.js?contenthash=CgJyrdit";
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
        (this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
          this.props.thresholds && (_.threshold = this.props.thresholds),
          (this.m_observer = _(_, this.OnIntersection, _)));
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
      (_(this.m_refElement, _),
        this.props.containerRef && _(this.props.containerRef, _));
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
  },
  _ = _.createContext({
    enabled: !0,
  });
function _(_) {
  let {
      placeholderWidth: _,
      placeholderHeight: _,
      holdGamepadFocus: _ = !1,
      onRender: _,
      style: _,
      mode: _ = `JustLoad`,
      children: _,
      ..._
    } = _,
    _ = _.useContext(_),
    [_, _] = _.useState(() => ({
      bRenderChildren: !_.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    _ = _.useRef(null),
    _ = _ === `LoadAndUnload` && _.enabled,
    _ = _.useCallback(
      (_) => {
        _((_) => {
          if (_.bRenderChildren === _ || (_.bRenderChildren && !_)) return _;
          let _ = 0,
            _ = 0;
          if (_.current) {
            let _ = _.current.getBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          return (
            _ && _ && _(),
            {
              bRenderChildren: _,
              nPrevRenderWidth: _,
              nPrevRenderHeight: _,
            }
          );
        });
      },
      [_, _],
    );
  _.useEffect(() => {
    _.enabled || _(!0);
  }, [_.enabled, _]);
  let _ = _;
  if (!_.bRenderChildren) {
    let _ = _.nPrevRenderWidth || _,
      _ = _.nPrevRenderHeight || _;
    (_ !== void 0 || _ !== void 0) &&
      (_ = {
        ..._,
        minHeight: _,
        minWidth: _,
      });
  }
  let _ = _ ? `repeated` : `once`,
    _ = (0, _.jsx)(_, {
      containerRef: _,
      style: _,
      ..._,
      onVisibilityChange: _,
      trigger: _,
      children: _.bRenderChildren && _,
    });
  return (
    _ &&
      (_ = (0, _.jsx)(_, {
        focusableIfEmpty: !0,
        style: {
          height: `100%`,
        },
        children: _,
      })),
    _
  );
}
var _ = `hZ-dKtI-DOE-`,
  _ = `_48uVrbfJQEM-`,
  _ = `Lt6SJZ-PR1A-`,
  _ = `vmIVedNuofw-`,
  _ = `gFqPN18pEI8-`,
  _ = `yGT3R-m6gZk-`,
  _ = `-I4fAFaLKxA-`,
  _ = `bPmDLn-lEoc-`,
  _ = `_6txFjo9b8Zk-`,
  _ = `_6y4EcbHPzTE-`,
  _ = `LQrwY5m9KjE-`,
  _ = `HHtwpv2BsZo-`,
  _ = `tdXc-z1nXGI-`,
  _ = `D0L0mwSYCaE-`,
  _ = `SGi7-TqE4Rs-`,
  _ = `uPjG9NaDuUg-`,
  _ = `G9e5dN5XFKM-`,
  _ = `Cx2zVOdOEwU-`,
  _ = `rk6-75sKTfs-`,
  _ = `D4J8JhjevEo-`,
  _ = `OobKWZLrT2Q-`,
  _ = `zoD9wRMnlzg-`,
  _ = `x25qTcshK-4-`,
  _ = `LQZsciPFbvE-`,
  _ = `oo8VFYEMJNU-`,
  _ = `_6SdwjlcjQF4-`,
  _ = `_8m3-fAAnr8I-`,
  _ = `kg-spn-7ESc-`,
  _ = `wErgDaiILYk-`,
  _ = _(_()),
  _ = class extends _ {
    constructor() {
      super();
    }
    BTransportReady() {
      return !0;
    }
    GetServerTime() {
      return _.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
    }
    async RequestEmoticonListInternal() {
      let _ = [];
      try {
        let _ = await _.default.get(_.CHAT_BASE_URL + `actions/EmoticonData`, {
          withCredentials: !0,
        });
        if (_.data.emoticons)
          for (let _ of _.data.emoticons) {
            let _ = _.name;
            if (_) {
              if (_.startsWith(`^`))
                _.push({
                  name: _,
                });
              else {
                let _ = {
                    name: _.substr(1, _.length - 2),
                  },
                  _ = _.name.toLowerCase();
                (_ != _.name && (_.name_normalized = _),
                  _.time_last_used && (_.last_used = _.time_last_used),
                  _.use_count && (_.use_count = _.use_count),
                  _.time_received && (_.time_received = _.time_received),
                  _.appid && (_.appid = _.appid),
                  _.push(_));
              }
            }
          }
      } catch (_) {
        console.error(`error loading emoticon list`, _);
      }
      this.OnEmoticonListReceived(_);
    }
  };

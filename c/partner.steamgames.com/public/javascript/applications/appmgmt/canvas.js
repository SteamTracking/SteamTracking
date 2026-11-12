import { _, _, _, _ } from "./chunk~de7f2df91c.js";
import { _, _ } from "./chunk~25a6634263.js";
var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
    m_elCanvas = null;
    m_Context = null;
    m_schUpdate = new _();
    m_bSetupComplete = !1;
    componentDidMount() {
      this.props.updateRate == 0 && this.updateCanvas();
    }
    componentWillUnmount() {
      this.m_schUpdate.Cancel();
    }
    componentDidUpdate() {
      this.updateCanvas();
    }
    BindCanvasRef(_) {
      this.m_elCanvas = _;
    }
    updateCanvas() {
      if (
        this.props.elementRef == null ||
        this.m_elCanvas == null ||
        this.m_bSetupComplete
      )
        return;
      let _ = this.props.scaleFactor || [1, 1],
        _ = this.props.elementRef,
        _ = this.props.updateRate,
        _ = this.m_elCanvas.getContext(`2d`);
      if (!_) return;
      this.m_Context = _;
      let _ = Math.floor(
          this.m_elCanvas.clientWidth / this.props.reductionFactor,
        ),
        _ = Math.floor(
          this.m_elCanvas.clientHeight / this.props.reductionFactor,
        );
      ((this.m_elCanvas.width = _),
        (this.m_elCanvas.height = _),
        (this.props.blurAmount ?? 0) > 0 &&
          (_.filter = `blur(` + this.props.blurAmount + `px)`));
      let _ = () => {
        (_.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
          _ > 0 && this.m_schUpdate.Schedule(_, _));
      };
      (_(), (this.m_bSetupComplete = !0));
    }
    render() {
      return (0, _.jsx)(`canvas`, {
        _: this.props._,
        className: this.props.className,
        ref: this.BindCanvasRef,
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
(_([_], _.prototype, `BindCanvasRef`, null),
  _([_], _.prototype, `updateCanvas`, null));

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Pt as e, W as t, n, nt as r } from "./chunk~de7f2df91c.js";
import { Pt as i, pt as a } from "./chunk~bd90a5fce7.js";
var o = e(r()),
  s = t(),
  c = class extends o.Component {
    m_elCanvas = null;
    m_Context = null;
    m_schUpdate = new a();
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
    BindCanvasRef(e) {
      this.m_elCanvas = e;
    }
    updateCanvas() {
      if (
        this.props.elementRef == null ||
        this.m_elCanvas == null ||
        this.m_bSetupComplete
      )
        return;
      let e = this.props.scaleFactor || [1, 1],
        t = this.props.elementRef,
        n = this.props.updateRate,
        r = this.m_elCanvas.getContext(`2d`);
      if (!r) return;
      this.m_Context = r;
      let i = Math.floor(
          this.m_elCanvas.clientWidth / this.props.reductionFactor,
        ),
        a = Math.floor(
          this.m_elCanvas.clientHeight / this.props.reductionFactor,
        );
      ((this.m_elCanvas.width = i),
        (this.m_elCanvas.height = a),
        (this.props.blurAmount ?? 0) > 0 &&
          (r.filter = `blur(` + this.props.blurAmount + `px)`));
      let o = () => {
        (r.drawImage(t, 0, 0, i * e[0], a * e[1]),
          n > 0 && this.m_schUpdate.Schedule(n, o));
      };
      (o(), (this.m_bSetupComplete = !0));
    }
    render() {
      return (0, s.jsx)(`canvas`, {
        id: this.props.id,
        className: this.props.className,
        ref: this.BindCanvasRef,
        width: this.props.width,
        height: this.props.height,
      });
    }
  };
(n([i], c.prototype, `BindCanvasRef`, null),
  n([i], c.prototype, `updateCanvas`, null));
export { c as t };

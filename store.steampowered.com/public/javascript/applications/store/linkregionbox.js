/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e, r as t } from "./rolldown-runtime.js";
import { Lt as n, ft as r, l as i } from "./libraries.js";
import {
  Ex as a,
  Mb as o,
  Rx as s,
  Uy as c,
  Yo as l,
  Zn as u,
  kb as d,
  nr as f,
  yc as p,
} from "./main.js";
var m = e(n()),
  h = t({
    Bottom: () => k,
    BottomLeft: () => O,
    BottomRight: () => A,
    DialogButton: () => V,
    EdgeDown: () => _,
    Left: () => C,
    LinkRegionButtonContainer: () => B,
    LinkRegionDelete: () => T,
    LinkRegionDragBox: () => g,
    LinkRegionEdge: () => y,
    LinkRegionGridBox: () => v,
    LinkRegionInfo: () => H,
    LinkRegionSettings: () => E,
    LinkText: () => U,
    Middle: () => w,
    Right: () => D,
    Top: () => x,
    TopLeft: () => b,
    TopRight: () => S,
    bottom: () => L,
    bottomleft: () => I,
    bottomright: () => R,
    default: () => W,
    left: () => P,
    middle: () => z,
    right: () => F,
    top: () => M,
    topleft: () => j,
    topright: () => N,
  }),
  g = `nUuv5WlFHKU-`,
  _ = `JsVZp4CAPKg-`,
  v = `s3jO9FbN4u4-`,
  y = `SO1XLFjtCbU-`,
  b = `TpO-SNRNS-E-`,
  x = `lmnZa-M7bq0-`,
  S = `LDrqaW8EJl8-`,
  C = `WEHXDbI-0ZI-`,
  w = `hc0dk3OoBCU-`,
  T = `o5BUe1m-4BM-`,
  E = `-e4w8MaVU8k-`,
  D = `V3hcFn4-kHE-`,
  O = `RIIVuSM7Y6Y-`,
  k = `dkKyB9jj9aI-`,
  A = `R4iVDKb6zeU-`,
  j = `fzzwZd4-ISg-`,
  M = `Oo4-WMoHDeE-`,
  N = `D8BWJF43X-Q-`,
  P = `Yc8TU3u-VW4-`,
  F = `KMAHJAnBe6Q-`,
  I = `bxVoRh5lFi4-`,
  L = `e2-ZZOF2QKQ-`,
  R = `XUrOCtEsKxM-`,
  z = `TSm-D5CZFsE-`,
  B = `fzB9IY83oAQ-`,
  V = `RpcfV3ZNn8s-`,
  H = `_1Be3592R7Ao-`,
  U = `m9bHoo6uIPM-`,
  W = {
    LinkRegionDragBox: g,
    EdgeDown: _,
    LinkRegionGridBox: v,
    LinkRegionEdge: y,
    TopLeft: b,
    Top: x,
    TopRight: S,
    Left: C,
    Middle: w,
    LinkRegionDelete: T,
    LinkRegionSettings: E,
    Right: D,
    BottomLeft: O,
    Bottom: k,
    BottomRight: A,
    topleft: j,
    top: M,
    topright: N,
    left: P,
    right: F,
    bottomleft: I,
    bottom: L,
    bottomright: R,
    middle: z,
    LinkRegionButtonContainer: B,
    DialogButton: V,
    LinkRegionInfo: H,
    LinkText: U,
  },
  G = r(),
  K = class extends m.Component {
    m_rectLinkRegion;
    m_elLinkRegionBox;
    m_nLocalOffsetXPct;
    m_nLocalOffsetYPct;
    m_fnMouseUp = null;
    m_fnMouseMove = null;
    m_listeners = new d();
    m_strDescription = ``;
    m_aspectRatio = 1;
    componentWillUnmount() {
      this.m_listeners.Unregister();
    }
    constructor(e) {
      super(e),
        (this.state = {
          curLeftPosPct: this.props.xPosPct,
          curTopPosPct: this.props.yPosPct,
          curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
          curBottomPosPct: 100 - (this.props.yPosPct + this.props.heightPct),
          curWidthPct: this.props.widthPct,
          curHeightPct: this.props.heightPct,
          EdgeDown: void 0,
          text_link_url: this.props.link_url,
          text_link_description: this.props.link_description,
          bEditingLink: !1,
          valid_link: this.validateUrl(this.props.link_url),
        }),
        (this.m_strDescription = this.props.link_description ?? ``),
        (this.m_aspectRatio =
          this.props.heightPct > 0 && this.props.widthPct > 0
            ? this.props.widthPct / this.props.heightPct
            : 1);
    }
    LinkRegionBoxRef(e) {
      this.m_elLinkRegionBox = e;
    }
    OnMouseDown(e, t) {
      this.m_elLinkRegionBox?.parentElement &&
        this.m_elLinkRegionBox.ownerDocument.defaultView &&
        ((this.m_fnMouseUp = (e) => {
          this.OnMouseUp(e, t);
        }),
        (this.m_fnMouseMove = (e) => {
          this.OnMouseMove(e, t);
        }),
        this.setState({ EdgeDown: t }),
        (this.m_rectLinkRegion =
          this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
        (this.m_nLocalOffsetXPct =
          ((e.clientX - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
          this.state.curLeftPosPct),
        (this.m_nLocalOffsetYPct =
          ((e.clientY - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
          this.state.curTopPosPct),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mousemove`,
          this.m_fnMouseMove,
        ),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mouseup`,
          this.m_fnMouseUp,
        )),
        e.preventDefault(),
        e.stopPropagation();
    }
    OnMouseMove(e, t) {
      if (this.state.EdgeDown !== void 0) {
        switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
          case `left`:
            this.UpdateState({ curLeftPosPct: this.CalcLeftEdge(e.clientX) });
            break;
          case `right`:
            this.UpdateState({ curRightPosPct: this.CalcRightEdge(e.clientX) });
            break;
          case `top`:
            this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
            break;
          case `bottom`:
            this.UpdateState({
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `topleft`:
            this.UpdateState({
              curTopPosPct: this.CalcBottomEdge(e.clientY),
              curLeftPosPct: this.CalcLeftEdge(e.clientX),
            });
            break;
          case `topright`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(e.clientY),
              curRightPosPct: this.CalcRightEdge(e.clientX),
            });
            break;
          case `bottomleft`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(e.clientX),
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `bottomright`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(e.clientX),
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `middle`: {
            let t = a(
                this.CalcLeftEdge(e.clientX),
                0,
                100 - this.state.curWidthPct,
              ),
              n = 100 - (t + this.state.curWidthPct),
              r = a(
                this.CalcTopEdge(e.clientY),
                0,
                100 - this.state.curHeightPct,
              ),
              i = {
                curLeftPosPct: t,
                curRightPosPct: n,
                curTopPosPct: r,
                curBottomPosPct: 100 - (r + this.state.curHeightPct),
              };
            this.setState(i);
            break;
          }
        }
        e.preventDefault(), e.stopPropagation();
      }
    }
    IsValidPct(e) {
      return e >= 0 && e <= 100;
    }
    UpdateState(e) {
      let t =
          e.curTopPosPct === void 0 ? this.state.curTopPosPct : e.curTopPosPct,
        n =
          e.curBottomPosPct === void 0
            ? this.state.curBottomPosPct
            : e.curBottomPosPct,
        r =
          e.curLeftPosPct === void 0
            ? this.state.curLeftPosPct
            : e.curLeftPosPct,
        i =
          e.curRightPosPct === void 0
            ? this.state.curRightPosPct
            : e.curRightPosPct,
        o = a(
          100 - i - r,
          this.props.widthMinPct || 0,
          this.props.widthMaxPct || 100,
        ),
        s = a(
          100 - n - t,
          this.props.heightMinPct || 0,
          this.props.heightMaxPct || 100,
        );
      this.props.bLockAspectRatio &&
        (e.curLeftPosPct !== void 0 || e.curRightPosPct !== void 0
          ? (s = o / this.m_aspectRatio)
          : (o = s * this.m_aspectRatio)),
        e.curLeftPosPct === void 0 ? (i = 100 - (r + o)) : (r = 100 - i - o),
        e.curTopPosPct === void 0 ? (n = 100 - (t + s)) : (t = 100 - n - s);
      let c = 100 - i - r,
        l = 100 - n - t;
      this.IsValidPct(r) &&
        this.IsValidPct(i) &&
        this.IsValidPct(t) &&
        this.IsValidPct(n) &&
        this.IsValidPct(c) &&
        this.IsValidPct(l) &&
        this.setState({
          curLeftPosPct: r,
          curRightPosPct: i,
          curTopPosPct: t,
          curBottomPosPct: n,
        });
    }
    GetXPercent(e) {
      return this.m_rectLinkRegion
        ? ((e - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
            (this.m_nLocalOffsetXPct ?? 0)
        : 0;
    }
    GetYPercent(e) {
      return this.m_rectLinkRegion
        ? ((e - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
            (this.m_nLocalOffsetYPct ?? 0)
        : 0;
    }
    CalcLeftEdge(e) {
      return a(this.GetXPercent(e), 0, 100);
    }
    CalcRightEdge(e) {
      return a(100 - (this.GetXPercent(e) + this.state.curWidthPct), 0, 100);
    }
    CalcTopEdge(e) {
      return a(this.GetYPercent(e), 0, 100);
    }
    CalcBottomEdge(e) {
      return a(100 - (this.GetYPercent(e) + this.state.curHeightPct), 0, 100);
    }
    OnMouseUp(e, t) {
      this.setState({
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
      }),
        this.setState({
          curHeightPct:
            100 - this.state.curBottomPosPct - this.state.curTopPosPct,
        }),
        this.setState({ EdgeDown: void 0 }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }),
        this.m_listeners.Unregister();
    }
    async HandleDelete() {
      this.props.deleteFn && this.props.deleteFn(this.props.index);
    }
    OnSetLinkURLChange(e) {
      this.setState({
        text_link_url: e.target.value,
        valid_link: this.validateUrl(e.target.value),
      });
    }
    OnSetLinkDescriptionChange(e) {
      this.setState({ text_link_description: e.target.value });
    }
    validateUrl(e) {
      return (
        e != null &&
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        )
      );
    }
    OnSaveLink() {
      (this.m_strDescription = this.state.text_link_description ?? ``),
        this.setState({ bEditingLink: !this.state.bEditingLink }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        });
    }
    OnEditLink() {
      this.setState({ bEditingLink: !this.state.bEditingLink });
    }
    render() {
      let e = {
          left: this.state.curLeftPosPct + `%`,
          top: this.state.curTopPosPct + `%`,
          right: this.state.curRightPosPct + `%`,
          bottom: this.state.curBottomPosPct + `%`,
        },
        t = g;
      return (
        this.state.EdgeDown != null && (t += ` ${_} ` + h[this.state.EdgeDown]),
        (0, G.jsxs)(`div`, {
          className: t,
          style: e,
          ref: this.LinkRegionBoxRef,
          draggable: !1,
          children: [
            (0, G.jsxs)(`div`, {
              className: v,
              children: [
                (0, G.jsx)(`div`, {
                  className: `${y} ${b}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topleft`);
                  },
                  draggable: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${x}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `top`);
                  },
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${S}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topright`);
                  },
                  draggable: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${C}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `left`);
                  },
                  draggable: !1,
                }),
                (0, G.jsxs)(`div`, {
                  className: `${y} ${w}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `middle`);
                  },
                  draggable: !1,
                  children: [
                    this.props.deleteFn &&
                      (0, G.jsx)(`div`, {
                        className: `o5BUe1m-4BM-`,
                        onClick: this.HandleDelete,
                        children: (0, G.jsx)(p, {}),
                      }),
                    !this.props.bDisableLink &&
                      (0, G.jsx)(`div`, {
                        className: `-e4w8MaVU8k-`,
                        onClick: this.OnEditLink,
                        children: (0, G.jsx)(l, {}),
                      }),
                    (0, G.jsxs)(`div`, {
                      className: U,
                      children: [` `, this.m_strDescription, ` `],
                    }),
                  ],
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${D}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `right`);
                  },
                  draggable: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${O}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottomleft`);
                  },
                  draggable: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${k}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottom`);
                  },
                  draggable: !1,
                }),
                (0, G.jsx)(`div`, {
                  className: `${y} ${A}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottomright`);
                  },
                  draggable: !1,
                }),
              ],
            }),
            this.state.bEditingLink &&
              (0, G.jsxs)(`div`, {
                className: `_1Be3592R7Ao-`,
                children: [
                  (0, G.jsx)(u, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    value: this.state.text_link_url,
                    label: c(`#SteamTV_LinkURL`),
                    placeholder: `https://www.example.com`,
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  (0, G.jsx)(u, {
                    className: void 0,
                    type: `text`,
                    name: `link_description`,
                    value: this.state.text_link_description,
                    label: c(`#SteamTV_LinkDescription`),
                    placeholder: c(`#SteamTV_LinkDescription_Placeholder`),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  (0, G.jsxs)(`div`, {
                    className: `fzB9IY83oAQ-`,
                    children: [
                      (0, G.jsxs)(f, {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                        children: [` `, c(`#Button_OK`), ` `],
                      }),
                      (0, G.jsxs)(f, {
                        onClick: this.OnEditLink,
                        children: [` `, c(`#Button_Cancel`)],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      );
    }
  };
o([s], K.prototype, `LinkRegionBoxRef`, null),
  o([s], K.prototype, `OnMouseDown`, null),
  o([s], K.prototype, `OnMouseMove`, null),
  o([s], K.prototype, `OnMouseUp`, null),
  o([s], K.prototype, `HandleDelete`, null),
  o([s], K.prototype, `OnSetLinkURLChange`, null),
  o([s], K.prototype, `OnSetLinkDescriptionChange`, null),
  o([s], K.prototype, `OnSaveLink`, null),
  o([s], K.prototype, `OnEditLink`, null),
  (K = o([i], K));
export { K as t };

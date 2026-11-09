import { _, _, _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./src.js";
import { _, _, _, _, _ } from "./dialogs.js";
import { _ } from "./react-router.js";
var _ = _(_()),
  _ = _({
    Bottom: () => _,
    BottomLeft: () => _,
    BottomRight: () => _,
    DialogButton: () => _,
    EdgeDown: () => _,
    Left: () => _,
    LinkRegionButtonContainer: () => _,
    LinkRegionDelete: () => _,
    LinkRegionDragBox: () => _,
    LinkRegionEdge: () => _,
    LinkRegionGridBox: () => _,
    LinkRegionInfo: () => _,
    LinkRegionSettings: () => _,
    LinkText: () => _,
    Middle: () => _,
    Right: () => _,
    Top: () => _,
    TopLeft: () => _,
    TopRight: () => _,
    bottom: () => _,
    bottomleft: () => _,
    bottomright: () => _,
    default: () => _,
    left: () => _,
    middle: () => _,
    right: () => _,
    top: () => _,
    topleft: () => _,
    topright: () => _,
  }),
  _ = `nUuv5WlFHKU-`,
  _ = `JsVZp4CAPKg-`,
  _ = `s3jO9FbN4u4-`,
  _ = `SO1XLFjtCbU-`,
  _ = `TpO-SNRNS-E-`,
  _ = `lmnZa-M7bq0-`,
  _ = `LDrqaW8EJl8-`,
  _ = `WEHXDbI-0ZI-`,
  _ = `hc0dk3OoBCU-`,
  _ = `o5BUe1m-4BM-`,
  _ = `-e4w8MaVU8k-`,
  _ = `V3hcFn4-kHE-`,
  _ = `RIIVuSM7Y6Y-`,
  _ = `dkKyB9jj9aI-`,
  _ = `R4iVDKb6zeU-`,
  _ = `fzzwZd4-ISg-`,
  _ = `Oo4-WMoHDeE-`,
  _ = `D8BWJF43X-Q-`,
  _ = `Yc8TU3u-VW4-`,
  _ = `KMAHJAnBe6Q-`,
  _ = `bxVoRh5lFi4-`,
  _ = `e2-ZZOF2QKQ-`,
  _ = `XUrOCtEsKxM-`,
  _ = `TSm-D5CZFsE-`,
  _ = `fzB9IY83oAQ-`,
  _ = `RpcfV3ZNn8s-`,
  _ = `_1Be3592R7Ao-`,
  _ = `m9bHoo6uIPM-`,
  _ = {
    LinkRegionDragBox: _,
    EdgeDown: _,
    LinkRegionGridBox: _,
    LinkRegionEdge: _,
    TopLeft: _,
    Top: _,
    TopRight: _,
    Left: _,
    Middle: _,
    LinkRegionDelete: _,
    LinkRegionSettings: _,
    Right: _,
    BottomLeft: _,
    Bottom: _,
    BottomRight: _,
    topleft: _,
    top: _,
    topright: _,
    left: _,
    right: _,
    bottomleft: _,
    bottom: _,
    bottomright: _,
    middle: _,
    LinkRegionButtonContainer: _,
    DialogButton: _,
    LinkRegionInfo: _,
    LinkText: _,
  },
  _ = _(),
  _ = class extends _.Component {
    m_rectLinkRegion;
    m_elLinkRegionBox;
    m_nLocalOffsetXPct;
    m_nLocalOffsetYPct;
    m_fnMouseUp = null;
    m_fnMouseMove = null;
    m_listeners = new _();
    m_strDescription = ``;
    m_aspectRatio = 1;
    componentWillUnmount() {
      this.m_listeners.Unregister();
    }
    constructor(_) {
      (super(_),
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
            : 1));
    }
    LinkRegionBoxRef(_) {
      this.m_elLinkRegionBox = _;
    }
    OnMouseDown(_, _) {
      (this.m_elLinkRegionBox?.parentElement &&
        this.m_elLinkRegionBox.ownerDocument.defaultView &&
        ((this.m_fnMouseUp = (_) => {
          this.OnMouseUp(_, _);
        }),
        (this.m_fnMouseMove = (_) => {
          this.OnMouseMove(_, _);
        }),
        this.setState({
          EdgeDown: _,
        }),
        (this.m_rectLinkRegion =
          this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
        (this.m_nLocalOffsetXPct =
          ((_.clientX - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
          this.state.curLeftPosPct),
        (this.m_nLocalOffsetYPct =
          ((_.clientY - this.m_rectLinkRegion.top) /
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
        _.preventDefault(),
        _.stopPropagation());
    }
    OnMouseMove(_, _) {
      if (this.state.EdgeDown !== void 0) {
        switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
          case `left`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
            });
            break;
          case `right`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(_.clientX),
            });
            break;
          case `top`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(_.clientY),
            });
            break;
          case `bottom`:
            this.UpdateState({
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `topleft`:
            this.UpdateState({
              curTopPosPct: this.CalcBottomEdge(_.clientY),
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
            });
            break;
          case `topright`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(_.clientY),
              curRightPosPct: this.CalcRightEdge(_.clientX),
            });
            break;
          case `bottomleft`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(_.clientX),
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `bottomright`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(_.clientX),
              curBottomPosPct: this.CalcBottomEdge(_.clientY),
            });
            break;
          case `middle`: {
            let _ = _(
                this.CalcLeftEdge(_.clientX),
                0,
                100 - this.state.curWidthPct,
              ),
              _ = 100 - (_ + this.state.curWidthPct),
              _ = _(
                this.CalcTopEdge(_.clientY),
                0,
                100 - this.state.curHeightPct,
              ),
              _ = {
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: 100 - (_ + this.state.curHeightPct),
              };
            this.setState(_);
            break;
          }
        }
        (_.preventDefault(), _.stopPropagation());
      }
    }
    IsValidPct(_) {
      return _ >= 0 && _ <= 100;
    }
    UpdateState(_) {
      let _ =
          _.curTopPosPct === void 0 ? this.state.curTopPosPct : _.curTopPosPct,
        _ =
          _.curBottomPosPct === void 0
            ? this.state.curBottomPosPct
            : _.curBottomPosPct,
        _ =
          _.curLeftPosPct === void 0
            ? this.state.curLeftPosPct
            : _.curLeftPosPct,
        _ =
          _.curRightPosPct === void 0
            ? this.state.curRightPosPct
            : _.curRightPosPct,
        _ = _(
          100 - _ - _,
          this.props.widthMinPct || 0,
          this.props.widthMaxPct || 100,
        ),
        _ = _(
          100 - _ - _,
          this.props.heightMinPct || 0,
          this.props.heightMaxPct || 100,
        );
      (this.props.bLockAspectRatio &&
        (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
          ? (_ = _ / this.m_aspectRatio)
          : (_ = _ * this.m_aspectRatio)),
        _.curLeftPosPct === void 0 ? (_ = 100 - (_ + _)) : (_ = 100 - _ - _),
        _.curTopPosPct === void 0 ? (_ = 100 - (_ + _)) : (_ = 100 - _ - _));
      let _ = 100 - _ - _,
        _ = 100 - _ - _;
      this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.IsValidPct(_) &&
        this.setState({
          curLeftPosPct: _,
          curRightPosPct: _,
          curTopPosPct: _,
          curBottomPosPct: _,
        });
    }
    GetXPercent(_) {
      return this.m_rectLinkRegion
        ? ((_ - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
            (this.m_nLocalOffsetXPct ?? 0)
        : 0;
    }
    GetYPercent(_) {
      return this.m_rectLinkRegion
        ? ((_ - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
            (this.m_nLocalOffsetYPct ?? 0)
        : 0;
    }
    CalcLeftEdge(_) {
      return _(this.GetXPercent(_), 0, 100);
    }
    CalcRightEdge(_) {
      return _(100 - (this.GetXPercent(_) + this.state.curWidthPct), 0, 100);
    }
    CalcTopEdge(_) {
      return _(this.GetYPercent(_), 0, 100);
    }
    CalcBottomEdge(_) {
      return _(100 - (this.GetYPercent(_) + this.state.curHeightPct), 0, 100);
    }
    OnMouseUp(_, _) {
      (this.setState({
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
      }),
        this.setState({
          curHeightPct:
            100 - this.state.curBottomPosPct - this.state.curTopPosPct,
        }),
        this.setState({
          EdgeDown: void 0,
        }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }),
        this.m_listeners.Unregister());
    }
    async HandleDelete() {
      this.props.deleteFn && this.props.deleteFn(this.props.index);
    }
    OnSetLinkURLChange(_) {
      this.setState({
        text_link_url: _.target.value,
        valid_link: this.validateUrl(_.target.value),
      });
    }
    OnSetLinkDescriptionChange(_) {
      this.setState({
        text_link_description: _.target.value,
      });
    }
    validateUrl(_) {
      return (
        _ != null &&
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          _,
        )
      );
    }
    OnSaveLink() {
      ((this.m_strDescription = this.state.text_link_description ?? ``),
        this.setState({
          bEditingLink: !this.state.bEditingLink,
        }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }));
    }
    OnEditLink() {
      this.setState({
        bEditingLink: !this.state.bEditingLink,
      });
    }
    render() {
      let _ = {
          left: this.state.curLeftPosPct + `%`,
          top: this.state.curTopPosPct + `%`,
          right: this.state.curRightPosPct + `%`,
          bottom: this.state.curBottomPosPct + `%`,
        },
        _ = _;
      return (
        this.state.EdgeDown != null && (_ += ` ${_} ` + _[this.state.EdgeDown]),
        (0, _.jsxs)(`div`, {
          className: _,
          style: _,
          ref: this.LinkRegionBoxRef,
          draggable: !1,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `topleft`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `top`);
                  },
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `topright`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `left`);
                  },
                  draggable: !1,
                }),
                (0, _.jsxs)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `middle`);
                  },
                  draggable: !1,
                  children: [
                    this.props.deleteFn &&
                      (0, _.jsx)(`div`, {
                        className: `o5BUe1m-4BM-`,
                        onClick: this.HandleDelete,
                        children: (0, _.jsx)(_, {}),
                      }),
                    !this.props.bDisableLink &&
                      (0, _.jsx)(`div`, {
                        className: `-e4w8MaVU8k-`,
                        onClick: this.OnEditLink,
                        children: (0, _.jsx)(_, {}),
                      }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [` `, this.m_strDescription, ` `],
                    }),
                  ],
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `right`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottomleft`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottom`);
                  },
                  draggable: !1,
                }),
                (0, _.jsx)(`div`, {
                  className: `${_} ${_}`,
                  onMouseDown: (_) => {
                    this.OnMouseDown(_, `bottomright`);
                  },
                  draggable: !1,
                }),
              ],
            }),
            this.state.bEditingLink &&
              (0, _.jsxs)(`div`, {
                className: `_1Be3592R7Ao-`,
                children: [
                  (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    value: this.state.text_link_url,
                    label: _(`#SteamTV_LinkURL`),
                    placeholder: `https://www.example.com`,
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  (0, _.jsx)(_, {
                    className: void 0,
                    type: `text`,
                    name: `link_description`,
                    value: this.state.text_link_description,
                    label: _(`#SteamTV_LinkDescription`),
                    placeholder: _(`#SteamTV_LinkDescription_Placeholder`),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  (0, _.jsxs)(`div`, {
                    className: `fzB9IY83oAQ-`,
                    children: [
                      (0, _.jsxs)(_, {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                        children: [` `, _(`#Button_OK`), ` `],
                      }),
                      (0, _.jsxs)(_, {
                        onClick: this.OnEditLink,
                        children: [` `, _(`#Button_Cancel`)],
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
(_([_], _.prototype, `LinkRegionBoxRef`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `HandleDelete`, null),
  _([_], _.prototype, `OnSetLinkURLChange`, null),
  _([_], _.prototype, `OnSetLinkDescriptionChange`, null),
  _([_], _.prototype, `OnSaveLink`, null),
  _([_], _.prototype, `OnEditLink`, null),
  (_ = _([_], _)));

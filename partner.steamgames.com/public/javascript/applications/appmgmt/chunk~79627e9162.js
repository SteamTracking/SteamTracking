/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  At as t,
  C as n,
  D as r,
  Q as i,
  S as a,
  X as o,
  en as s,
  in as c,
  j as l,
  sn as u,
  t as d,
  vt as f,
  wt as p,
} from "./chunk~de7f2df91c.js";
import { It as m, gt as h } from "./chunk~25a6634263.js";
import {
  Mr as g,
  Mt as _,
  Wt as ee,
  an as te,
  ea as ne,
  ni as re,
  ua as v,
  xn as ie,
} from "./chunk~1fa4b8f2ff.js";
import { C as ae } from "./chunk~44f252525d.js";
import { n as oe, t as se } from "./chunk~90b9831ad2.js";
import { t as ce } from "./chunk~f4e4ed5c17.js";
import { t as le } from "./chunk~eefd71512b.js";
import { t as ue } from "./chunk~f0141d9521.js";
import { t as de } from "./chunk~9a3ef4764b.js";
var fe = `UpperLeft`,
  pe = `BottomLeft`,
  me = `UpperCenter`,
  he = `CenterCenter`,
  ge = `BottomCenter`,
  y = u(t()),
  _e = u(d()),
  ve = u(_()),
  ye = u(ce()),
  b = c({
    AddBoxSizer: () => Ve,
    Background: () => we,
    Bottom: () => ze,
    BottomCenter: () => F,
    BottomLeft: () => I,
    BottomRight: () => Be,
    BoxSizer: () => je,
    BoxSizerButtonContainer: () => Ue,
    BoxSizerContainer: () => z,
    BoxSizerDelete: () => Ie,
    BoxSizerDragBox: () => B,
    BoxSizerEdge: () => C,
    BoxSizerGridBox: () => V,
    BoxSizerInfo: () => Ge,
    BoxSizerSettings: () => Le,
    BoxSizerValidRegion: () => T,
    CenterCenter: () => P,
    DialogButton: () => We,
    EdgeDown: () => Me,
    FallbackArt: () => Ce,
    Features: () => Je,
    FullscreenEnterActive: () => D,
    FullscreenEnterDone: () => A,
    FullscreenEnterStart: () => E,
    FullscreenExitActive: () => O,
    FullscreenExitDone: () => k,
    FullscreenExitStart: () => j,
    HeaderBackgroundImage: () => L,
    Hidden: () => Ae,
    ImgBlur: () => ke,
    ImgBlurBackdrop: () => Oe,
    ImgContainer: () => S,
    ImgSrc: () => Se,
    Left: () => Fe,
    Loaded: () => Ee,
    Middle: () => w,
    NoArt: () => xe,
    PinBox: () => R,
    Right: () => Re,
    SVGTitle: () => U,
    SaveBoxSizer: () => He,
    TextNameSpace: () => Ke,
    TitleImageContainer: () => M,
    TitleLogo: () => Te,
    TitleSection: () => qe,
    Top: () => Ne,
    TopCapsule: () => x,
    TopGradient: () => Ye,
    TopLeft: () => H,
    TopRight: () => Pe,
    UpperCenter: () => N,
    UpperLeft: () => De,
    default: () => Xe,
    "duration-app-launch": () => be,
  }),
  be = `800ms`,
  x = `i9KcRmbfbvg-`,
  xe = `c8uauX6-os0-`,
  Se = `oAbYPcN6xMk-`,
  S = `_1SO3fzpXZMg-`,
  Ce = `MPvvDvGTX4E-`,
  C = `qugr6Zt0UpU-`,
  w = `rotRuUkbxFk-`,
  T = `nE-LwRJzvNM-`,
  we = `B-kJ5tyfqxc-`,
  E = `TsklQsuuuH0-`,
  D = `i9nCLUP83y4-`,
  O = `Y8NCjbBXuK4-`,
  k = `DII4zPcGweo-`,
  A = `h5Ihk5Z6UJM-`,
  j = `N7OpGIp-XYQ-`,
  M = `hNHwGI-JZlg-`,
  N = `-gpYK65-PO8-`,
  P = `_1tt49wVUYGo-`,
  F = `lc-HOHVK5w8-`,
  Te = `MDlRNe2WCnA-`,
  Ee = `MP7DM-J-SM4-`,
  I = `-Es6N1qaYoU-`,
  De = `RDOYLMLdjVY-`,
  L = `rzNYjeGJ-u8-`,
  Oe = `ArI6ZTmOyrU-`,
  ke = `EqH7klwhYE0-`,
  Ae = `EQ-825XS0V4-`,
  R = `EmNTtllgxMI-`,
  z = `C-aKiFBaz1Q-`,
  je = `qmSsmzf9b4E-`,
  B = `jtN5LA-jzD8-`,
  Me = `PIhA-Ktj63o-`,
  V = `KH5XNXoWh7U-`,
  H = `_4RGLcD-ArfM-`,
  Ne = `b5wAq2zSbDc-`,
  Pe = `Mw0yGs5oSLU-`,
  Fe = `xspvMGB5joQ-`,
  Ie = `UMKKmuRdYWA-`,
  Le = `ogQSspF5HQk-`,
  Re = `jyaV-ixSN5g-`,
  ze = `VJbyEhOgKD8-`,
  Be = `_05YGjnOccl4-`,
  Ve = `Cjoh4St2zts-`,
  He = `eMqdLgUR0-o-`,
  Ue = `-iZUXuLHieY-`,
  We = `v23YCbae3-M-`,
  Ge = `IAKrDVUwKA0-`,
  Ke = `vFsfSZsB8Sg-`,
  qe = `jwmOqyEZJ3c-`,
  Je = `f1Tpbhps2NE-`,
  U = `_6YJu921-BwU-`,
  Ye = `xfGCvZ43jJQ-`,
  Xe = {
    "duration-app-launch": `800ms`,
    TopCapsule: x,
    NoArt: xe,
    ImgSrc: Se,
    ImgContainer: S,
    FallbackArt: Ce,
    BoxSizerEdge: C,
    Middle: w,
    BoxSizerValidRegion: T,
    Background: we,
    FullscreenEnterStart: E,
    FullscreenEnterActive: D,
    FullscreenExitActive: O,
    FullscreenExitDone: k,
    FullscreenEnterDone: A,
    FullscreenExitStart: j,
    TitleImageContainer: M,
    UpperCenter: N,
    CenterCenter: P,
    BottomCenter: F,
    TitleLogo: Te,
    Loaded: Ee,
    BottomLeft: I,
    UpperLeft: De,
    HeaderBackgroundImage: L,
    ImgBlurBackdrop: Oe,
    ImgBlur: ke,
    Hidden: Ae,
    PinBox: R,
    BoxSizerContainer: z,
    BoxSizer: je,
    BoxSizerDragBox: B,
    EdgeDown: Me,
    BoxSizerGridBox: V,
    TopLeft: H,
    Top: Ne,
    TopRight: Pe,
    Left: Fe,
    BoxSizerDelete: Ie,
    BoxSizerSettings: Le,
    Right: Re,
    Bottom: ze,
    BottomRight: Be,
    AddBoxSizer: Ve,
    SaveBoxSizer: He,
    BoxSizerButtonContainer: Ue,
    DialogButton: We,
    BoxSizerInfo: Ge,
    TextNameSpace: Ke,
    TitleSection: qe,
    Features: Je,
    SVGTitle: U,
    TopGradient: Ye,
  },
  Ze = `800ms`,
  W = f(),
  G = {
    exit: j,
    exitActive: O,
    exitDone: k,
    enter: E,
    enterDone: A,
    enterActive: D,
  },
  K = ie(Ze),
  q = { pinnedPosition: pe, nWidthPct: 50, nHeightPct: 50 },
  J = y.createContext({ bFullscreen: !1 }),
  Y = class extends y.Component {
    m_refTopCapsule = y.createRef();
    constructor(e) {
      (super(e), (this.state = { logoPosition: void 0 }));
    }
    componentDidUpdate(e) {
      (e.appid != this.props.appid || e.editMode != this.props.editMode) &&
        this.setState({ logoPosition: void 0 });
    }
    get background_src() {
      return this.m_refTopCapsule.current?.background_src;
    }
    get logo_src() {
      return this.m_refTopCapsule.current?.logo_src;
    }
    GetLogoPosition() {
      return this.state.logoPosition || this.props.logoPosition || q;
    }
    SetPinnedPosition(e) {
      this.setState(
        { logoPosition: { ...this.GetLogoPosition(), pinnedPosition: e } },
        this.PostPositionChangeCallback,
      );
    }
    SetDimensions(e, t) {
      this.setState(
        {
          logoPosition: {
            ...this.GetLogoPosition(),
            nWidthPct: e,
            nHeightPct: t,
          },
        },
        this.PostPositionChangeCallback,
      );
    }
    OnPositionChanged(e) {
      this.SetDimensions(e.nWidthPct, e.nHeightPct);
    }
    PostPositionChangeCallback() {
      this.props.fnOnPositionChanged &&
        this.props.fnOnPositionChanged(this.GetLogoPosition());
    }
    render() {
      if (!this.props.editMode)
        return (0, W.jsx)(J.Provider, {
          value: { bFullscreen: this.props.bFullscreen },
          children: (0, W.jsx)(X, { ref: this.m_refTopCapsule, ...this.props }),
        });
      let { children: e, logoPosition: t, editMode: n, ...r } = this.props,
        i = this.GetLogoPosition();
      return (0, W.jsx)(J.Provider, {
        value: { bFullscreen: this.props.bFullscreen },
        children: (0, W.jsxs)(X, {
          ref: this.m_refTopCapsule,
          ...r,
          editMode: !0,
          logoPosition: i,
          fnOnPositionChanged: this.OnPositionChanged,
          children: [
            (0, W.jsx)(`div`, {
              className: `${R} ${I}`,
              onClick: () => this.SetPinnedPosition(pe),
              title: `Pin to Bottom Left`,
            }),
            (0, W.jsx)(`div`, {
              className: `${R} ${N}`,
              onClick: () => this.SetPinnedPosition(me),
              title: `Pin to Top Center`,
            }),
            (0, W.jsx)(`div`, {
              className: `${R} ${P}`,
              onClick: () => this.SetPinnedPosition(he),
              title: `Pin to Center`,
            }),
            (0, W.jsx)(`div`, {
              className: `${R} ${F}`,
              onClick: () => this.SetPinnedPosition(ge),
              title: `Pin to Bottom Center`,
            }),
            e,
          ],
        }),
      });
    }
  };
(e([m], Y.prototype, `SetDimensions`, null),
  e([m], Y.prototype, `OnPositionChanged`, null),
  e([m], Y.prototype, `PostPositionChangeCallback`, null));
var X = class extends y.Component {
  m_refBackgroundImage = y.createRef();
  m_refLogoImage = y.createRef();
  constructor(e) {
    (super(e),
      s(
        !e.editMode || e.rgLogoImages.length <= 1,
        `Can't use multiple logo images in edit mode`,
      ),
      (this.state = {
        bHasHeaderImage: e.rgHeaderImages.length > 0,
        bHasLogoImage: e.rgLogoImages.length > 0,
        bLogoLoaded: !1,
      }));
  }
  componentDidUpdate(e) {
    let t = null;
    ((JSON.stringify(e.rgHeaderImages) !=
      JSON.stringify(this.props.rgHeaderImages) ||
      JSON.stringify(e.rgBlurImages) !=
        JSON.stringify(this.props.rgBlurImages)) &&
      ((t ||= {}), (t.bHasHeaderImage = this.props.rgHeaderImages.length > 0)),
      JSON.stringify(e.rgLogoImages) !=
        JSON.stringify(this.props.rgLogoImages) &&
        ((t ||= {}),
        (t.bHasLogoImage = this.props.rgLogoImages.length > 0),
        (t.bLogoLoaded = !1)),
      t && this.setState(t));
  }
  OnHeaderError() {
    (this.setState({ bHasHeaderImage: !1 }),
      this.props.fnOnLoaded && this.props.fnOnLoaded());
  }
  OnIncrementalLogoError(e, t, n) {
    (this.props.fnReportLogoCacheMiss &&
      this.props.appid !== void 0 &&
      this.props.fnReportLogoCacheMiss(this.props.appid, t),
      this.props.fnOnLoaded && this.props.fnOnLoaded());
  }
  OnLogoError() {
    this.setState({ bHasLogoImage: !1 }, () => {
      this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
    });
  }
  OnLogoLoad() {
    this.setState({ bLogoLoaded: !0 }, () => {
      this.props.fnOnLogoLoaded && this.props.fnOnLogoLoaded();
    });
  }
  OnLoaded() {
    this.props.fnOnLoaded && this.props.fnOnLoaded();
  }
  get background_src() {
    if (this.state.bHasHeaderImage)
      return this.m_refBackgroundImage.current?.src;
  }
  get logo_src() {
    if (this.state.bLogoLoaded)
      return this.m_refLogoImage.current?.imgRef?.current?.src;
  }
  render() {
    let {
        rgLogoImages: e,
        editMode: t,
        logoPosition: n,
        className: r,
        classNameNoLogo: i,
        fnOnPositionChanged: a,
        height: o,
      } = this.props,
      { bHasLogoImage: s } = this.state,
      c = l(
        x,
        r,
        !this.state.bHasHeaderImage && `c8uauX6-os0-`,
        !this.props.hasHeroImage && `MPvvDvGTX4E-`,
        !s && i,
      ),
      u = { "--header-height": o == null ? void 0 : o + `px` };
    return (0, W.jsx)(se, {
      timeout: K,
      appear: !0,
      in: this.props.bFullscreen,
      classNames: G,
      children: (r) =>
        (0, W.jsxs)(`div`, {
          ref: r,
          className: c,
          style: u,
          children: [
            (0, W.jsx)(Z, {
              ref: this.m_refBackgroundImage,
              bLowPerfMode: this.props.bLowPerfMode,
              appid: this.props.appid,
              rgHeaderImages: this.props.rgHeaderImages,
              rgBlurImages: this.props.rgBlurImages,
              onError: this.OnHeaderError,
              onLoad: this.OnLoaded,
            }),
            s &&
              n !== null &&
              (0, W.jsx)(
                Qe,
                {
                  strLogoImageURL: e[0],
                  editMode: t,
                  logoPosition: n || q,
                  fnOnPositionChanged: a,
                  fullscreen: !!this.props.bFullscreen,
                  children: (0, W.jsx)(ue, {
                    ref: this.m_refLogoImage,
                    className: l(
                      `MDlRNe2WCnA-`,
                      this.state.bLogoLoaded && `MP7DM-J-SM4-`,
                    ),
                    rgSources: e,
                    onLoad: this.OnLogoLoad,
                    onIncrementalError: this.OnIncrementalLogoError,
                    onError: this.OnLogoError,
                  }),
                },
                e[0],
              ),
            this.props.children,
            (0, W.jsx)(`div`, { className: Ye }),
          ],
        }),
    });
  }
};
(e([m], X.prototype, `OnHeaderError`, null),
  e([m], X.prototype, `OnIncrementalLogoError`, null),
  e([m], X.prototype, `OnLogoError`, null),
  e([m], X.prototype, `OnLogoLoad`, null),
  e([m], X.prototype, `OnLoaded`, null),
  (X = e([ae], X)));
var Z = class extends y.Component {
  m_refBackgroundImage = y.createRef();
  m_refCanvasBlurImage;
  m_elBackgroundImage = null;
  constructor(e) {
    (super(e),
      (this.state = {
        bBackgroundLoaded: !1,
        strLoadedBlurImage: null,
        nBlurImageIndex: 0,
        bUseCanvasBlur: !this.HasBlurImages(),
      }));
  }
  componentDidMount() {
    (!this.HasHeaderImages() && this.props.onLoad && this.props.onLoad(),
      this.CheckForLoadedImage());
  }
  componentDidUpdate(e) {
    ((e.appid != this.props.appid ||
      JSON.stringify(e.rgHeaderImages) !=
        JSON.stringify(this.props.rgHeaderImages) ||
      JSON.stringify(e.rgBlurImages) !=
        JSON.stringify(this.props.rgBlurImages) ||
      this.props.bLowPerfMode != e.bLowPerfMode) &&
      (this.setState({
        bBackgroundLoaded: !1,
        nBlurImageIndex: 0,
        bUseCanvasBlur: !this.HasBlurImages(),
      }),
      !this.HasHeaderImages() && this.props.onLoad && this.props.onLoad(),
      (this.m_elBackgroundImage = null)),
      this.CheckForLoadedImage());
  }
  CheckForLoadedImage() {
    let e = this.m_refBackgroundImage.current?.imgRef.current ?? null;
    e !== this.m_elBackgroundImage &&
      ((this.m_elBackgroundImage = e),
      e?.complete && e.naturalWidth > 0 && this.ShowHeaderImage(e));
  }
  ShowHeaderImage(e) {
    ((this.m_refCanvasBlurImage = e),
      this.setState((e) => ({
        bBackgroundLoaded: !0,
        bUseCanvasBlur:
          e.bUseCanvasBlur ||
          !this.HasBlurImages() ||
          !this.props.rgBlurImages?.[e.nBlurImageIndex],
      })));
  }
  get src() {
    return this.m_refBackgroundImage.current?.imgRef.current?.src;
  }
  OnIncrementalError(e, t, n) {
    this.HasBlurImages() &&
      this.setState({ nBlurImageIndex: this.state.nBlurImageIndex + 1 });
  }
  OnHeaderLoad() {
    (this.props.onLoad && this.props.onLoad(),
      this.state.bBackgroundLoaded ||
        (0, _e.flushSync)(() =>
          this.ShowHeaderImage(
            this.m_refBackgroundImage.current?.imgRef.current ?? void 0,
          ),
        ));
  }
  OnBlurImageLoaded(e) {
    this.setState({ strLoadedBlurImage: e.currentTarget.getAttribute(`src`) });
  }
  OnBlurImageFailed() {
    this.setState({ bUseCanvasBlur: !0 });
  }
  HasHeaderImages() {
    let e = this.props.rgHeaderImages;
    return e && e.length > 0;
  }
  HasBlurImages() {
    let e = this.props.rgBlurImages;
    return e && e.length > 0;
  }
  render() {
    let e = this.HasBlurImages()
        ? this.props.rgBlurImages?.[this.state.nBlurImageIndex]
        : null,
      t = this.state.strLoadedBlurImage != e,
      n = null;
    return (
      (n = (0, W.jsxs)(y.Fragment, {
        children: [
          !this.state.bUseCanvasBlur &&
            this.state.bBackgroundLoaded &&
            this.props.rgBlurImages?.[this.state.nBlurImageIndex] &&
            (0, W.jsx)(`img`, {
              src: this.props.rgBlurImages[this.state.nBlurImageIndex],
              className: l(
                `oAbYPcN6xMk-`,
                `EqH7klwhYE0-`,
                `ArI6ZTmOyrU-`,
                t && `EQ-825XS0V4-`,
              ),
              onLoad: this.OnBlurImageLoaded,
              onError: this.OnBlurImageFailed,
            }),
          this.state.bUseCanvasBlur &&
            this.state.bBackgroundLoaded &&
            !this.props.bLowPerfMode &&
            (0, W.jsx)(de, {
              className: l(`oAbYPcN6xMk-`, `EqH7klwhYE0-`, `ArI6ZTmOyrU-`),
              elementRef: this.m_refCanvasBlurImage,
              updateRate: 0,
              width: 192,
              height: 62,
              reductionFactor: 10,
              blurAmount: 3,
            }),
        ],
      })),
      (0, W.jsx)(J.Consumer, {
        children: (e) =>
          (0, W.jsx)(se, {
            timeout: K,
            appear: !0,
            in: e.bFullscreen,
            classNames: G,
            children: (e) =>
              (0, W.jsxs)(`div`, {
                ref: e,
                className: l(L, void 0),
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages?.[this.state.nBlurImageIndex] &&
                    (0, W.jsx)(`img`, {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: l(
                        `oAbYPcN6xMk-`,
                        `EqH7klwhYE0-`,
                        t && `EQ-825XS0V4-`,
                      ),
                      onLoad: this.OnBlurImageLoaded,
                      onError: this.OnBlurImageFailed,
                    }),
                  this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    !this.props.bLowPerfMode &&
                    (0, W.jsx)(de, {
                      className: l(`oAbYPcN6xMk-`, `EqH7klwhYE0-`),
                      elementRef: this.m_refCanvasBlurImage,
                      updateRate: 0,
                      width: 192,
                      height: 62,
                      reductionFactor: 10,
                      blurAmount: 3,
                    }),
                  (0, W.jsx)(`div`, {
                    className: S,
                    children:
                      this.HasHeaderImages() &&
                      (0, W.jsx)(ue, {
                        ref: this.m_refBackgroundImage,
                        rgSources: this.props.rgHeaderImages,
                        className: l(
                          `oAbYPcN6xMk-`,
                          !this.state.bBackgroundLoaded && `EQ-825XS0V4-`,
                        ),
                        onLoad: this.OnHeaderLoad,
                        onIncrementalError: this.OnIncrementalError,
                        onError: this.props.onError,
                      }),
                  }),
                  n,
                ],
              }),
          }),
      })
    );
  }
};
(e([m], Z.prototype, `OnIncrementalError`, null),
  e([m], Z.prototype, `OnHeaderLoad`, null),
  e([m], Z.prototype, `OnBlurImageLoaded`, null),
  e([m], Z.prototype, `OnBlurImageFailed`, null));
function Qe(e) {
  let {
      logoPosition: t,
      strLogoImageURL: n,
      children: r,
      fnOnPositionChanged: i,
      fullscreen: a,
    } = e,
    {
      nBottomPct: o,
      nTopPct: s,
      nLeftPct: c,
      nRightPct: u,
    } = $e(t.pinnedPosition, t.nWidthPct, t.nHeightPct);
  y.useContext(J);
  let d = {
      left: `${c}%`,
      top: `${s}%`,
      width: `${t.nWidthPct}%`,
      height: `${t.nHeightPct}%`,
    },
    f = l(je, b[t.pinnedPosition]);
  return (0, W.jsx)(`div`, {
    className: z,
    children: (0, W.jsxs)(`div`, {
      className: T,
      children: [
        !e.editMode &&
          (0, W.jsx)(`div`, {
            className: f,
            style: d,
            children: (0, W.jsx)(se, {
              timeout: K,
              appear: !0,
              in: a,
              classNames: G,
              children: (e) =>
                (0, W.jsx)(`div`, {
                  ref: e,
                  className: `hNHwGI-JZlg-`,
                  children: r,
                }),
            }),
          }),
        e.editMode &&
          (0, W.jsx)(Q, {
            id: n,
            pinType: t.pinnedPosition,
            index: 0,
            widthPct: t.nWidthPct,
            heightPct: t.nHeightPct,
            fnOnPositionChanged: i,
            children: r,
          }),
      ],
    }),
  });
}
function $e(e, t, n) {
  let r, i, a, o;
  switch (e) {
    case pe:
    default:
      ((r = 0), (i = 100 - n), (a = 0), (o = 100 - t));
      break;
    case fe:
      ((r = 100 - n), (i = 0), (a = 0), (o = 100 - t));
      break;
    case he:
      ((r = (100 - n) / 2),
        (i = (100 - n) / 2),
        (a = (100 - t) / 2),
        (o = (100 - t) / 2));
      break;
    case me:
      ((r = 100 - n), (i = 0), (a = (100 - t) / 2), (o = (100 - t) / 2));
      break;
    case ge:
      ((r = 0), (i = 100 - n), (a = (100 - t) / 2), (o = (100 - t) / 2));
  }
  return { nBottomPct: r, nTopPct: i, nLeftPct: a, nRightPct: o };
}
var Q = class extends y.Component {
  m_rectLinkRegion;
  m_elLinkRegionBox;
  m_nLocalOffsetXPct;
  m_nLocalOffsetYPct;
  m_fnMouseUp = null;
  m_fnMouseMove = null;
  m_listeners = new h();
  constructor(e) {
    (super(e), (this.state = {}));
  }
  componentWillUnmount() {
    this.m_listeners.Unregister();
  }
  componentDidUpdate() {
    this.props.pinType != this.state.pinType &&
      (this.setState({ pinType: this.props.pinType }),
      this.UpdateBoxPosition());
  }
  static getDerivedStateFromProps(e, t) {
    let { pinType: n, widthPct: r, heightPct: i, id: a } = e;
    if (t && t.id == a) return null;
    let { nBottomPct: o, nTopPct: s, nLeftPct: c, nRightPct: l } = $e(n, r, i);
    return {
      id: a,
      curBottomPosPct: o,
      curTopPosPct: s,
      curLeftPosPct: c,
      curRightPosPct: l,
      curWidthPct: r,
      curHeightPct: i,
      EdgeDown: null,
      pinType: n,
    };
  }
  LinkRegionBoxRef(e) {
    this.m_elLinkRegionBox = e;
  }
  OnMouseDown(e, t) {
    let n = this.m_elLinkRegionBox?.parentElement,
      r = this.m_elLinkRegionBox?.ownerDocument.defaultView;
    n &&
      r &&
      ((this.m_fnMouseUp = (e) => {
        this.OnMouseUp(e, t);
      }),
      (this.m_fnMouseMove = (e) => {
        this.OnMouseMove(e, t);
      }),
      this.setState({ EdgeDown: t }),
      (this.m_rectLinkRegion = n.getBoundingClientRect()),
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
      this.m_listeners.AddEventListener(r, `mousemove`, this.m_fnMouseMove),
      this.m_listeners.AddEventListener(r, `mouseup`, this.m_fnMouseUp),
      e.preventDefault(),
      e.stopPropagation());
  }
  UpdateBoxPosition() {
    let {
      nBottomPct: e,
      nTopPct: t,
      nLeftPct: n,
      nRightPct: r,
    } = $e(this.props.pinType, this.state.curWidthPct, this.state.curHeightPct);
    this.setState({
      curBottomPosPct: e,
      curTopPosPct: t,
      curLeftPosPct: n,
      curRightPosPct: r,
    });
  }
  OnMouseMove(e, t) {
    let n = this.m_rectLinkRegion,
      r = this.m_nLocalOffsetXPct,
      i = this.m_nLocalOffsetYPct;
    if (this.state.EdgeDown === void 0 || !n || r === void 0 || i === void 0)
      return;
    e.shiftKey && this.m_fnMouseUp();
    let {
        curTopPosPct: a,
        curRightPosPct: o,
        curBottomPosPct: s,
        curLeftPosPct: c,
      } = this.state,
      l = (e) => {
        let t = ((e - n.left) / (n.right - n.left)) * 100 - r;
        if (
          this.props.pinType == `UpperLeft` ||
          this.props.pinType == `BottomLeft`
        )
          return 0;
        if (
          this.props.pinType == `CenterCenter` ||
          this.props.pinType == `BottomCenter` ||
          this.props.pinType == `UpperCenter`
        ) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((o = e), e);
        }
        return t;
      },
      u = (e) => {
        let t =
          100 -
          (((e - n.left) / (n.right - n.left)) * 100 +
            (this.state.curWidthPct - r));
        if (
          this.props.pinType == `CenterCenter` ||
          this.props.pinType == `BottomCenter` ||
          this.props.pinType == `UpperCenter`
        ) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((c = e), e);
        }
        return t;
      },
      d = (e) => {
        let t = ((e - n.top) / (n.bottom - n.top)) * 100 - i;
        if (
          this.props.pinType == `UpperCenter` ||
          this.props.pinType == `UpperLeft`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((s = e), e);
        }
        return t;
      },
      f = (e) => {
        let t =
          100 -
          (((e - n.top) / (n.bottom - n.top)) * 100 +
            (this.state.curHeightPct - i));
        if (
          this.props.pinType == `BottomLeft` ||
          this.props.pinType == `BottomCenter`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((a = e), e);
        }
        return t;
      };
    function m() {
      s = Math.min(s, 98 - a);
    }
    function h() {
      o = Math.min(o, 99 - c);
    }
    function g() {
      a = Math.min(a, 98 - s);
    }
    function _() {
      c = Math.min(c, 99 - o);
    }
    switch (t) {
      case `Left`:
        ((c = l(e.clientX)), _());
        break;
      case `Right`:
        ((o = u(e.clientX)), h());
        break;
      case `Top`:
        ((a = d(e.clientY)), g());
        break;
      case `Bottom`:
        ((s = f(e.clientY)), m());
        break;
      case `Topleft`:
        ((a = d(e.clientY)), (c = l(e.clientX)), g(), _());
        break;
      case `TopRight`:
        ((a = d(e.clientY)), (o = u(e.clientX)), g(), h());
        break;
      case `BottomLeft`:
        ((s = f(e.clientY)), (c = l(e.clientX)), m(), _());
        break;
      case `BottomRight`:
        ((s = f(e.clientY)), (o = u(e.clientX)), m(), h());
        break;
      case `Middle`:
        ((o = u(e.clientX)),
          (s = f(e.clientY)),
          this.state.pinType != `CenterCenter` && (a = d(e.clientY)),
          this.state.pinType != `CenterCenter` &&
            this.state.pinType != `BottomCenter` &&
            this.state.pinType != `UpperCenter` &&
            (c = l(e.clientX)),
          g(),
          m(),
          _(),
          h());
    }
    ((a = p(a, 0, 98)),
      (s = p(s, 0, 98)),
      (c = p(c, 0, 99)),
      (o = p(o, 0, 99)),
      this.setState({
        curTopPosPct: a,
        curRightPosPct: o,
        curBottomPosPct: s,
        curLeftPosPct: c,
      }),
      e.preventDefault(),
      e.stopPropagation());
  }
  OnMouseUp(e, t) {
    (this.setState(
      {
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
        curHeightPct:
          100 - this.state.curBottomPosPct - this.state.curTopPosPct,
      },
      this.OnResizeComplete,
    ),
      this.setState({ EdgeDown: void 0 }),
      this.m_listeners.Unregister());
  }
  OnResizeComplete() {
    this.props.fnOnPositionChanged &&
      this.props.fnOnPositionChanged({
        pinnedPosition: this.state.pinType,
        nWidthPct: this.state.curWidthPct,
        nHeightPct: this.state.curHeightPct,
      });
  }
  render() {
    let e = {
        left: this.state.curLeftPosPct + `%`,
        top: this.state.curTopPosPct + `%`,
        right: this.state.curRightPosPct + `%`,
        bottom: this.state.curBottomPosPct + `%`,
      },
      t = l(
        B,
        this.state.EdgeDown && l(`PIhA-Ktj63o-`, b[this.state.EdgeDown]),
        b[this.props.pinType],
      );
    return (0, W.jsx)(`div`, {
      className: t,
      style: e,
      ref: this.LinkRegionBoxRef,
      draggable: !1,
      children: (0, W.jsxs)(`div`, {
        className: V,
        children: [
          (0, W.jsx)(`div`, {
            className: `${C} ${H}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Topleft`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${Ne}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Top`);
            },
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${Pe}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `TopRight`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${Fe}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Left`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${w}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Middle`);
            },
            draggable: !1,
            children: (0, W.jsx)(`div`, {
              className: M,
              children: this.props.children,
            }),
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${Re}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Right`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${I}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `BottomLeft`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${ze}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Bottom`);
            },
            draggable: !1,
          }),
          (0, W.jsx)(`div`, {
            className: `${C} ${Be}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `BottomRight`);
            },
            draggable: !1,
          }),
        ],
      }),
    });
  }
};
(e([m], Q.prototype, `LinkRegionBoxRef`, null),
  e([m], Q.prototype, `OnMouseDown`, null),
  e([m], Q.prototype, `UpdateBoxPosition`, null),
  e([m], Q.prototype, `OnMouseMove`, null),
  e([m], Q.prototype, `OnMouseUp`, null),
  e([m], Q.prototype, `OnResizeComplete`, null));
var et = (e) => {
  let { title: t, className: n } = e,
    r = 26;
  t.length > 8 && (r = Math.max(r - (t.length - 5) / 2, 5.8));
  let [i, a] = ne();
  return (0, W.jsxs)(`svg`, {
    className: l(U, n),
    viewBox: `0 0 300 14`,
    children: [
      (0, W.jsx)(`defs`, {
        children: (0, W.jsxs)(`linearGradient`, {
          id: i,
          x1: `0`,
          x2: `0`,
          y1: `0`,
          y2: `100%`,
          gradientUnits: `userSpaceOnUse`,
          children: [
            (0, W.jsx)(`stop`, { stopColor: `#fff`, offset: `0%` }),
            (0, W.jsx)(`stop`, { stopColor: `#fff`, offset: `20%` }),
            (0, W.jsx)(`stop`, { stopColor: `#fff`, offset: `40%` }),
            (0, W.jsx)(`stop`, { stopColor: `#eee`, offset: `60%` }),
            (0, W.jsx)(`stop`, { stopColor: `#ddd`, offset: `80%` }),
            (0, W.jsx)(`stop`, { stopColor: `#ccc`, offset: `100%` }),
          ],
        }),
      }),
      (0, W.jsx)(`text`, {
        x: `-1`,
        y: 14,
        fontSize: r,
        textAnchor: `bottom`,
        fontWeight: `200`,
        fill: a,
        children: t,
      }),
    ],
  });
};
function tt(e) {
  let { title: t, children: n } = e,
    r = y.useContext(J),
    i = y.useRef(null);
  return (0, W.jsx)(oe, {
    nodeRef: i,
    timeout: K,
    appear: !0,
    in: r.bFullscreen,
    classNames: G,
    children: (0, W.jsxs)(`div`, {
      ref: i,
      className: l(qe, t ? void 0 : ``),
      children: [
        (0, W.jsx)(`div`, {
          className: Ke,
          children: !!t && (0, W.jsx)(et, { title: t }),
        }),
        (0, W.jsx)(`div`, { className: Je, children: n }),
      ],
    }),
  });
}
var nt = class {
  m_strLibraryLogoURL;
  m_strLibraryHeroURL;
  m_unAppID;
  m_strAppName;
  m_logoPosition = void 0;
  m_strSaveURL;
  constructor(e) {
    (a(this),
      (this.m_strLibraryHeroURL = e.strLibraryHeroURL),
      (this.m_strLibraryLogoURL = e.strLibraryLogoURL),
      (this.m_unAppID = e.unAppID),
      (this.m_strAppName = e.strAppName),
      (this.m_logoPosition = e.logoPosition || q),
      (this.m_strSaveURL = e.strSaveURL || null),
      this.m_logoPosition.pinnedPosition ||
        (this.m_logoPosition.pinnedPosition = q.pinnedPosition),
      this.m_logoPosition.nHeightPct ||
        (this.m_logoPosition.nHeightPct = q.nHeightPct),
      this.m_logoPosition.nWidthPct ||
        (this.m_logoPosition.nWidthPct = q.nWidthPct));
  }
  GetHeroURL() {
    return this.m_strLibraryHeroURL;
  }
  GetLogoURL() {
    return this.m_strLibraryLogoURL;
  }
  GetAppID() {
    return this.m_unAppID;
  }
  GetAppName() {
    return this.m_strAppName;
  }
  GetLogoPosition() {
    return this.m_logoPosition;
  }
  SetLogoPosition(e) {
    this.m_logoPosition = e;
  }
  GetSaveURL() {
    return this.m_strSaveURL;
  }
};
e([n], nt.prototype, `m_logoPosition`, void 0);
var rt = `gZTjQNknWIg-`,
  it = `lnkyboMJU1k-`,
  at = `pYwhblKojHA-`,
  ot = `SJbG2sewzgw-`,
  st = `pqPJ00DjeAQ-`,
  ct = `UdoT8nbRZ50-`,
  lt = `Ez29KTBrKgk-`,
  ut = `kKzc9HliZ3o-`,
  dt = `bdDiMIItJIc-`,
  ft = `rz6s6W5aVGg-`,
  pt = `h3AARtFdvkE-`,
  mt = `IEjr2GHHVO8-`,
  ht = `UgxwXmTs3dk-`,
  gt = `_8iXOZFyh5fk-`,
  _t = `d3uhwRLMAco-`,
  vt = `CfMNPDUt1oc-`,
  yt = `_5QFPMf4FN7I-`,
  bt = `Bnh4xoaC6CE-`,
  xt = `yPxcIT6FtEI-`,
  St = `VUv8Fwgl4Yk-`,
  Ct = `g5BEkJBcUOQ-`,
  wt = `_7ayILp-7DAY-`,
  Tt = `xhMdzQNmgZA-`,
  Et = `Jap35bAnbeY-`,
  Dt = `ZPKHyjagDGc-`,
  Ot = `LLL-ejIWdM0-`,
  kt = `yRrAc142NnM-`,
  At = `_4BXDW4zWmHE-`,
  jt = `EqJqovUKNuA-`,
  Mt = `-vkVQUcE4-4-`,
  Nt = `Fj23xrwt0gU-`,
  Pt = `_6vX34XWHqLs-`,
  Ft = `KJ7LlYMItdw-`,
  It = `V1SCWKRLdiw-`,
  Lt = `BSaL1mvX1-Y-`,
  Rt = `Et8TleuXa6s-`,
  zt = `VKqNZ4kVIF0-`,
  Bt = `E0DW8YLs3HE-`,
  Vt = `sQU67pphNqw-`,
  Ht = `cexYnfOA6Wo-`,
  Ut = `eZSNsE46fnA-`,
  Wt = `T0y9mw3oF8A-`,
  Gt = `kfm5dxnWNmc-`,
  Kt = `BMe08DVBdqU-`,
  qt = `MF9G0HKI4w0-`;
function Jt() {
  return (0, W.jsxs)(y.Fragment, {
    children: [
      (0, W.jsx)(`span`, { style: { fontSize: 0 } }),
      (0, W.jsx)(`div`, {
        className: l(_t),
        children: (0, W.jsxs)(`div`, {
          className: vt,
          children: [
            (0, W.jsx)(Qt, {}),
            (0, W.jsx)(Yt, {}),
            (0, W.jsx)(`div`, {
              className: St,
              children: (0, W.jsxs)(`div`, {
                className: Ct,
                children: [
                  (0, W.jsx)(`div`, {
                    className: Et,
                    children: (0, W.jsx)(re, {}),
                  }),
                  (0, W.jsxs)(`div`, {
                    className: wt,
                    children: [
                      `Game Info`,
                      (0, W.jsx)(`div`, {
                        className: Tt,
                        children: (0, W.jsx)(g, { angle: 180 }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Yt() {
  return (0, W.jsx)(`div`, { className: l(bt), children: (0, W.jsx)(Xt, {}) });
}
function Xt() {
  return (0, W.jsxs)(`div`, {
    className: xt,
    children: [
      (0, W.jsx)(`div`, {
        className: Bt,
        children: (0, W.jsxs)(`div`, {
          className: Vt,
          children: [
            (0, W.jsx)(`div`, { className: Ht, children: `LAST PLAYED` }),
            (0, W.jsx)(`div`, { className: Ut, children: `Mar 24` }),
          ],
        }),
      }),
      (0, W.jsxs)(`div`, {
        className: Ft,
        children: [
          (0, W.jsx)(`div`, { className: It }),
          (0, W.jsxs)(`div`, {
            className: Lt,
            children: [
              (0, W.jsx)(`div`, { className: Rt, children: `PLAY TIME` }),
              (0, W.jsx)(`div`, { className: zt, children: `37 hours` }),
            ],
          }),
        ],
      }),
      (0, W.jsxs)(`div`, {
        className: kt,
        children: [
          (0, W.jsx)(`div`, { className: At }),
          (0, W.jsxs)(`div`, {
            className: jt,
            children: [
              (0, W.jsx)(`div`, { className: Nt, children: `ACHIEVEMENTS` }),
              (0, W.jsxs)(`div`, {
                className: Mt,
                children: [
                  (0, W.jsx)(`div`, { className: Pt, children: `30/47` }),
                  (0, W.jsx)(Zt, { progressPct: 3e3 / 47 }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Zt = class extends y.Component {
  render() {
    return (0, W.jsx)(`div`, {
      className: Dt,
      children: (0, W.jsx)(`div`, {
        className: Ot,
        style: { width: this.props.progressPct + `%` },
      }),
    });
  }
};
function Qt() {
  return (0, W.jsx)(`div`, {
    className: yt,
    children: (0, W.jsx)(`div`, {
      className: Wt,
      children: (0, W.jsx)(`div`, {
        className: l(Gt, Kt),
        children: (0, W.jsx)(`div`, { className: qt, children: `PLAY` }),
      }),
    }),
  });
}
var $t = `Szu04ev-WDc-`,
  en = `_8QZBI7nPLaM-`,
  tn = `cZy78P5HezQ-`,
  nn = `Y34KO8gjg6s-`,
  rn = [
    `Apex Legends™`,
    `Baldur's Gate 3`,
    `Battlefield™ 6`,
    `Black Desert`,
    `Black Myth: Wukong`,
    `Borderlands 4`,
    `Clair Obscur: Expedition 33`,
    `Counter-Strike 2`,
    `Cronos: The New Dawn`,
    `Crusader Kings III`,
    `Cyberpunk 2077`,
    `Dead by Daylight`,
    `Delta Force`,
    `Destiny 2`,
    `Dota 2`,
    `Dune: Awakening`,
    `Dying Light: The Beast`,
    `EA SPORTS FC™ 26`,
    `ELDEN RING`,
    `ELDEN RING NIGHTREIGN`,
    `Euro Truck Simulator 2`,
    `F1® 25`,
    `FINAL FANTASY XIV Online`,
    `Forza Horizon 5`,
    `Grand Theft Auto V Enhanced`,
    `Grounded 2`,
    `HELLDIVERS™ 2`,
    `Hollow Knight`,
    `Hollow Knight: Silksong`,
    `Killing Floor 3`,
    `Kingdom Come: Deliverance II`,
    `Limbus Company`,
    `Lost Ark`,
    `METAL GEAR SOLID Δ: SNAKE EATER`,
    `Madden NFL 26`,
    `Mafia: The Old Country`,
    `Mage Arena`,
    `Magic: The Gathering Arena`,
    `Marvel Rivals`,
    `NARAKA: BLADEPOINT`,
    `NBA 2K26`,
    `No Man's Sky`,
    `Once Human`,
    `Overwatch® 2`,
    `PEAK`,
    `PUBG: BATTLEGROUNDS`,
    `Path of Exile 2`,
    `R.E.P.O.`,
    `Ready or Not`,
    `Red Dead Redemption 2`,
    `RimWorld`,
    `Rust`,
    `Schedule I`,
    `Shape of Dreams`,
    `Split Fiction`,
    `Stardew Valley`,
    `Street Fighter™ 6`,
    `THE FINALS`,
    `THRONE AND LIBERTY`,
    `Team Fortress 2`,
    `The Elder Scrolls® Online`,
    `The First Descendant`,
    `The Sims™ 4`,
    `Titan Quest II`,
    `Tom Clancy's Rainbow Six® Siege X`,
    `Umamusume: Pretty Derby`,
    `WUCHANG: Fallen Feathers`,
    `Wallpaper Engine`,
    `War Thunder`,
    `Warframe`,
    `Warhammer 40,000: Dawn of War - Definitive Edition`,
    `Warhammer 40,000: Space Marine 2`,
    `Wuthering Waves`,
    `Yu-Gi-Oh! Master Duel`,
    `雀魂麻將(MahjongSoul)`,
  ];
function an(e) {
  let { highlightedName: t } = e,
    n = y.useCallback((e) => {
      e && e.scrollIntoView({ block: `center` });
    }, []),
    r = y.useMemo(() => {
      if (rn.indexOf(t) !== -1) return rn;
      {
        let e = [...rn, t];
        return (e.sort(), e);
      }
    }, [t]);
  return (0, W.jsx)(`div`, {
    className: $t,
    children: r.map((e) => {
      let r = t === e;
      return (0, W.jsx)(
        `div`,
        { className: l(en, r ? tn : nn), ref: r ? n : void 0, children: e },
        e,
      );
    }),
  });
}
function on(e, t) {
  let n = new nt(i(`editorconfig`, t));
  ve.createRoot(t).render(y.createElement(e ? $ : sn, { LogoEditorStore: n }));
}
var $ = class extends y.Component {
  constructor(e) {
    (super(e), (this.state = { saving: !1, saved: !1, unsavedChanges: !1 }));
  }
  componentDidMount() {
    window.addEventListener(`beforeunload`, this.OnBeforeUnload);
  }
  componentWillUnmount() {
    window.removeEventListener(`beforeunload`, this.OnBeforeUnload);
  }
  OnBeforeUnload(e) {
    this.state.unsavedChanges &&
      (e.preventDefault(),
      (e.returnValue = `You have unsaved changes.  Are you sure you want to close this window?`));
  }
  async OnOK() {
    if (this.state.saving) return;
    let { LogoEditorStore: e } = this.props;
    this.setState({ saving: !0 }, async () => {
      if (e.GetSaveURL()) {
        let t = e.GetLogoPosition();
        try {
          let n = new FormData();
          (n.append(`json`, `1`),
            n.append(`sessionid`, o()),
            n.append(
              `app[assets][library_logo][logo_position][pinned_position]`,
              t.pinnedPosition,
            ),
            n.append(
              `app[assets][library_logo][logo_position][width_pct]`,
              `` + t.nWidthPct,
            ),
            n.append(
              `app[assets][library_logo][logo_position][height_pct]`,
              `` + t.nHeightPct,
            ),
            await ye.default.post(e.GetSaveURL(), n),
            this.setState({ saving: !1, saved: !0, unsavedChanges: !1 }));
        } catch (e) {
          (console.error(e),
            alert(`There was a problem saving changes`),
            this.setState({ saving: !1 }));
        }
      } else
        (window.opener &&
          window.opener.postMessage(
            { appid: e.GetAppID(), ...r(e.GetLogoPosition()) },
            `*`,
          ),
          this.OnCancel());
    });
  }
  OnCancel() {
    (window.removeEventListener(`beforeunload`, this.OnBeforeUnload),
      window.close());
  }
  OnPositionChanged() {
    this.state.unsavedChanges ||
      this.setState({ unsavedChanges: !0, saved: !1 });
  }
  render() {
    return (0, W.jsx)(y.Fragment, {
      children: (0, W.jsxs)(`div`, {
        className: l(lt, this.state.saving && `eL6nV1smj9g-`),
        children: [
          (0, W.jsxs)(`div`, {
            className: ft,
            children: [
              (0, W.jsx)(`div`, {
                className: l(pt, this.state.saved && `eSDyAoPnXQU-`),
                children: v(`#StoreAdmin_LibraryPlacementTool_ChangesSaved`),
              }),
              (0, W.jsxs)(`div`, {
                className: mt,
                children: [
                  (0, W.jsx)(te, {
                    onClick: this.OnOK,
                    className: ht,
                    children: v(`#Button_Save`),
                  }),
                  (0, W.jsx)(ee, {
                    onClick: this.OnCancel,
                    className: ht,
                    children: this.state.unsavedChanges
                      ? v(`#Button_Cancel`)
                      : v(`#Button_Close`),
                  }),
                ],
              }),
            ],
          }),
          (0, W.jsx)(`div`, {
            className: ut,
            children: (0, W.jsx)(le, { size: `xlarge`, className: dt }),
          }),
          (0, W.jsx)(sn, {
            ...this.props,
            fnOnPositionChanged: this.OnPositionChanged,
          }),
        ],
      }),
    });
  }
};
(e([m], $.prototype, `OnBeforeUnload`, null),
  e([m], $.prototype, `OnOK`, null),
  e([m], $.prototype, `OnCancel`, null),
  e([m], $.prototype, `OnPositionChanged`, null));
var sn = class extends y.Component {
  constructor(e) {
    (super(e), (this.state = { bEditModeEnabled: !0 }));
  }
  OnPositionChanged(e) {
    let { LogoEditorStore: t, fnOnPositionChanged: n } = this.props;
    (t.SetLogoPosition(e), n && n(e));
  }
  render() {
    let { LogoEditorStore: e } = this.props,
      t = !!e.GetLogoURL();
    return (0, W.jsxs)(`div`, {
      className: rt,
      children: [
        (0, W.jsx)(`div`, {
          className: st,
          children: (0, W.jsx)(an, { highlightedName: e.GetAppName() }),
        }),
        (0, W.jsx)(`div`, { className: gt }),
        (0, W.jsxs)(`div`, {
          className: at,
          children: [
            (0, W.jsx)(cn, { LogoEditorStore: e }),
            (0, W.jsx)(`div`, {
              className: it,
              children: (0, W.jsx)(Y, {
                editMode: t && this.state.bEditModeEnabled,
                hasHeroImage: !0,
                rgHeaderImages: [e.GetHeroURL()],
                rgLogoImages: t ? [e.GetLogoURL()] : [],
                classNameNoLogo: ot,
                fnOnPositionChanged: this.OnPositionChanged,
                logoPosition: e.GetLogoPosition(),
                children: (0, W.jsx)(tt, {
                  title: e.GetLogoURL() ? `` : e.GetAppName(),
                }),
              }),
            }),
            (0, W.jsx)(Jt, {}),
            (0, W.jsxs)(`div`, {
              className: ct,
              children: [
                (0, W.jsx)(`br`, {}),
                (0, W.jsx)(`br`, {}),
                (0, W.jsx)(`br`, {}),
                (0, W.jsx)(`br`, {}),
                (0, W.jsx)(`br`, {}),
              ],
            }),
          ],
        }),
      ],
    });
  }
};
e([m], sn.prototype, `OnPositionChanged`, null);
var cn = ae((e) => {
  let t = e.LogoEditorStore.GetLogoPosition();
  return (0, W.jsxs)(y.Fragment, {
    children: [
      (0, W.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][pinned_position]`,
        value: t.pinnedPosition,
      }),
      (0, W.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][width_pct]`,
        value: t.nWidthPct,
      }),
      (0, W.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][height_pct]`,
        value: t.nHeightPct,
      }),
    ],
  });
});
export { on as Init_LibraryLogoEditor };

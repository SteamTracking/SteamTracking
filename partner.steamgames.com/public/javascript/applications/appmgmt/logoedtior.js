/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Dt as e,
  Pt as t,
  S as n,
  W as r,
  X as i,
  jt as a,
  n as o,
  nt as s,
  r as c,
  t as l,
  w as u,
} from "./chunk~de7f2df91c.js";
import { Pt as d, mt as f } from "./chunk~bd90a5fce7.js";
import {
  Gt as p,
  Nr as m,
  Nt as h,
  Sn as g,
  da as _,
  on as ee,
  ri as te,
  ta as ne,
} from "./chunk~1fa4b8f2ff.js";
import { C as re } from "./chunk~44f252525d.js";
import { E as ie, S as ae, x as oe } from "./chunk~96e60d7578.js";
import { n as se, t as ce } from "./chunk~90b9831ad2.js";
import { t as le } from "./chunk~f4e4ed5c17.js";
import { t as ue } from "./chunk~eefd71512b.js";
import { t as de } from "./chunk~f0141d9521.js";
import { t as fe } from "./chunk~9a3ef4764b.js";
var pe = `UpperLeft`,
  me = `BottomLeft`,
  he = `UpperCenter`,
  ge = `CenterCenter`,
  _e = `BottomCenter`,
  v = t(s()),
  ve = t(l()),
  ye = t(h()),
  be = t(le()),
  y = a({
    AddBoxSizer: () => He,
    Background: () => Te,
    Bottom: () => Be,
    BottomCenter: () => P,
    BottomLeft: () => F,
    BottomRight: () => Ve,
    BoxSizer: () => R,
    BoxSizerButtonContainer: () => We,
    BoxSizerContainer: () => L,
    BoxSizerDelete: () => Le,
    BoxSizerDragBox: () => z,
    BoxSizerEdge: () => S,
    BoxSizerGridBox: () => B,
    BoxSizerInfo: () => Ke,
    BoxSizerSettings: () => Re,
    BoxSizerValidRegion: () => w,
    CenterCenter: () => N,
    DialogButton: () => Ge,
    EdgeDown: () => Ne,
    FallbackArt: () => we,
    Features: () => Ye,
    FullscreenEnterActive: () => E,
    FullscreenEnterDone: () => k,
    FullscreenEnterStart: () => T,
    FullscreenExitActive: () => D,
    FullscreenExitDone: () => O,
    FullscreenExitStart: () => A,
    HeaderBackgroundImage: () => ke,
    Hidden: () => Me,
    ImgBlur: () => je,
    ImgBlurBackdrop: () => Ae,
    ImgContainer: () => x,
    ImgSrc: () => Ce,
    Left: () => Ie,
    Loaded: () => De,
    Middle: () => C,
    NoArt: () => Se,
    PinBox: () => I,
    Right: () => ze,
    SVGTitle: () => H,
    SaveBoxSizer: () => Ue,
    TextNameSpace: () => qe,
    TitleImageContainer: () => j,
    TitleLogo: () => Ee,
    TitleSection: () => Je,
    Top: () => Pe,
    TopCapsule: () => b,
    TopGradient: () => Xe,
    TopLeft: () => V,
    TopRight: () => Fe,
    UpperCenter: () => M,
    UpperLeft: () => Oe,
    default: () => Ze,
    "duration-app-launch": () => xe,
  }),
  xe = `800ms`,
  b = `i9KcRmbfbvg-`,
  Se = `c8uauX6-os0-`,
  Ce = `oAbYPcN6xMk-`,
  x = `_1SO3fzpXZMg-`,
  we = `MPvvDvGTX4E-`,
  S = `qugr6Zt0UpU-`,
  C = `rotRuUkbxFk-`,
  w = `nE-LwRJzvNM-`,
  Te = `B-kJ5tyfqxc-`,
  T = `TsklQsuuuH0-`,
  E = `i9nCLUP83y4-`,
  D = `Y8NCjbBXuK4-`,
  O = `DII4zPcGweo-`,
  k = `h5Ihk5Z6UJM-`,
  A = `N7OpGIp-XYQ-`,
  j = `hNHwGI-JZlg-`,
  M = `-gpYK65-PO8-`,
  N = `_1tt49wVUYGo-`,
  P = `lc-HOHVK5w8-`,
  Ee = `MDlRNe2WCnA-`,
  De = `MP7DM-J-SM4-`,
  F = `-Es6N1qaYoU-`,
  Oe = `RDOYLMLdjVY-`,
  ke = `rzNYjeGJ-u8-`,
  Ae = `ArI6ZTmOyrU-`,
  je = `EqH7klwhYE0-`,
  Me = `EQ-825XS0V4-`,
  I = `EmNTtllgxMI-`,
  L = `C-aKiFBaz1Q-`,
  R = `qmSsmzf9b4E-`,
  z = `jtN5LA-jzD8-`,
  Ne = `PIhA-Ktj63o-`,
  B = `KH5XNXoWh7U-`,
  V = `_4RGLcD-ArfM-`,
  Pe = `b5wAq2zSbDc-`,
  Fe = `Mw0yGs5oSLU-`,
  Ie = `xspvMGB5joQ-`,
  Le = `UMKKmuRdYWA-`,
  Re = `ogQSspF5HQk-`,
  ze = `jyaV-ixSN5g-`,
  Be = `VJbyEhOgKD8-`,
  Ve = `_05YGjnOccl4-`,
  He = `Cjoh4St2zts-`,
  Ue = `eMqdLgUR0-o-`,
  We = `-iZUXuLHieY-`,
  Ge = `v23YCbae3-M-`,
  Ke = `IAKrDVUwKA0-`,
  qe = `vFsfSZsB8Sg-`,
  Je = `jwmOqyEZJ3c-`,
  Ye = `f1Tpbhps2NE-`,
  H = `_6YJu921-BwU-`,
  Xe = `xfGCvZ43jJQ-`,
  Ze = {
    "duration-app-launch": `800ms`,
    TopCapsule: b,
    NoArt: Se,
    ImgSrc: Ce,
    ImgContainer: x,
    FallbackArt: we,
    BoxSizerEdge: S,
    Middle: C,
    BoxSizerValidRegion: w,
    Background: Te,
    FullscreenEnterStart: T,
    FullscreenEnterActive: E,
    FullscreenExitActive: D,
    FullscreenExitDone: O,
    FullscreenEnterDone: k,
    FullscreenExitStart: A,
    TitleImageContainer: j,
    UpperCenter: M,
    CenterCenter: N,
    BottomCenter: P,
    TitleLogo: Ee,
    Loaded: De,
    BottomLeft: F,
    UpperLeft: Oe,
    HeaderBackgroundImage: ke,
    ImgBlurBackdrop: Ae,
    ImgBlur: je,
    Hidden: Me,
    PinBox: I,
    BoxSizerContainer: L,
    BoxSizer: R,
    BoxSizerDragBox: z,
    EdgeDown: Ne,
    BoxSizerGridBox: B,
    TopLeft: V,
    Top: Pe,
    TopRight: Fe,
    Left: Ie,
    BoxSizerDelete: Le,
    BoxSizerSettings: Re,
    Right: ze,
    Bottom: Be,
    BottomRight: Ve,
    AddBoxSizer: He,
    SaveBoxSizer: Ue,
    BoxSizerButtonContainer: We,
    DialogButton: Ge,
    BoxSizerInfo: Ke,
    TextNameSpace: qe,
    TitleSection: Je,
    Features: Ye,
    SVGTitle: H,
    TopGradient: Xe,
  },
  Qe = `800ms`,
  U = r(),
  W = {
    exit: A,
    exitActive: D,
    exitDone: O,
    enter: T,
    enterDone: k,
    enterActive: E,
  },
  G = g(Qe),
  K = { pinnedPosition: me, nWidthPct: 50, nHeightPct: 50 },
  q = v.createContext({ bFullscreen: !1 }),
  J = class extends v.Component {
    m_refTopCapsule = v.createRef();
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
      return this.state.logoPosition || this.props.logoPosition || K;
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
        return (0, U.jsx)(q.Provider, {
          value: { bFullscreen: this.props.bFullscreen },
          children: (0, U.jsx)(Y, { ref: this.m_refTopCapsule, ...this.props }),
        });
      let { children: e, logoPosition: t, editMode: n, ...r } = this.props,
        i = this.GetLogoPosition();
      return (0, U.jsx)(q.Provider, {
        value: { bFullscreen: this.props.bFullscreen },
        children: (0, U.jsxs)(Y, {
          ref: this.m_refTopCapsule,
          ...r,
          editMode: !0,
          logoPosition: i,
          fnOnPositionChanged: this.OnPositionChanged,
          children: [
            (0, U.jsx)(`div`, {
              className: `${I} ${F}`,
              onClick: () => this.SetPinnedPosition(me),
              title: `Pin to Bottom Left`,
            }),
            (0, U.jsx)(`div`, {
              className: `${I} ${M}`,
              onClick: () => this.SetPinnedPosition(he),
              title: `Pin to Top Center`,
            }),
            (0, U.jsx)(`div`, {
              className: `${I} ${N}`,
              onClick: () => this.SetPinnedPosition(ge),
              title: `Pin to Center`,
            }),
            (0, U.jsx)(`div`, {
              className: `${I} ${P}`,
              onClick: () => this.SetPinnedPosition(_e),
              title: `Pin to Bottom Center`,
            }),
            e,
          ],
        }),
      });
    }
  };
(o([d], J.prototype, `SetDimensions`, null),
  o([d], J.prototype, `OnPositionChanged`, null),
  o([d], J.prototype, `PostPositionChangeCallback`, null));
var Y = class extends v.Component {
  m_refBackgroundImage = v.createRef();
  m_refLogoImage = v.createRef();
  constructor(t) {
    (super(t),
      e(
        !t.editMode || t.rgLogoImages.length <= 1,
        `Can't use multiple logo images in edit mode`,
      ),
      (this.state = {
        bHasHeaderImage: t.rgHeaderImages.length > 0,
        bHasLogoImage: t.rgLogoImages.length > 0,
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
      l = c(
        b,
        r,
        !this.state.bHasHeaderImage && `c8uauX6-os0-`,
        !this.props.hasHeroImage && `MPvvDvGTX4E-`,
        !s && i,
      ),
      u = { "--header-height": o == null ? void 0 : o + `px` };
    return (0, U.jsx)(ce, {
      timeout: G,
      appear: !0,
      in: this.props.bFullscreen,
      classNames: W,
      children: (r) =>
        (0, U.jsxs)(`div`, {
          ref: r,
          className: l,
          style: u,
          children: [
            (0, U.jsx)(X, {
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
              (0, U.jsx)(
                $e,
                {
                  strLogoImageURL: e[0],
                  editMode: t,
                  logoPosition: n || K,
                  fnOnPositionChanged: a,
                  fullscreen: !!this.props.bFullscreen,
                  children: (0, U.jsx)(de, {
                    ref: this.m_refLogoImage,
                    className: c(
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
            (0, U.jsx)(`div`, { className: Xe }),
          ],
        }),
    });
  }
};
(o([d], Y.prototype, `OnHeaderError`, null),
  o([d], Y.prototype, `OnIncrementalLogoError`, null),
  o([d], Y.prototype, `OnLogoError`, null),
  o([d], Y.prototype, `OnLogoLoad`, null),
  o([d], Y.prototype, `OnLoaded`, null),
  (Y = o([re], Y)));
var X = class extends v.Component {
  m_refBackgroundImage = v.createRef();
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
        (0, ve.flushSync)(() =>
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
      (n = (0, U.jsxs)(v.Fragment, {
        children: [
          !this.state.bUseCanvasBlur &&
            this.state.bBackgroundLoaded &&
            this.props.rgBlurImages?.[this.state.nBlurImageIndex] &&
            (0, U.jsx)(`img`, {
              src: this.props.rgBlurImages[this.state.nBlurImageIndex],
              className: c(
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
            (0, U.jsx)(fe, {
              className: c(`oAbYPcN6xMk-`, `EqH7klwhYE0-`, `ArI6ZTmOyrU-`),
              elementRef: this.m_refCanvasBlurImage,
              updateRate: 0,
              width: 192,
              height: 62,
              reductionFactor: 10,
              blurAmount: 3,
            }),
        ],
      })),
      (0, U.jsx)(q.Consumer, {
        children: (e) =>
          (0, U.jsx)(ce, {
            timeout: G,
            appear: !0,
            in: e.bFullscreen,
            classNames: W,
            children: (e) =>
              (0, U.jsxs)(`div`, {
                ref: e,
                className: c(ke, void 0),
                children: [
                  !this.state.bUseCanvasBlur &&
                    this.state.bBackgroundLoaded &&
                    this.props.rgBlurImages?.[this.state.nBlurImageIndex] &&
                    (0, U.jsx)(`img`, {
                      src: this.props.rgBlurImages[this.state.nBlurImageIndex],
                      className: c(
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
                    (0, U.jsx)(fe, {
                      className: c(`oAbYPcN6xMk-`, `EqH7klwhYE0-`),
                      elementRef: this.m_refCanvasBlurImage,
                      updateRate: 0,
                      width: 192,
                      height: 62,
                      reductionFactor: 10,
                      blurAmount: 3,
                    }),
                  (0, U.jsx)(`div`, {
                    className: x,
                    children:
                      this.HasHeaderImages() &&
                      (0, U.jsx)(de, {
                        ref: this.m_refBackgroundImage,
                        rgSources: this.props.rgHeaderImages,
                        className: c(
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
(o([d], X.prototype, `OnIncrementalError`, null),
  o([d], X.prototype, `OnHeaderLoad`, null),
  o([d], X.prototype, `OnBlurImageLoaded`, null),
  o([d], X.prototype, `OnBlurImageFailed`, null));
function $e(e) {
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
      nLeftPct: l,
      nRightPct: u,
    } = et(t.pinnedPosition, t.nWidthPct, t.nHeightPct);
  v.useContext(q);
  let d = {
      left: `${l}%`,
      top: `${s}%`,
      width: `${t.nWidthPct}%`,
      height: `${t.nHeightPct}%`,
    },
    f = c(R, y[t.pinnedPosition]);
  return (0, U.jsx)(`div`, {
    className: L,
    children: (0, U.jsxs)(`div`, {
      className: w,
      children: [
        !e.editMode &&
          (0, U.jsx)(`div`, {
            className: f,
            style: d,
            children: (0, U.jsx)(ce, {
              timeout: G,
              appear: !0,
              in: a,
              classNames: W,
              children: (e) =>
                (0, U.jsx)(`div`, {
                  ref: e,
                  className: `hNHwGI-JZlg-`,
                  children: r,
                }),
            }),
          }),
        e.editMode &&
          (0, U.jsx)(Z, {
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
function et(e, t, n) {
  let r, i, a, o;
  switch (e) {
    case me:
    default:
      ((r = 0), (i = 100 - n), (a = 0), (o = 100 - t));
      break;
    case pe:
      ((r = 100 - n), (i = 0), (a = 0), (o = 100 - t));
      break;
    case ge:
      ((r = (100 - n) / 2),
        (i = (100 - n) / 2),
        (a = (100 - t) / 2),
        (o = (100 - t) / 2));
      break;
    case he:
      ((r = 100 - n), (i = 0), (a = (100 - t) / 2), (o = (100 - t) / 2));
      break;
    case _e:
      ((r = 0), (i = 100 - n), (a = (100 - t) / 2), (o = (100 - t) / 2));
  }
  return { nBottomPct: r, nTopPct: i, nLeftPct: a, nRightPct: o };
}
var Z = class extends v.Component {
  m_rectLinkRegion;
  m_elLinkRegionBox;
  m_nLocalOffsetXPct;
  m_nLocalOffsetYPct;
  m_fnMouseUp = null;
  m_fnMouseMove = null;
  m_listeners = new f();
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
    let { nBottomPct: o, nTopPct: s, nLeftPct: c, nRightPct: l } = et(n, r, i);
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
    } = et(this.props.pinType, this.state.curWidthPct, this.state.curHeightPct);
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
      a = this.m_nLocalOffsetYPct;
    if (this.state.EdgeDown === void 0 || !n || r === void 0 || a === void 0)
      return;
    e.shiftKey && this.m_fnMouseUp();
    let {
        curTopPosPct: o,
        curRightPosPct: s,
        curBottomPosPct: c,
        curLeftPosPct: l,
      } = this.state,
      u = (e) => {
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
          return ((s = e), e);
        }
        return t;
      },
      d = (e) => {
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
          return ((l = e), e);
        }
        return t;
      },
      f = (e) => {
        let t = ((e - n.top) / (n.bottom - n.top)) * 100 - a;
        if (
          this.props.pinType == `UpperCenter` ||
          this.props.pinType == `UpperLeft`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((c = e), e);
        }
        return t;
      },
      p = (e) => {
        let t =
          100 -
          (((e - n.top) / (n.bottom - n.top)) * 100 +
            (this.state.curHeightPct - a));
        if (
          this.props.pinType == `BottomLeft` ||
          this.props.pinType == `BottomCenter`
        )
          return 0;
        if (this.props.pinType == `CenterCenter`) {
          let e = Math.min(Math.max(t, 0), 45);
          return ((o = e), e);
        }
        return t;
      };
    function m() {
      c = Math.min(c, 98 - o);
    }
    function h() {
      s = Math.min(s, 99 - l);
    }
    function g() {
      o = Math.min(o, 98 - c);
    }
    function _() {
      l = Math.min(l, 99 - s);
    }
    switch (t) {
      case `Left`:
        ((l = u(e.clientX)), _());
        break;
      case `Right`:
        ((s = d(e.clientX)), h());
        break;
      case `Top`:
        ((o = f(e.clientY)), g());
        break;
      case `Bottom`:
        ((c = p(e.clientY)), m());
        break;
      case `Topleft`:
        ((o = f(e.clientY)), (l = u(e.clientX)), g(), _());
        break;
      case `TopRight`:
        ((o = f(e.clientY)), (s = d(e.clientX)), g(), h());
        break;
      case `BottomLeft`:
        ((c = p(e.clientY)), (l = u(e.clientX)), m(), _());
        break;
      case `BottomRight`:
        ((c = p(e.clientY)), (s = d(e.clientX)), m(), h());
        break;
      case `Middle`:
        ((s = d(e.clientX)),
          (c = p(e.clientY)),
          this.state.pinType != `CenterCenter` && (o = f(e.clientY)),
          this.state.pinType != `CenterCenter` &&
            this.state.pinType != `BottomCenter` &&
            this.state.pinType != `UpperCenter` &&
            (l = u(e.clientX)),
          g(),
          m(),
          _(),
          h());
    }
    ((o = i(o, 0, 98)),
      (c = i(c, 0, 98)),
      (l = i(l, 0, 99)),
      (s = i(s, 0, 99)),
      this.setState({
        curTopPosPct: o,
        curRightPosPct: s,
        curBottomPosPct: c,
        curLeftPosPct: l,
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
      t = c(
        z,
        this.state.EdgeDown && c(`PIhA-Ktj63o-`, y[this.state.EdgeDown]),
        y[this.props.pinType],
      );
    return (0, U.jsx)(`div`, {
      className: t,
      style: e,
      ref: this.LinkRegionBoxRef,
      draggable: !1,
      children: (0, U.jsxs)(`div`, {
        className: B,
        children: [
          (0, U.jsx)(`div`, {
            className: `${S} ${V}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Topleft`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${Pe}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Top`);
            },
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${Fe}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `TopRight`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${Ie}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Left`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${C}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Middle`);
            },
            draggable: !1,
            children: (0, U.jsx)(`div`, {
              className: j,
              children: this.props.children,
            }),
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${ze}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Right`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${F}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `BottomLeft`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${Be}`,
            onMouseDown: (e) => {
              this.OnMouseDown(e, `Bottom`);
            },
            draggable: !1,
          }),
          (0, U.jsx)(`div`, {
            className: `${S} ${Ve}`,
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
(o([d], Z.prototype, `LinkRegionBoxRef`, null),
  o([d], Z.prototype, `OnMouseDown`, null),
  o([d], Z.prototype, `UpdateBoxPosition`, null),
  o([d], Z.prototype, `OnMouseMove`, null),
  o([d], Z.prototype, `OnMouseUp`, null),
  o([d], Z.prototype, `OnResizeComplete`, null));
var tt = (e) => {
  let { title: t, className: n } = e,
    r = 26;
  t.length > 8 && (r = Math.max(r - (t.length - 5) / 2, 5.8));
  let [i, a] = ne();
  return (0, U.jsxs)(`svg`, {
    className: c(H, n),
    viewBox: `0 0 300 14`,
    children: [
      (0, U.jsx)(`defs`, {
        children: (0, U.jsxs)(`linearGradient`, {
          id: i,
          x1: `0`,
          x2: `0`,
          y1: `0`,
          y2: `100%`,
          gradientUnits: `userSpaceOnUse`,
          children: [
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `0%` }),
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `20%` }),
            (0, U.jsx)(`stop`, { stopColor: `#fff`, offset: `40%` }),
            (0, U.jsx)(`stop`, { stopColor: `#eee`, offset: `60%` }),
            (0, U.jsx)(`stop`, { stopColor: `#ddd`, offset: `80%` }),
            (0, U.jsx)(`stop`, { stopColor: `#ccc`, offset: `100%` }),
          ],
        }),
      }),
      (0, U.jsx)(`text`, {
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
function nt(e) {
  let { title: t, children: n } = e,
    r = v.useContext(q),
    i = v.useRef(null);
  return (0, U.jsx)(se, {
    nodeRef: i,
    timeout: G,
    appear: !0,
    in: r.bFullscreen,
    classNames: W,
    children: (0, U.jsxs)(`div`, {
      ref: i,
      className: c(Je, t ? void 0 : ``),
      children: [
        (0, U.jsx)(`div`, {
          className: qe,
          children: !!t && (0, U.jsx)(tt, { title: t }),
        }),
        (0, U.jsx)(`div`, { className: Ye, children: n }),
      ],
    }),
  });
}
var rt = class {
  m_strLibraryLogoURL;
  m_strLibraryHeroURL;
  m_unAppID;
  m_strAppName;
  m_logoPosition = void 0;
  m_strSaveURL;
  constructor(e) {
    (oe(this),
      (this.m_strLibraryHeroURL = e.strLibraryHeroURL),
      (this.m_strLibraryLogoURL = e.strLibraryLogoURL),
      (this.m_unAppID = e.unAppID),
      (this.m_strAppName = e.strAppName),
      (this.m_logoPosition = e.logoPosition || K),
      (this.m_strSaveURL = e.strSaveURL || null),
      this.m_logoPosition.pinnedPosition ||
        (this.m_logoPosition.pinnedPosition = K.pinnedPosition),
      this.m_logoPosition.nHeightPct ||
        (this.m_logoPosition.nHeightPct = K.nHeightPct),
      this.m_logoPosition.nWidthPct ||
        (this.m_logoPosition.nWidthPct = K.nWidthPct));
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
o([ae], rt.prototype, `m_logoPosition`, void 0);
var it = `gZTjQNknWIg-`,
  at = `lnkyboMJU1k-`,
  ot = `pYwhblKojHA-`,
  st = `SJbG2sewzgw-`,
  ct = `pqPJ00DjeAQ-`,
  lt = `UdoT8nbRZ50-`,
  ut = `Ez29KTBrKgk-`,
  dt = `kKzc9HliZ3o-`,
  ft = `bdDiMIItJIc-`,
  pt = `rz6s6W5aVGg-`,
  mt = `h3AARtFdvkE-`,
  ht = `IEjr2GHHVO8-`,
  gt = `UgxwXmTs3dk-`,
  _t = `_8iXOZFyh5fk-`,
  vt = `d3uhwRLMAco-`,
  yt = `CfMNPDUt1oc-`,
  bt = `_5QFPMf4FN7I-`,
  xt = `Bnh4xoaC6CE-`,
  St = `yPxcIT6FtEI-`,
  Ct = `VUv8Fwgl4Yk-`,
  wt = `g5BEkJBcUOQ-`,
  Tt = `_7ayILp-7DAY-`,
  Et = `xhMdzQNmgZA-`,
  Dt = `Jap35bAnbeY-`,
  Ot = `ZPKHyjagDGc-`,
  kt = `LLL-ejIWdM0-`,
  At = `yRrAc142NnM-`,
  jt = `_4BXDW4zWmHE-`,
  Mt = `EqJqovUKNuA-`,
  Nt = `-vkVQUcE4-4-`,
  Pt = `Fj23xrwt0gU-`,
  Ft = `_6vX34XWHqLs-`,
  It = `KJ7LlYMItdw-`,
  Lt = `V1SCWKRLdiw-`,
  Rt = `BSaL1mvX1-Y-`,
  zt = `Et8TleuXa6s-`,
  Bt = `VKqNZ4kVIF0-`,
  Vt = `E0DW8YLs3HE-`,
  Ht = `sQU67pphNqw-`,
  Ut = `cexYnfOA6Wo-`,
  Wt = `eZSNsE46fnA-`,
  Gt = `T0y9mw3oF8A-`,
  Kt = `kfm5dxnWNmc-`,
  qt = `BMe08DVBdqU-`,
  Jt = `MF9G0HKI4w0-`;
function Yt() {
  return (0, U.jsxs)(v.Fragment, {
    children: [
      (0, U.jsx)(`span`, { style: { fontSize: 0 } }),
      (0, U.jsx)(`div`, {
        className: c(vt),
        children: (0, U.jsxs)(`div`, {
          className: yt,
          children: [
            (0, U.jsx)($t, {}),
            (0, U.jsx)(Xt, {}),
            (0, U.jsx)(`div`, {
              className: Ct,
              children: (0, U.jsxs)(`div`, {
                className: wt,
                children: [
                  (0, U.jsx)(`div`, {
                    className: Dt,
                    children: (0, U.jsx)(te, {}),
                  }),
                  (0, U.jsxs)(`div`, {
                    className: Tt,
                    children: [
                      `Game Info`,
                      (0, U.jsx)(`div`, {
                        className: Et,
                        children: (0, U.jsx)(m, { angle: 180 }),
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
function Xt() {
  return (0, U.jsx)(`div`, { className: c(xt), children: (0, U.jsx)(Zt, {}) });
}
function Zt() {
  return (0, U.jsxs)(`div`, {
    className: St,
    children: [
      (0, U.jsx)(`div`, {
        className: Vt,
        children: (0, U.jsxs)(`div`, {
          className: Ht,
          children: [
            (0, U.jsx)(`div`, { className: Ut, children: `LAST PLAYED` }),
            (0, U.jsx)(`div`, { className: Wt, children: `Mar 24` }),
          ],
        }),
      }),
      (0, U.jsxs)(`div`, {
        className: It,
        children: [
          (0, U.jsx)(`div`, { className: Lt }),
          (0, U.jsxs)(`div`, {
            className: Rt,
            children: [
              (0, U.jsx)(`div`, { className: zt, children: `PLAY TIME` }),
              (0, U.jsx)(`div`, { className: Bt, children: `37 hours` }),
            ],
          }),
        ],
      }),
      (0, U.jsxs)(`div`, {
        className: At,
        children: [
          (0, U.jsx)(`div`, { className: jt }),
          (0, U.jsxs)(`div`, {
            className: Mt,
            children: [
              (0, U.jsx)(`div`, { className: Pt, children: `ACHIEVEMENTS` }),
              (0, U.jsxs)(`div`, {
                className: Nt,
                children: [
                  (0, U.jsx)(`div`, { className: Ft, children: `30/47` }),
                  (0, U.jsx)(Qt, { progressPct: 3e3 / 47 }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Qt = class extends v.Component {
  render() {
    return (0, U.jsx)(`div`, {
      className: Ot,
      children: (0, U.jsx)(`div`, {
        className: kt,
        style: { width: this.props.progressPct + `%` },
      }),
    });
  }
};
function $t() {
  return (0, U.jsx)(`div`, {
    className: bt,
    children: (0, U.jsx)(`div`, {
      className: Gt,
      children: (0, U.jsx)(`div`, {
        className: c(Kt, qt),
        children: (0, U.jsx)(`div`, { className: Jt, children: `PLAY` }),
      }),
    }),
  });
}
var en = `Szu04ev-WDc-`,
  tn = `_8QZBI7nPLaM-`,
  nn = `cZy78P5HezQ-`,
  rn = `Y34KO8gjg6s-`,
  an = [
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
function on(e) {
  let { highlightedName: t } = e,
    n = v.useCallback((e) => {
      e && e.scrollIntoView({ block: `center` });
    }, []),
    r = v.useMemo(() => {
      if (an.indexOf(t) !== -1) return an;
      {
        let e = [...an, t];
        return (e.sort(), e);
      }
    }, [t]);
  return (0, U.jsx)(`div`, {
    className: en,
    children: r.map((e) => {
      let r = t === e;
      return (0, U.jsx)(
        `div`,
        { className: c(tn, r ? nn : rn), ref: r ? n : void 0, children: e },
        e,
      );
    }),
  });
}
function sn(e, t) {
  let n = new rt(u(`editorconfig`, t));
  ye.createRoot(t).render(v.createElement(e ? Q : $, { LogoEditorStore: n }));
}
var Q = class extends v.Component {
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
          let r = new FormData();
          (r.append(`json`, `1`),
            r.append(`sessionid`, n()),
            r.append(
              `app[assets][library_logo][logo_position][pinned_position]`,
              t.pinnedPosition,
            ),
            r.append(
              `app[assets][library_logo][logo_position][width_pct]`,
              `` + t.nWidthPct,
            ),
            r.append(
              `app[assets][library_logo][logo_position][height_pct]`,
              `` + t.nHeightPct,
            ),
            await be.default.post(e.GetSaveURL(), r),
            this.setState({ saving: !1, saved: !0, unsavedChanges: !1 }));
        } catch (e) {
          (console.error(e),
            alert(`There was a problem saving changes`),
            this.setState({ saving: !1 }));
        }
      } else
        (window.opener &&
          window.opener.postMessage(
            { appid: e.GetAppID(), ...ie(e.GetLogoPosition()) },
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
    return (0, U.jsx)(v.Fragment, {
      children: (0, U.jsxs)(`div`, {
        className: c(ut, this.state.saving && `eL6nV1smj9g-`),
        children: [
          (0, U.jsxs)(`div`, {
            className: pt,
            children: [
              (0, U.jsx)(`div`, {
                className: c(mt, this.state.saved && `eSDyAoPnXQU-`),
                children: _(`#StoreAdmin_LibraryPlacementTool_ChangesSaved`),
              }),
              (0, U.jsxs)(`div`, {
                className: ht,
                children: [
                  (0, U.jsx)(ee, {
                    onClick: this.OnOK,
                    className: gt,
                    children: _(`#Button_Save`),
                  }),
                  (0, U.jsx)(p, {
                    onClick: this.OnCancel,
                    className: gt,
                    children: this.state.unsavedChanges
                      ? _(`#Button_Cancel`)
                      : _(`#Button_Close`),
                  }),
                ],
              }),
            ],
          }),
          (0, U.jsx)(`div`, {
            className: dt,
            children: (0, U.jsx)(ue, { size: `xlarge`, className: ft }),
          }),
          (0, U.jsx)($, {
            ...this.props,
            fnOnPositionChanged: this.OnPositionChanged,
          }),
        ],
      }),
    });
  }
};
(o([d], Q.prototype, `OnBeforeUnload`, null),
  o([d], Q.prototype, `OnOK`, null),
  o([d], Q.prototype, `OnCancel`, null),
  o([d], Q.prototype, `OnPositionChanged`, null));
var $ = class extends v.Component {
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
    return (0, U.jsxs)(`div`, {
      className: it,
      children: [
        (0, U.jsx)(`div`, {
          className: ct,
          children: (0, U.jsx)(on, { highlightedName: e.GetAppName() }),
        }),
        (0, U.jsx)(`div`, { className: _t }),
        (0, U.jsxs)(`div`, {
          className: ot,
          children: [
            (0, U.jsx)(cn, { LogoEditorStore: e }),
            (0, U.jsx)(`div`, {
              className: at,
              children: (0, U.jsx)(J, {
                editMode: t && this.state.bEditModeEnabled,
                hasHeroImage: !0,
                rgHeaderImages: [e.GetHeroURL()],
                rgLogoImages: t ? [e.GetLogoURL()] : [],
                classNameNoLogo: st,
                fnOnPositionChanged: this.OnPositionChanged,
                logoPosition: e.GetLogoPosition(),
                children: (0, U.jsx)(nt, {
                  title: e.GetLogoURL() ? `` : e.GetAppName(),
                }),
              }),
            }),
            (0, U.jsx)(Yt, {}),
            (0, U.jsxs)(`div`, {
              className: lt,
              children: [
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
                (0, U.jsx)(`br`, {}),
              ],
            }),
          ],
        }),
      ],
    });
  }
};
o([d], $.prototype, `OnPositionChanged`, null);
var cn = re((e) => {
  let t = e.LogoEditorStore.GetLogoPosition();
  return (0, U.jsxs)(v.Fragment, {
    children: [
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][pinned_position]`,
        value: t.pinnedPosition,
      }),
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][width_pct]`,
        value: t.nWidthPct,
      }),
      (0, U.jsx)(`input`, {
        type: `hidden`,
        name: `app[assets][library_logo][logo_position][height_pct]`,
        value: t.nHeightPct,
      }),
    ],
  });
});
export { sn as Init_LibraryLogoEditor };

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, Nt as n, ft as r, l as i } from "./chunk~01cfc309bf.js";
import {
  a,
  c as o,
  d as s,
  f as c,
  h as l,
  l as ee,
  m as te,
  o as u,
  p as d,
  s as ne,
  u as re,
} from "./chunk~a19d1add1e.js";
import { n as f } from "./chunk~a7c5e71e12.js";
import { t as ie } from "./chunk~e3c69795ea.js";
import {
  $y as p,
  Ar as ae,
  Cr as m,
  G as h,
  Jy as g,
  Lb as _,
  Mr as v,
  Ux as oe,
  Vr as y,
  cx as b,
  er as se,
  jc as x,
  sl as ce,
  wc as S,
  xl as C,
} from "./main.js";
var w = e(t());
function T(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var le = `_6Ymd3Ej4NCU-`,
  ue = `nnMTzvpAu6Y-`,
  de = `plDm7MqblvA-`,
  fe = `_0SYoz2hcxOY-`,
  pe = `_6gRC1q99lWw-`,
  me = `a1l1nhz8GFU-`,
  he = `wfpm6FahiQY-`,
  ge = `G30RxXBSXck-`,
  _e = `Mw7bdt52AuY-`,
  ve = `_0ZS8IEfJKto-`,
  ye = `R-BER3-p7c8-`,
  be = `nCS2TzxRijY-`,
  E = r(),
  D = class extends w.Component {
    constructor(e) {
      (super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 }));
    }
    render() {
      let { config: e } = this.props,
        { activeIndex: t } = this.state,
        n = e[t],
        r = n ? n.renderContent() : null,
        i = e.length > 1,
        a = i
          ? ({ detail: { button: t } }) => {
              t === C.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === C.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, E.jsxs)(x, {
        className: le,
        onButtonDown: a,
        children: [i && (0, E.jsx)(xe, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, E.jsx)(
          Se,
          {
            active: n,
            onClick: () => this.setState({ activeIndex: t }),
            children: e(n),
          },
          t,
        );
      });
    }
  };
function xe(e) {
  return (0, E.jsx)(x, {
    className: ue,
    "flow-children": `row`,
    children: e.children,
  });
}
function O(e) {
  return (0, E.jsx)(`div`, { className: me, children: e.children });
}
function Se(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, E.jsx)(x, {
    className: S(de, t && `f-iRFuUHuSo-`),
    focusClassName: fe,
    onActivate: r,
    children: (0, E.jsx)(`div`, {
      className: S(pe, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function k(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, E.jsx)(
        x,
        {
          className: ge,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: fe,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, E.jsx)(x, { "flow-children": `grid`, className: he, children: o })
  );
}
function A(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(O, {
        children: (0, E.jsx)(M, {
          title: t,
          children: (0, E.jsx)(k, { ...a }),
        }),
      }),
      (0, E.jsx)(N, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function j(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsxs)(O, {
        children: [
          i && (0, E.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, E.jsx)(M, { title: e, children: (0, E.jsx)(k, { ...t }) }, e),
          ),
        ],
      }),
      (0, E.jsx)(N, { value: n, onChange: t }),
    ],
  });
}
function M(e) {
  return (0, E.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, E.jsx)(`div`, { className: _e, children: e.title }),
      (0, E.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function N(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, E.jsx)(`div`, {
    className: ve,
    children: (0, E.jsx)(se, {
      type: `text`,
      placeholder: g(`#AddonPicker_Search`),
      className: ye,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function P(e) {
  let { className: t, ...n } = e;
  return (0, E.jsx)(`div`, { className: S(t, be), ...n });
}
var F = 1e3;
function I(e) {
  return e.recent_emoticons;
}
function L(e) {
  return e.recent_stickers;
}
function R(e) {
  return I(e).length + L(e).length > 0;
}
function Ce(e) {
  let [t, r] = (0, w.useState)(e.is_initialized);
  return (
    (0, w.useEffect)(() => {
      if (!e.is_initialized) {
        e.UpdateEmoticonList();
        let t = n(
          () => e.is_initialized,
          () => r(e.is_initialized),
        );
        return () => t();
      }
      return () => {};
    }, [e]),
    t
  );
}
var we = i((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: o,
    } = e;
    Ce(t);
    let s = [];
    return (
      R(t) &&
        s.push({
          renderTab: (e) =>
            (0, E.jsx)(`span`, {
              title: g(`#AddonPicker_RecentlyUsed`),
              className: S(d, ne, e && void 0),
              children: (0, E.jsx)(Z, {}),
            }),
          renderContent: () =>
            (0, E.jsx)(B, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => o(e.name),
              flairGroupID: r,
            }),
        }),
      (0, E.jsx)(v, {
        children: (0, E.jsx)(D, {
          config: [
            ...s,
            {
              renderTab: (e) =>
                (0, E.jsx)(`span`, {
                  title: g(`#AddonPicker_Emoticons`),
                  className: S(d, e && void 0),
                  children: (0, E.jsx)(X, {}),
                }),
              renderContent: () =>
                (0, E.jsx)(V, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, E.jsx)(`span`, {
                  title: g(`#AddonPicker_Stickers`),
                  className: S(d, e && void 0),
                  children: (0, E.jsx)(Y, {}),
                }),
              renderContent: () =>
                (0, E.jsx)(U, { store: t, onItemSelect: (e) => o(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, E.jsx)(`span`, {
                  title: g(`#AddonPicker_RoomEffects`),
                  className: S(d, e && void 0),
                  children: (0, E.jsx)(je, {}),
                }),
              renderContent: () =>
                (0, E.jsx)(De, {
                  store: t,
                  effectSettings: n,
                  onItemSelect: (e) => a(e.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  z = class extends w.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = n(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      let {
          emoticonStore: e,
          onEmoticonSelected: t,
          onStickerSelected: n,
          strFlairGroupID: r,
        } = this.props,
        i = [];
      return (
        R(e) &&
          i.push({
            renderTab: (e) =>
              (0, E.jsx)(`span`, {
                title: g(`#AddonPicker_RecentlyUsed`),
                className: S(d, ne, e && void 0),
                children: (0, E.jsx)(Z, {}),
              }),
            renderContent: () =>
              (0, E.jsx)(B, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, E.jsx)(v, {
          children: (0, E.jsx)(D, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, E.jsx)(`span`, {
                    title: g(`#AddonPicker_Emoticons`),
                    className: S(d, e && void 0),
                    children: (0, E.jsx)(X, {}),
                  }),
                renderContent: () =>
                  (0, E.jsx)(V, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, E.jsx)(`span`, {
                    title: g(`#AddonPicker_Stickers`),
                    className: S(d, e && void 0),
                    children: (0, E.jsx)(Y, {}),
                  }),
                renderContent: () =>
                  (0, E.jsx)(U, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
z = _([i], z);
var Te = class extends w.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = n(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, E.jsx)(v, {
        children: (0, E.jsx)(D, {
          config: [
            {
              renderTab: () =>
                (0, E.jsx)(`span`, {
                  title: g(`#AddonPicker_Emoticons`),
                  className: d,
                  children: (0, E.jsx)(X, {}),
                }),
              renderContent: () =>
                (0, E.jsx)(W, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  Ee = class extends w.Component {
    m_disposeEmoticonStore;
    constructor(e) {
      (super(e), (this.state = { strSearchText: `` }));
      let t = this.props.emoticonStore;
      t.is_initialized ||
        (t.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = n(
          () => t.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, E.jsx)(v, {
        children: (0, E.jsx)(D, {
          config: [
            {
              renderTab: () =>
                (0, E.jsx)(`span`, {
                  title: g(`#AddonPicker_Emoticons`),
                  className: d,
                  children: (0, E.jsx)(X, {}),
                }),
              renderContent: () =>
                (0, E.jsx)(G, {
                  store: this.props.emoticonStore,
                  onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  B = class extends w.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        I(e) &&
          i.push({
            title: g(`#AddonPicker_RecentEmoticons`),
            items: h.FilterEmoticons(I(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, E.jsx)(K, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, E.jsx)(P, {
                children: r
                  ? g(`#AddonPicker_NoResults`)
                  : g(`#AddonPicker_NoRecent`, g(`#AddonPicker_Emoticons`)),
              }),
          }),
        L(e).length &&
          i.push({
            title: g(`#AddonPicker_RecentStickers`),
            items: h.FilterStickers(L(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, E.jsx)(q, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, E.jsx)(P, {
                children: r
                  ? g(`#AddonPicker_NoResults`)
                  : g(`#AddonPicker_NoRecent`, g(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, E.jsx)(j, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  V = class extends w.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = h.FilterEmoticons(i, r).slice(0, F);
      return (0, E.jsx)(A, {
        title: g(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, E.jsx)(K, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, E.jsx)(P, { children: g(`#AddonPicker_NoResults`) })
            : (0, E.jsx)(H, {}),
      });
    }
  };
function H() {
  return (0, E.jsxs)(E.Fragment, {
    children: [
      (0, E.jsx)(P, {
        children: g(`#AddonPicker_NoneOwned`, g(`#AddonPicker_Emoticons`)),
      }),
      (0, E.jsx)(P, {
        children: p(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, E.jsx)(m, {
            href: `${b.STORE_BASE_URL}points/shop/c/emoticons`,
            children: g(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, E.jsx)(m, {
            href: `${b.COMMUNITY_BASE_URL}market`,
            children: g(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var U = class extends w.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = h.FilterStickers(e.GetStickerList(), n);
      return (0, E.jsx)(A, {
        title: g(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, E.jsx)(q, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, E.jsx)(P, { children: g(`#AddonPicker_NoResults`) })
            : (0, E.jsxs)(E.Fragment, {
                children: [
                  (0, E.jsx)(P, {
                    children: g(
                      `#AddonPicker_NoneOwned`,
                      g(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, E.jsx)(P, {
                    children: p(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, E.jsx)(m, {
                        href: `${b.STORE_BASE_URL}points/shop/c/stickers`,
                        children: g(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  De = class extends w.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, E.jsx)(A, {
        title: g(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, E.jsx)(ke, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, E.jsx)(P, { children: g(`#AddonPicker_NoResults`) })
            : (0, E.jsxs)(E.Fragment, {
                children: [
                  (0, E.jsx)(P, {
                    children: g(
                      `#AddonPicker_NoneOwned`,
                      g(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, E.jsx)(P, {
                    children: p(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, E.jsx)(m, {
                        href: `${b.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: g(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  W = class extends w.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        I(e).length &&
          i.push({
            title: g(`#AddonPicker_RecentEmoticons`),
            items: h.FilterEmoticons(I(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, E.jsx)(K, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, E.jsx)(P, {
                children: r
                  ? g(`#AddonPicker_NoResults`)
                  : g(`#AddonPicker_NoRecent`, g(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, E.jsx)(j, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: g(`#AddonPicker_AllEmoticons`),
              items: h.FilterStickers(e.emoticon_list, r).slice(0, F),
              onItemSelect: t,
              renderItem: (e) => (0, E.jsx)(K, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, E.jsx)(P, { children: g(`#AddonPicker_NoResults`) })
                  : (0, E.jsx)(H, {}),
            },
          ],
        })
      );
    }
  };
W = _([i], W);
var G = class extends w.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, E.jsx)(j, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: g(`#ChatEntryButton_Flair`),
          items: h.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, E.jsx)(K, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, E.jsx)(P, { children: g(`#AddonPicker_NoResults`) })
              : (0, E.jsx)(H, {}),
        },
      ],
    });
  }
};
G = _([i], G);
var K = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, E.jsxs)(`div`, {
      className: re,
      children: [
        (0, E.jsx)(a, { emoticon: t.name, large: n }),
        r && (0, E.jsx)(J, {}),
      ],
    });
  },
  q = class extends w.Component {
    state = { showHover: !1 };
    m_ref = w.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = T(b.COMMUNITY_CDN_URL, e.name);
      return (0, E.jsxs)(`div`, {
        ref: this.m_ref,
        className: S(t, te),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, E.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, E.jsx)(Oe, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  Oe = i((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = f(r, {});
    return (0, E.jsx)(u, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, E.jsx)(`img`, {
        src: T(b.COMMUNITY_CDN_URL, n),
        className: l,
      }),
    });
  }),
  ke = class extends w.Component {
    state = { showHover: !1 };
    m_ref = w.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, E.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: S(n, o),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, E.jsx)(Ae, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  Ae = i((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      a = i[n],
      [o] = f(r, {});
    return (0, E.jsx)(u, {
      target: t,
      title: n,
      subtitle: o?.GetName(),
      children: (0, E.jsx)(`div`, {
        className: ee,
        children: a.renderEffectIcon(),
      }),
    });
  });
function J() {
  return (0, E.jsx)(`div`, {
    className: c,
    children: (0, E.jsx)(`div`, { className: s }),
  });
}
function Y(e) {
  return (0, E.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function X(e) {
  return (0, E.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, E.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function je(e) {
  return (0, E.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, E.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function Z(e) {
  let { className: t, ...n } = e;
  return (0, E.jsx)(`svg`, {
    className: S(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, E.jsx)(`path`, {
      d: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var Me = `pvP8JT4e7EA-`,
  Ne = `FcUxYTJ41iw-`,
  Pe = `CVH0kQ-5qJ4-`,
  Fe = `-OdMBhmRPrM-`,
  Ie = `ht2q6zu-Yn8-`,
  Le = `kzKCSSWaRZ4-`,
  Re = `_1zsmA-mI3cU-`,
  ze = `_4X5-n9MaD8g-`,
  Q = 1576780700,
  $ = class extends w.Component {
    OnEmoticonClick(e) {
      let {
          emoticonStore: t,
          strFlairGroupID: n,
          SetUIDisplayPref: r,
          contextOptions: i,
          bShowChatAddons: a,
        } = this.props,
        {
          roomEffectSettings: o,
          onRoomEffectSelected: s,
          onStickerSelected: c,
        } = this.props,
        l = null;
      if (
        ((l =
          a && o && s && c
            ? (0, E.jsx)(we, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, E.jsx)(Ee, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, E.jsx)(Te, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        ae(
          l,
          e,
          i || {
            bOverlapHorizontal: !0,
            bPreferPopLeft: !0,
            bPreferPopTop: !0,
          },
        ),
        this.BHaveUnseenEmoticons() && r)
      ) {
        let e = this.GetNewestIndicatorTime();
        ((!e || e < Q) && (e = Q), r(`rtLastAckedNewEmoticons`, e));
      }
    }
    GetNewestIndicatorTime() {
      let e = this.props.emoticonStore,
        t = -(2 ** 53 - 1),
        n = e.GetTimeReceivedNewestEmoticon();
      n && (t = n);
      let r = e.GetTimeReceivedForStickerOrEffect();
      return ((t = Math.max(r, t)), t > -(2 ** 53 - 1) ? t : void 0);
    }
    BHaveUnseenEmoticons() {
      let { rtLastAckedNewEmoticons: e } = this.props,
        t = this.GetNewestIndicatorTime();
      return !e || e < Q || (t && (!e || e < t));
    }
    render() {
      let { disabled: e, className: t, ttip: n, useImg: r } = this.props,
        i = [t],
        a = !1;
      return (
        e ? i.push(`disabled`) : this.BHaveUnseenEmoticons() && (a = !0),
        n && i.push(`ttip`),
        r
          ? (0, E.jsx)(x, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: g(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, E.jsx)(y, {
                toolTipContent: n,
                children: (0, E.jsx)(`img`, {
                  src: this.props.useImg,
                  className: S(...i),
                  title: this.props.title || g(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(Le, Re),
            (0, E.jsx)(ce, {
              className: S(...i),
              onOKActionDescription: g(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || g(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, E.jsxs)(y, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, E.jsx)(ie, {}),
                  a && (0, E.jsx)(J, {}),
                ],
              }),
            }))
      );
    }
  };
(_([oe], $.prototype, `OnEmoticonClick`, null), ($ = _([i], $)));
var Be = $;
export {
  Le as a,
  Ie as c,
  Me as i,
  J as l,
  Fe as n,
  Ne as o,
  Pe as r,
  ze as s,
  Be as t,
};

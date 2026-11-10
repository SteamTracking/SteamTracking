/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, Nt as n, ft as r, l as i } from "./libraries.js";
import {
  a,
  c as o,
  d as s,
  f as c,
  i as l,
  l as ee,
  m as te,
  o as u,
  p as ne,
  s as re,
  u as ie,
} from "./presenterpopup.js";
import { n as d } from "./storeitemhooks.js";
import { t as ae } from "./alternate_icons.js";
import {
  Ac as f,
  Ar as p,
  Cc as m,
  G as h,
  Nb as g,
  Or as oe,
  Qn as se,
  Wy as _,
  Yy as v,
  il as ce,
  ix as y,
  vl as b,
  xr as x,
  zr as S,
  zx as le,
} from "./main.js";
var C = e(t());
function w(e, t, n = !1) {
  return `${e}economy/sticker${n ? `static` : ``}/${encodeURIComponent(t)}`;
}
var ue = `_6Ymd3Ej4NCU-`,
  de = `nnMTzvpAu6Y-`,
  fe = `plDm7MqblvA-`,
  pe = `_0SYoz2hcxOY-`,
  me = `_6gRC1q99lWw-`,
  he = `a1l1nhz8GFU-`,
  ge = `wfpm6FahiQY-`,
  _e = `G30RxXBSXck-`,
  ve = `Mw7bdt52AuY-`,
  ye = `_0ZS8IEfJKto-`,
  be = `R-BER3-p7c8-`,
  xe = `nCS2TzxRijY-`,
  T = r(),
  E = class extends C.Component {
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
              t === b.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : t === b.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      e.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, T.jsxs)(f, {
        className: ue,
        onButtonDown: a,
        children: [i && (0, T.jsx)(Se, { children: this.RenderTabs() }), r],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: e }, t) => {
        let n = this.state.activeIndex === t;
        return (0, T.jsx)(
          Ce,
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
function Se(e) {
  return (0, T.jsx)(f, {
    className: de,
    "flow-children": `row`,
    children: e.children,
  });
}
function D(e) {
  return (0, T.jsx)(`div`, { className: he, children: e.children });
}
function Ce(e) {
  let { active: t, children: n, onClick: r } = e;
  return (0, T.jsx)(f, {
    className: m(fe, t && `f-iRFuUHuSo-`),
    focusClassName: pe,
    onActivate: r,
    children: (0, T.jsx)(`div`, {
      className: m(me, t && `f-iRFuUHuSo-`),
      children: n,
    }),
  });
}
function O(e) {
  let {
      items: t,
      renderItem: n,
      onItemSelect: r,
      keyExtractor: i,
      renderEmpty: a,
    } = e,
    o = t.map((e, a) =>
      (0, T.jsx)(
        f,
        {
          className: _e,
          onActivate: () => r(t[a]),
          autoFocus: a === 0,
          focusClassName: pe,
          children: n(t[a]),
        },
        i(e),
      ),
    );
  return (
    t.length === 0 && a && (o = a()),
    (0, T.jsx)(f, { "flow-children": `grid`, className: ge, children: o })
  );
}
function k(e) {
  let { title: t, onFilterChange: n, filter: r, onSubmit: i, ...a } = e;
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsx)(D, {
        children: (0, T.jsx)(j, {
          title: t,
          children: (0, T.jsx)(O, { ...a }),
        }),
      }),
      (0, T.jsx)(M, { value: r, onChange: n, onSubmit: i }),
    ],
  });
}
function A(e) {
  let { onFilterChange: t, filter: n, sections: r, title: i } = e;
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsxs)(D, {
        children: [
          i && (0, T.jsx)(`div`, { className: `Zcgr0x6gQMc-`, children: i }),
          r.map(({ title: e, ...t }) =>
            (0, T.jsx)(j, { title: e, children: (0, T.jsx)(O, { ...t }) }, e),
          ),
        ],
      }),
      (0, T.jsx)(M, { value: n, onChange: t }),
    ],
  });
}
function j(e) {
  return (0, T.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, T.jsx)(`div`, { className: ve, children: e.title }),
      (0, T.jsx)(`div`, { className: void 0, children: e.children }),
    ],
  });
}
function M(e) {
  let { value: t, onChange: n, onSubmit: r } = e;
  return (0, T.jsx)(`div`, {
    className: ye,
    children: (0, T.jsx)(se, {
      type: `text`,
      placeholder: _(`#AddonPicker_Search`),
      className: be,
      value: t,
      onChange: (e) => n(e.target.value),
      onSubmit: r,
    }),
  });
}
function N(e) {
  let { className: t, ...n } = e;
  return (0, T.jsx)(`div`, { className: m(t, xe), ...n });
}
var P = 1e3;
function F(e) {
  return e.recent_emoticons;
}
function I(e) {
  return e.recent_stickers;
}
function L(e) {
  return F(e).length + I(e).length > 0;
}
function we(e) {
  let [t, r] = (0, C.useState)(e.is_initialized);
  return (
    (0, C.useEffect)(() => {
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
var Te = i((e) => {
    let {
      emoticonStore: t,
      roomEffectSettings: n,
      strFlairGroupID: r,
      onEmoticonSelected: i,
      onRoomEffectSelected: a,
      onStickerSelected: o,
    } = e;
    we(t);
    let s = [];
    return (
      L(t) &&
        s.push({
          renderTab: (e) =>
            (0, T.jsx)(`span`, {
              title: _(`#AddonPicker_RecentlyUsed`),
              className: m(c, u, e && void 0),
              children: (0, T.jsx)(X, {}),
            }),
          renderContent: () =>
            (0, T.jsx)(z, {
              store: t,
              onEmoticonSelect: (e) => i(e.name),
              onStickerSelect: (e) => o(e.name),
              flairGroupID: r,
            }),
        }),
      (0, T.jsx)(p, {
        children: (0, T.jsx)(E, {
          config: [
            ...s,
            {
              renderTab: (e) =>
                (0, T.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: m(c, e && void 0),
                  children: (0, T.jsx)(Y, {}),
                }),
              renderContent: () =>
                (0, T.jsx)(B, {
                  store: t,
                  onItemSelect: (e) => i(e.name),
                  flairGroupID: r,
                }),
            },
            {
              renderTab: (e) =>
                (0, T.jsx)(`span`, {
                  title: _(`#AddonPicker_Stickers`),
                  className: m(c, e && void 0),
                  children: (0, T.jsx)(J, {}),
                }),
              renderContent: () =>
                (0, T.jsx)(H, { store: t, onItemSelect: (e) => o(e.name) }),
            },
            {
              renderTab: (e) =>
                (0, T.jsx)(`span`, {
                  title: _(`#AddonPicker_RoomEffects`),
                  className: m(c, e && void 0),
                  children: (0, T.jsx)(Me, {}),
                }),
              renderContent: () =>
                (0, T.jsx)(Oe, {
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
  R = class extends C.Component {
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
        L(e) &&
          i.push({
            renderTab: (e) =>
              (0, T.jsx)(`span`, {
                title: _(`#AddonPicker_RecentlyUsed`),
                className: m(c, u, e && void 0),
                children: (0, T.jsx)(X, {}),
              }),
            renderContent: () =>
              (0, T.jsx)(z, {
                store: e,
                onEmoticonSelect: (e) => t(e.name),
                onStickerSelect: (e) => n(e.name),
                flairGroupID: r,
              }),
          }),
        (0, T.jsx)(p, {
          children: (0, T.jsx)(E, {
            config: [
              ...i,
              {
                renderTab: (e) =>
                  (0, T.jsx)(`span`, {
                    title: _(`#AddonPicker_Emoticons`),
                    className: m(c, e && void 0),
                    children: (0, T.jsx)(Y, {}),
                  }),
                renderContent: () =>
                  (0, T.jsx)(B, {
                    store: e,
                    onItemSelect: (e) => t(e.name),
                    flairGroupID: r,
                  }),
              },
              {
                renderTab: (e) =>
                  (0, T.jsx)(`span`, {
                    title: _(`#AddonPicker_Stickers`),
                    className: m(c, e && void 0),
                    children: (0, T.jsx)(J, {}),
                  }),
                renderContent: () =>
                  (0, T.jsx)(H, { store: e, onItemSelect: (e) => n(e.name) }),
              },
            ],
          }),
        })
      );
    }
  };
R = g([i], R);
var Ee = class extends C.Component {
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
      return (0, T.jsx)(p, {
        children: (0, T.jsx)(E, {
          config: [
            {
              renderTab: () =>
                (0, T.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: c,
                  children: (0, T.jsx)(Y, {}),
                }),
              renderContent: () =>
                (0, T.jsx)(U, {
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
  De = class extends C.Component {
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
      return (0, T.jsx)(p, {
        children: (0, T.jsx)(E, {
          config: [
            {
              renderTab: () =>
                (0, T.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: c,
                  children: (0, T.jsx)(Y, {}),
                }),
              renderContent: () =>
                (0, T.jsx)(W, {
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
  z = class extends C.Component {
    state = { filter: `` };
    render() {
      let { store: e, onEmoticonSelect: t, onStickerSelect: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        F(e) &&
          i.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: h.FilterEmoticons(F(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, T.jsx)(G, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, T.jsx)(N, {
                children: r
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        I(e).length &&
          i.push({
            title: _(`#AddonPicker_RecentStickers`),
            items: h.FilterStickers(I(e), r),
            onItemSelect: n,
            renderItem: (e) => (0, T.jsx)(K, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            renderEmpty: () =>
              (0, T.jsx)(N, {
                children: r
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, T.jsx)(A, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: i,
        })
      );
    }
  },
  B = class extends C.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = !r && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
        a = h.FilterEmoticons(i, r).slice(0, P);
      return (0, T.jsx)(k, {
        title: _(`#AddonPicker_Emoticons`),
        items: a,
        onItemSelect: t,
        renderItem: (e) => (0, T.jsx)(G, { emoticon: e }),
        keyExtractor: (e) => e.name,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => t(a[0]),
        renderEmpty: () =>
          r
            ? (0, T.jsx)(N, { children: _(`#AddonPicker_NoResults`) })
            : (0, T.jsx)(V, {}),
      });
    }
  };
function V() {
  return (0, T.jsxs)(T.Fragment, {
    children: [
      (0, T.jsx)(N, {
        children: _(`#AddonPicker_NoneOwned`, _(`#AddonPicker_Emoticons`)),
      }),
      (0, T.jsx)(N, {
        children: v(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, T.jsx)(x, {
            href: `${y.STORE_BASE_URL}points/shop/c/emoticons`,
            children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, T.jsx)(x, {
            href: `${y.COMMUNITY_BASE_URL}market`,
            children: _(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var H = class extends C.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t } = this.props,
        { filter: n } = this.state,
        r = h.FilterStickers(e.GetStickerList(), n);
      return (0, T.jsx)(k, {
        title: _(`#EmoticonPicker_StickerHeading`),
        items: r,
        onItemSelect: t,
        renderItem: (e) => (0, T.jsx)(K, { sticker: e }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: n,
        onSubmit: () => t(r[0]),
        renderEmpty: () =>
          n
            ? (0, T.jsx)(N, { children: _(`#AddonPicker_NoResults`) })
            : (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(N, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, T.jsx)(N, {
                    children: v(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, T.jsx)(x, {
                        href: `${y.STORE_BASE_URL}points/shop/c/stickers`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  Oe = class extends C.Component {
    state = { filter: `` };
    render() {
      let { store: e, effectSettings: t, onItemSelect: n } = this.props,
        { filter: r } = this.state,
        i = e.GetEffectList().filter(({ name: e }) => e.indexOf(r) > -1);
      return (0, T.jsx)(k, {
        title: _(`#EmoticonPicker_EffectHeading`),
        items: i,
        onItemSelect: n,
        renderItem: (e) => (0, T.jsx)(Ae, { effect: e, roomEffectSettings: t }),
        keyExtractor: ({ name: e }) => e,
        onFilterChange: (e) => this.setState({ filter: e }),
        filter: r,
        onSubmit: () => n(i[0]),
        renderEmpty: () =>
          r
            ? (0, T.jsx)(N, { children: _(`#AddonPicker_NoResults`) })
            : (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(N, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, T.jsx)(N, {
                    children: v(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, T.jsx)(x, {
                        href: `${y.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  U = class extends C.Component {
    state = { filter: `` };
    render() {
      let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
        { filter: r } = this.state,
        i = [];
      return (
        F(e).length &&
          i.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: h.FilterEmoticons(F(e), r),
            onItemSelect: t,
            renderItem: (e) => (0, T.jsx)(G, { emoticon: e }),
            keyExtractor: (e) => e.name,
            renderEmpty: () =>
              (0, T.jsx)(N, {
                children: r
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, T.jsx)(A, {
          onFilterChange: (e) => this.setState({ filter: e }),
          filter: r,
          sections: [
            ...i,
            {
              title: _(`#AddonPicker_AllEmoticons`),
              items: h.FilterStickers(e.emoticon_list, r).slice(0, P),
              onItemSelect: t,
              renderItem: (e) => (0, T.jsx)(G, { emoticon: e }),
              keyExtractor: (e) => e.name,
              renderEmpty: () =>
                r
                  ? (0, T.jsx)(N, { children: _(`#AddonPicker_NoResults`) })
                  : (0, T.jsx)(V, {}),
            },
          ],
        })
      );
    }
  };
U = g([i], U);
var W = class extends C.Component {
  state = { filter: `` };
  render() {
    let { store: e, onItemSelect: t, flairGroupID: n } = this.props,
      { filter: r } = this.state;
    return (0, T.jsx)(A, {
      onFilterChange: (e) => this.setState({ filter: e }),
      filter: r,
      sections: [
        {
          title: _(`#ChatEntryButton_Flair`),
          items: h.FilterStickers(e.GetFlairListByGroupID(n), r),
          onItemSelect: t,
          renderItem: (e) => (0, T.jsx)(G, { emoticon: e }),
          keyExtractor: (e) => e.name,
          renderEmpty: () =>
            r
              ? (0, T.jsx)(N, { children: _(`#AddonPicker_NoResults`) })
              : (0, T.jsx)(V, {}),
        },
      ],
    });
  }
};
W = g([i], W);
var G = (e) => {
    let { emoticon: t, large: n } = e,
      r = !t.last_used && t.time_received;
    return (0, T.jsxs)(`div`, {
      className: ee,
      children: [
        (0, T.jsx)(l, { emoticon: t.name, large: n }),
        r && (0, T.jsx)(q, {}),
      ],
    });
  },
  K = class extends C.Component {
    state = { showHover: !1 };
    m_ref = C.createRef();
    render() {
      let { sticker: e, className: t, ...n } = this.props,
        r = w(y.COMMUNITY_CDN_URL, e.name);
      return (0, T.jsxs)(`div`, {
        ref: this.m_ref,
        className: m(t, ne),
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        ...n,
        children: [
          (0, T.jsx)(`img`, { style: { width: `100%` }, src: r }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, T.jsx)(ke, { target: this.m_ref.current, sticker: e }),
        ],
      });
    }
  },
  ke = i((e) => {
    let {
        target: t,
        sticker: { name: n, appid: r },
      } = e,
      [i] = d(r, {});
    return (0, T.jsx)(a, {
      target: t,
      title: n,
      subtitle: i?.GetName(),
      children: (0, T.jsx)(`img`, {
        src: w(y.COMMUNITY_CDN_URL, n),
        className: te,
      }),
    });
  }),
  Ae = class extends C.Component {
    state = { showHover: !1 };
    m_ref = C.createRef();
    render() {
      let { effect: e, roomEffectSettings: t, className: n, ...r } = this.props,
        i = t[e.name];
      return (0, T.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () => this.setState({ showHover: !0 }),
        onFocus: () => this.setState({ showHover: !0 }),
        onMouseLeave: () => this.setState({ showHover: !1 }),
        onBlur: () => this.setState({ showHover: !1 }),
        className: m(n, re),
        ...r,
        children: [
          i.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, T.jsx)(je, {
              target: this.m_ref.current,
              effect: e,
              roomEffectSettings: t,
            }),
        ],
      });
    }
  },
  je = i((e) => {
    let {
        target: t,
        effect: { name: n, appid: r },
        roomEffectSettings: i,
      } = e,
      s = i[n],
      [c] = d(r, {});
    return (0, T.jsx)(a, {
      target: t,
      title: n,
      subtitle: c?.GetName(),
      children: (0, T.jsx)(`div`, {
        className: o,
        children: s.renderEffectIcon(),
      }),
    });
  });
function q() {
  return (0, T.jsx)(`div`, {
    className: s,
    children: (0, T.jsx)(`div`, { className: ie }),
  });
}
function J(e) {
  return (0, T.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function Y(e) {
  return (0, T.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, T.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function Me(e) {
  return (0, T.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, T.jsx)(`path`, {
        fill: `currentColor`,
        d: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function X(e) {
  let { className: t, ...n } = e;
  return (0, T.jsx)(`svg`, {
    className: m(`SVGIcon_Button SVGIcon_Clock`, t),
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ...n,
    children: (0, T.jsx)(`path`, {
      d: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var Ne = `pvP8JT4e7EA-`,
  Pe = `FcUxYTJ41iw-`,
  Fe = `CVH0kQ-5qJ4-`,
  Ie = `-OdMBhmRPrM-`,
  Le = `ht2q6zu-Yn8-`,
  Z = `kzKCSSWaRZ4-`,
  Re = `_1zsmA-mI3cU-`,
  ze = `_4X5-n9MaD8g-`,
  Q = 1576780700,
  $ = class extends C.Component {
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
            ? (0, T.jsx)(Te, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (e) => this.props.OnEmoticonSelected(e, !1),
                roomEffectSettings: o,
                onRoomEffectSelected: s,
                onStickerSelected: c,
              })
            : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
              ? (0, T.jsx)(De, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, T.jsx)(Ee, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        oe(
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
          ? (0, T.jsx)(f, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, T.jsx)(S, {
                toolTipContent: n,
                children: (0, T.jsx)(`img`, {
                  src: this.props.useImg,
                  className: m(...i),
                  title: this.props.title || _(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (i.push(Z, Re),
            (0, T.jsx)(ce, {
              className: m(...i),
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || _(`#ChatEntryButton_Emoticon`),
              disabled: e,
              children: (0, T.jsxs)(S, {
                toolTipContent: n,
                children: [
                  this.props.buttonIcon || (0, T.jsx)(ae, {}),
                  a && (0, T.jsx)(q, {}),
                ],
              }),
            }))
      );
    }
  };
(g([le], $.prototype, `OnEmoticonClick`, null), ($ = g([i], $)));
var Be = $;
export {
  Z as a,
  Le as c,
  Ne as i,
  q as l,
  Ie as n,
  Pe as o,
  Fe as r,
  ze as s,
  Be as t,
};

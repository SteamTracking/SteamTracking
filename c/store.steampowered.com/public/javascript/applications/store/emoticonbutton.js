import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./presenterpopup.js";
import { _ } from "./storeitemhooks.js";
import { _ } from "./alternate_icons.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_());
function _(_, _, _ = !1) {
  return `${_}economy/sticker${_ ? `static` : ``}/${encodeURIComponent(_)}`;
}
var _ = `_6Ymd3Ej4NCU-`,
  _ = `nnMTzvpAu6Y-`,
  _ = `plDm7MqblvA-`,
  _ = `_0SYoz2hcxOY-`,
  _ = `_6gRC1q99lWw-`,
  _ = `a1l1nhz8GFU-`,
  _ = `wfpm6FahiQY-`,
  _ = `G30RxXBSXck-`,
  _ = `Mw7bdt52AuY-`,
  _ = `_0ZS8IEfJKto-`,
  _ = `R-BER3-p7c8-`,
  _ = `nCS2TzxRijY-`,
  _ = _(),
  _ = class extends _.Component {
    constructor(_) {
      (super(_),
        (this.state = {
          activeIndex: _.initialActiveIndex || 0,
        }));
    }
    render() {
      let { config: _ } = this.props,
        { activeIndex: _ } = this.state,
        _ = _[_],
        _ = _ ? _.renderContent() : null,
        _ = _.length > 1,
        _ = _
          ? ({ detail: { button: _ } }) => {
              _ === _.BUMPER_LEFT
                ? this.setState({
                    activeIndex: Math.max(0, this.state.activeIndex - 1),
                  })
                : _ === _.BUMPER_RIGHT &&
                  this.setState({
                    activeIndex: Math.min(
                      _.length - 1,
                      this.state.activeIndex + 1,
                    ),
                  });
            }
          : void 0;
      return (0, _.jsxs)(_, {
        className: _,
        onButtonDown: _,
        children: [
          _ &&
            (0, _.jsx)(_, {
              children: this.RenderTabs(),
            }),
          _,
        ],
      });
    }
    RenderTabs() {
      return this.props.config.map(({ renderTab: _ }, _) => {
        let _ = this.state.activeIndex === _;
        return (0, _.jsx)(
          _,
          {
            active: _,
            onClick: () =>
              this.setState({
                activeIndex: _,
              }),
            children: _(_),
          },
          _,
        );
      });
    }
  };
function _(_) {
  return (0, _.jsx)(_, {
    className: _,
    "flow-children": `row`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { active: _, children: _, onClick: _ } = _;
  return (0, _.jsx)(_, {
    className: _(_, _ && `f-iRFuUHuSo-`),
    focusClassName: _,
    onActivate: _,
    children: (0, _.jsx)(`div`, {
      className: _(_, _ && `f-iRFuUHuSo-`),
      children: _,
    }),
  });
}
function _(_) {
  let {
      items: _,
      renderItem: _,
      onItemSelect: _,
      keyExtractor: _,
      renderEmpty: _,
    } = _,
    _ = _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          className: _,
          onActivate: () => _(_[_]),
          autoFocus: _ === 0,
          focusClassName: _,
          children: _(_[_]),
        },
        _(_),
      ),
    );
  return (
    _.length === 0 && _ && (_ = _()),
    (0, _.jsx)(_, {
      "flow-children": `grid`,
      className: _,
      children: _,
    })
  );
}
function _(_) {
  let { title: _, onFilterChange: _, filter: _, onSubmit: _, ..._ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          title: _,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: _,
        onSubmit: _,
      }),
    ],
  });
}
function _(_) {
  let { onFilterChange: _, filter: _, sections: _, title: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `Zcgr0x6gQMc-`,
              children: _,
            }),
          _.map(({ title: _, ..._ }) =>
            (0, _.jsx)(
              _,
              {
                title: _,
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              },
              _,
            ),
          ),
        ],
      }),
      (0, _.jsx)(_, {
        value: _,
        onChange: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      }),
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { value: _, onChange: _, onSubmit: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      type: `text`,
      placeholder: _(`#AddonPicker_Search`),
      className: _,
      value: _,
      onChange: (_) => _(_.target.value),
      onSubmit: _,
    }),
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    ..._,
  });
}
var _ = 1e3;
function _(_) {
  return _.recent_emoticons;
}
function _(_) {
  return _.recent_stickers;
}
function _(_) {
  return _(_).length + _(_).length > 0;
}
function _(_) {
  let [_, _] = (0, _.useState)(_.is_initialized);
  return (
    (0, _.useEffect)(() => {
      if (!_.is_initialized) {
        _.UpdateEmoticonList();
        let _ = _(
          () => _.is_initialized,
          () => _(_.is_initialized),
        );
        return () => _();
      }
      return () => {};
    }, [_]),
    _
  );
}
var _ = _((_) => {
    let {
      emoticonStore: _,
      roomEffectSettings: _,
      strFlairGroupID: _,
      onEmoticonSelected: _,
      onRoomEffectSelected: _,
      onStickerSelected: _,
    } = _;
    _(_);
    let _ = [];
    return (
      _(_) &&
        _.push({
          renderTab: (_) =>
            (0, _.jsx)(`span`, {
              title: _(`#AddonPicker_RecentlyUsed`),
              className: _(_, _, _ && void 0),
              children: (0, _.jsx)(_, {}),
            }),
          renderContent: () =>
            (0, _.jsx)(_, {
              store: _,
              onEmoticonSelect: (_) => _(_.name),
              onStickerSelect: (_) => _(_.name),
              flairGroupID: _,
            }),
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            ..._,
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  onItemSelect: (_) => _(_.name),
                  flairGroupID: _,
                }),
            },
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Stickers`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  onItemSelect: (_) => _(_.name),
                }),
            },
            {
              renderTab: (_) =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_RoomEffects`),
                  className: _(_, _ && void 0),
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: _,
                  effectSettings: _,
                  onItemSelect: (_) => _(_.name),
                }),
            },
          ],
        }),
      })
    );
  }),
  _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      let {
          emoticonStore: _,
          onEmoticonSelected: _,
          onStickerSelected: _,
          strFlairGroupID: _,
        } = this.props,
        _ = [];
      return (
        _(_) &&
          _.push({
            renderTab: (_) =>
              (0, _.jsx)(`span`, {
                title: _(`#AddonPicker_RecentlyUsed`),
                className: _(_, _, _ && void 0),
                children: (0, _.jsx)(_, {}),
              }),
            renderContent: () =>
              (0, _.jsx)(_, {
                store: _,
                onEmoticonSelect: (_) => _(_.name),
                onStickerSelect: (_) => _(_.name),
                flairGroupID: _,
              }),
          }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            config: [
              ..._,
              {
                renderTab: (_) =>
                  (0, _.jsx)(`span`, {
                    title: _(`#AddonPicker_Emoticons`),
                    className: _(_, _ && void 0),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onItemSelect: (_) => _(_.name),
                    flairGroupID: _,
                  }),
              },
              {
                renderTab: (_) =>
                  (0, _.jsx)(`span`, {
                    title: _(`#AddonPicker_Stickers`),
                    className: _(_, _ && void 0),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onItemSelect: (_) => _(_.name),
                  }),
              },
            ],
          }),
        })
      );
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            {
              renderTab: () =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _,
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: this.props.emoticonStore,
                  onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  _ = class extends _.Component {
    m_disposeEmoticonStore;
    constructor(_) {
      (super(_),
        (this.state = {
          strSearchText: ``,
        }));
      let _ = this.props.emoticonStore;
      _.is_initialized ||
        (_.UpdateEmoticonList(),
        (this.m_disposeEmoticonStore = _(
          () => _.is_initialized,
          () => this.forceUpdate(),
        )));
    }
    componentWillUnmount() {
      this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
    }
    render() {
      return (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          config: [
            {
              renderTab: () =>
                (0, _.jsx)(`span`, {
                  title: _(`#AddonPicker_Emoticons`),
                  className: _,
                  children: (0, _.jsx)(_, {}),
                }),
              renderContent: () =>
                (0, _.jsx)(_, {
                  store: this.props.emoticonStore,
                  onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                  flairGroupID: this.props.strFlairGroupID,
                }),
            },
          ],
        }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onEmoticonSelect: _, onStickerSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = [];
      return (
        _(_) &&
          _.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: _.FilterEmoticons(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                emoticon: _,
              }),
            keyExtractor: (_) => _.name,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        _(_).length &&
          _.push({
            title: _(`#AddonPicker_RecentStickers`),
            items: _.FilterStickers(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                sticker: _,
              }),
            keyExtractor: ({ name: _ }) => _,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Stickers`)),
              }),
          }),
        (0, _.jsx)(_, {
          onFilterChange: (_) =>
            this.setState({
              filter: _,
            }),
          filter: _,
          sections: _,
        })
      );
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
        { filter: _ } = this.state,
        _ = !_ && _ ? _.GetFlairListByGroupID(_) : _.emoticon_list,
        _ = _.FilterEmoticons(_, _).slice(0, _);
      return (0, _.jsx)(_, {
        title: _(`#AddonPicker_Emoticons`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            emoticon: _,
          }),
        keyExtractor: (_) => _.name,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsx)(_, {}),
      });
    }
  };
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _(`#AddonPicker_NoneOwned`, _(`#AddonPicker_Emoticons`)),
      }),
      (0, _.jsx)(_, {
        children: _(
          `#AddonPicker_AcquireAtPointsShopOrMarket`,
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}points/shop/c/emoticons`,
            children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
          }),
          (0, _.jsx)(_, {
            href: `${_.COMMUNITY_BASE_URL}market`,
            children: _(`#AddonPicker_AcquireAtPointsShopOrMarket_Link`),
          }),
        ),
      }),
    ],
  });
}
var _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = _.FilterStickers(_.GetStickerList(), _);
      return (0, _.jsx)(_, {
        title: _(`#EmoticonPicker_StickerHeading`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            sticker: _,
          }),
        keyExtractor: ({ name: _ }) => _,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_Stickers`),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, _.jsx)(_, {
                        href: `${_.STORE_BASE_URL}points/shop/c/stickers`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, effectSettings: _, onItemSelect: _ } = this.props,
        { filter: _ } = this.state,
        _ = _.GetEffectList().filter(({ name: _ }) => _.indexOf(_) > -1);
      return (0, _.jsx)(_, {
        title: _(`#EmoticonPicker_EffectHeading`),
        items: _,
        onItemSelect: _,
        renderItem: (_) =>
          (0, _.jsx)(_, {
            effect: _,
            roomEffectSettings: _,
          }),
        keyExtractor: ({ name: _ }) => _,
        onFilterChange: (_) =>
          this.setState({
            filter: _,
          }),
        filter: _,
        onSubmit: () => _(_[0]),
        renderEmpty: () =>
          _
            ? (0, _.jsx)(_, {
                children: _(`#AddonPicker_NoResults`),
              })
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_NoneOwned`,
                      _(`#AddonPicker_RoomEffects`),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    children: _(
                      `#AddonPicker_AcquireAtPointsShop`,
                      (0, _.jsx)(_, {
                        href: `${_.STORE_BASE_URL}points/shop/c/chateffects`,
                        children: _(`#AddonPicker_AcquireAtPointsShop_Link`),
                      }),
                    ),
                  }),
                ],
              }),
      });
    }
  },
  _ = class extends _.Component {
    state = {
      filter: ``,
    };
    render() {
      let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
        { filter: _ } = this.state,
        _ = [];
      return (
        _(_).length &&
          _.push({
            title: _(`#AddonPicker_RecentEmoticons`),
            items: _.FilterEmoticons(_(_), _),
            onItemSelect: _,
            renderItem: (_) =>
              (0, _.jsx)(_, {
                emoticon: _,
              }),
            keyExtractor: (_) => _.name,
            renderEmpty: () =>
              (0, _.jsx)(_, {
                children: _
                  ? _(`#AddonPicker_NoResults`)
                  : _(`#AddonPicker_NoRecent`, _(`#AddonPicker_Emoticons`)),
              }),
          }),
        (0, _.jsx)(_, {
          onFilterChange: (_) =>
            this.setState({
              filter: _,
            }),
          filter: _,
          sections: [
            ..._,
            {
              title: _(`#AddonPicker_AllEmoticons`),
              items: _.FilterStickers(_.emoticon_list, _).slice(0, _),
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  emoticon: _,
                }),
              keyExtractor: (_) => _.name,
              renderEmpty: () =>
                _
                  ? (0, _.jsx)(_, {
                      children: _(`#AddonPicker_NoResults`),
                    })
                  : (0, _.jsx)(_, {}),
            },
          ],
        })
      );
    }
  };
_ = _([_], _);
var _ = class extends _.Component {
  state = {
    filter: ``,
  };
  render() {
    let { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
      { filter: _ } = this.state;
    return (0, _.jsx)(_, {
      onFilterChange: (_) =>
        this.setState({
          filter: _,
        }),
      filter: _,
      sections: [
        {
          title: _(`#ChatEntryButton_Flair`),
          items: _.FilterStickers(_.GetFlairListByGroupID(_), _),
          onItemSelect: _,
          renderItem: (_) =>
            (0, _.jsx)(_, {
              emoticon: _,
            }),
          keyExtractor: (_) => _.name,
          renderEmpty: () =>
            _
              ? (0, _.jsx)(_, {
                  children: _(`#AddonPicker_NoResults`),
                })
              : (0, _.jsx)(_, {}),
        },
      ],
    });
  }
};
_ = _([_], _);
var _ = (_) => {
    let { emoticon: _, large: _ } = _,
      _ = !_.last_used && _.time_received;
    return (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          emoticon: _.name,
          large: _,
        }),
        _ && (0, _.jsx)(_, {}),
      ],
    });
  },
  _ = class extends _.Component {
    state = {
      showHover: !1,
    };
    m_ref = _.createRef();
    render() {
      let { sticker: _, className: _, ..._ } = this.props,
        _ = _(_.COMMUNITY_CDN_URL, _.name);
      return (0, _.jsxs)(`div`, {
        ref: this.m_ref,
        className: _(_, _),
        onMouseOver: () =>
          this.setState({
            showHover: !0,
          }),
        onFocus: () =>
          this.setState({
            showHover: !0,
          }),
        onMouseLeave: () =>
          this.setState({
            showHover: !1,
          }),
        onBlur: () =>
          this.setState({
            showHover: !1,
          }),
        ..._,
        children: [
          (0, _.jsx)(`img`, {
            style: {
              width: `100%`,
            },
            src: _,
          }),
          this.state.showHover &&
            this.m_ref.current &&
            (0, _.jsx)(_, {
              target: this.m_ref.current,
              sticker: _,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let {
        target: _,
        sticker: { name: _, appid: _ },
      } = _,
      [_] = _(_, {});
    return (0, _.jsx)(_, {
      target: _,
      title: _,
      subtitle: _?.GetName(),
      children: (0, _.jsx)(`img`, {
        src: _(_.COMMUNITY_CDN_URL, _),
        className: _,
      }),
    });
  }),
  _ = class extends _.Component {
    state = {
      showHover: !1,
    };
    m_ref = _.createRef();
    render() {
      let { effect: _, roomEffectSettings: _, className: _, ..._ } = this.props,
        _ = _[_.name];
      return (0, _.jsxs)(`div`, {
        ref: this.m_ref,
        onMouseOver: () =>
          this.setState({
            showHover: !0,
          }),
        onFocus: () =>
          this.setState({
            showHover: !0,
          }),
        onMouseLeave: () =>
          this.setState({
            showHover: !1,
          }),
        onBlur: () =>
          this.setState({
            showHover: !1,
          }),
        className: _(_, _),
        ..._,
        children: [
          _.renderEffectIcon(),
          this.state.showHover &&
            this.m_ref.current &&
            (0, _.jsx)(_, {
              target: this.m_ref.current,
              effect: _,
              roomEffectSettings: _,
            }),
        ],
      });
    }
  },
  _ = _((_) => {
    let {
        target: _,
        effect: { name: _, appid: _ },
        roomEffectSettings: _,
      } = _,
      _ = _[_],
      [_] = _(_, {});
    return (0, _.jsx)(_, {
      target: _,
      title: _,
      subtitle: _?.GetName(),
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _.renderEffectIcon(),
      }),
    });
  });
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M21 29H22.1875V31H19L21 29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M29 22.1875V21L31 19V22.1875H29Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z`,
      }),
    ],
  });
}
function _(_) {
  let { className: _, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    className: _(`SVGIcon_Button SVGIcon_Clock`, _),
    version: `1.1`,
    _: `0px`,
    _: `0px`,
    width: `20px`,
    height: `20px`,
    viewBox: `0 0 24 24`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z`,
    }),
  });
}
var _ = `pvP8JT4e7EA-`,
  _ = `FcUxYTJ41iw-`,
  _ = `CVH0kQ-5qJ4-`,
  _ = `-OdMBhmRPrM-`,
  _ = `ht2q6zu-Yn8-`,
  _ = `kzKCSSWaRZ4-`,
  _ = `_1zsmA-mI3cU-`,
  _ = `_4X5-n9MaD8g-`,
  _ = 1576780700,
  _ = class extends _.Component {
    OnEmoticonClick(_) {
      let {
          emoticonStore: _,
          strFlairGroupID: _,
          SetUIDisplayPref: _,
          contextOptions: _,
          bShowChatAddons: _,
        } = this.props,
        {
          roomEffectSettings: _,
          onRoomEffectSelected: _,
          onStickerSelected: _,
        } = this.props,
        _ = null;
      if (
        ((_ =
          _ && _ && _ && _
            ? (0, _.jsx)(_, {
                emoticonStore: this.props.emoticonStore,
                strFlairGroupID: this.props.strFlairGroupID,
                onEmoticonSelected: (_) => this.props.OnEmoticonSelected(_, !1),
                roomEffectSettings: _,
                onRoomEffectSelected: _,
                onStickerSelected: _,
              })
            : _ && _.flair_list && _.GetFlairListByGroupID(_)?.length > 0
              ? (0, _.jsx)(_, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })
              : (0, _.jsx)(_, {
                  emoticonStore: this.props.emoticonStore,
                  strFlairGroupID: this.props.strFlairGroupID,
                  OnSelected: this.props.OnEmoticonSelected,
                })),
        _(
          _,
          _,
          _ || {
            bOverlapHorizontal: !0,
            bPreferPopLeft: !0,
            bPreferPopTop: !0,
          },
        ),
        this.BHaveUnseenEmoticons() && _)
      ) {
        let _ = this.GetNewestIndicatorTime();
        ((!_ || _ < _) && (_ = _), _(`rtLastAckedNewEmoticons`, _));
      }
    }
    GetNewestIndicatorTime() {
      let _ = this.props.emoticonStore,
        _ = -(2 ** 53 - 1),
        _ = _.GetTimeReceivedNewestEmoticon();
      _ && (_ = _);
      let _ = _.GetTimeReceivedForStickerOrEffect();
      return ((_ = Math.max(_, _)), _ > -(2 ** 53 - 1) ? _ : void 0);
    }
    BHaveUnseenEmoticons() {
      let { rtLastAckedNewEmoticons: _ } = this.props,
        _ = this.GetNewestIndicatorTime();
      return !_ || _ < _ || (_ && (!_ || _ < _));
    }
    render() {
      let { disabled: _, className: _, ttip: _, useImg: _ } = this.props,
        _ = [_],
        _ = !1;
      return (
        _ ? _.push(`disabled`) : this.BHaveUnseenEmoticons() && (_ = !0),
        _ && _.push(`ttip`),
        _
          ? (0, _.jsx)(_, {
              onClick: this.OnEmoticonClick,
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              focusable: !0,
              children: (0, _.jsx)(_, {
                toolTipContent: _,
                children: (0, _.jsx)(`img`, {
                  src: this.props.useImg,
                  className: _(..._),
                  title: this.props.title || _(`#ChatEntryButton_Emoticon`),
                }),
              }),
            })
          : (_.push(_, _),
            (0, _.jsx)(_, {
              className: _(..._),
              onOKActionDescription: _(`#ChatEntryButton_Emoticon`),
              type: `button`,
              onClick: this.OnEmoticonClick,
              title: this.props.title || _(`#ChatEntryButton_Emoticon`),
              disabled: _,
              children: (0, _.jsxs)(_, {
                toolTipContent: _,
                children: [
                  this.props.buttonIcon || (0, _.jsx)(_, {}),
                  _ && (0, _.jsx)(_, {}),
                ],
              }),
            }))
      );
    }
  };
(_([_], _.prototype, `OnEmoticonClick`, null), (_ = _([_], _)));
var _ = _;

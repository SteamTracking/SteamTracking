import { _ } from "./rolldown-runtime.js";
import { _, _, _, _ } from "./libraries.js";
import { _ } from "./clanimagemodels.js";
import { _ } from "./basicbbcodeparser.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _();
function _(_) {
  let { text: _ = ``, style: _, children: _ } = _;
  if (_ == null)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _;
  if (
    ((_ =
      _ instanceof Array
        ? _.map((_) => (_ ? _.toString() : ``)).filter((_) => _.length > 0)
            .join(`
`)
        : _.toString()),
    _.Children.count(_) == 1)
  ) {
    let _ = _.Children.only(_);
    return _.cloneElement(_, {
      "data-copystyle": _,
      "data-copytext": _,
    });
  }
  return (
    console.log(
      `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${_} copytext=${_}`,
    ),
    (0, _.jsx)(_.Fragment, {
      children: _,
    })
  );
}
var _ = `EYdF9T-t7r0-`,
  _ = `GlOJIpYSKE4-`,
  _ = `JQFjcVsL4SA-`,
  _ = `MHuFPh5V6r4-`,
  _ = `Gwiqr5pL1cE-`,
  _ = `w0e9THby0ZM-`,
  _ = `_4q--1VsTk5U-`,
  _ = `_669DaDTMhYs-`,
  _ = `dohGHt1ixUc-`,
  _ = `C9qi0C7EUeo-`,
  _ = `_3XkAznD5HIU-`,
  _ = `VoTYjMrv1JU-`,
  _ = `iiVnY9Z6ikk-`,
  _ = `KB63E0Y-xPo-`,
  _ = `_7tqUEqEzFXI-`;
function _(_) {
  let { emoticon: _, large: _ } = _,
    [_, _] = _(),
    [_, _] = _.useState(null),
    _ = `:${_}:`,
    _ = _(_, _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        text: _,
        style: `merge-adjacent`,
        children: (0, _.jsx)(`img`, {
          ..._,
          src: _,
          className: _(_, _ ? _ : void 0),
          "data-emoticon": _,
          alt: _,
          ref: _,
        }),
      }),
      _ &&
        _ &&
        (0, _.jsx)(_, {
          target: _,
          emoticon: _,
        }),
    ],
  });
}
function _(_) {
  let { target: _, emoticon: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    target: _,
    title: `:${_}:`,
    subtitle: _ && _.app_name ? _.app_name : void 0,
    children: (0, _.jsx)(_, {
      emoticon: _,
      large: !0,
    }),
  });
}
function _(_) {
  return _({
    queryKey: [`EmoticonHover`, _],
    queryFn: async () => {
      let _ = `${_.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(_)}?l=${encodeURIComponent(_.LANGUAGE)}&origin=${self.origin}`,
        _ = await fetch(_);
      if (_.status != 200)
        throw `Error fetching emoticon: ${_.status} ${_.statusText}`;
      return await _.json();
    },
  });
}
var _ = ({ target: _, title: _, subtitle: _, children: _ }) =>
    (0, _.jsxs)(_, {
      target: _,
      style: {
        zIndex: 1700,
      },
      className: _,
      children: [
        _,
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children:
                _ ||
                (0, _.jsx)(`span`, {
                  children: `\xA0`,
                }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children:
                _ ||
                (0, _.jsx)(`span`, {
                  children: `\xA0`,
                }),
            }),
          ],
        }),
      ],
    }),
  _ = `L3HaktJsWWA-`,
  _ = `YebKQISqLCs-`,
  _ = `Ct9yU89TArw-`,
  _ = `_7-cDUja4KeQ-`,
  _ = `PBXxHejQZTU-`,
  _ = `JX6irDhLeng-`,
  _ = _((_) => {
    let _ = _(_.photo, _(_.LANGUAGE)),
      _ = _ ? (typeof _ == `string` ? _ : _[1]) : void 0,
      _ = !!_.title,
      _ = !!_.company;
    return (0, _.jsxs)(`div`, {
      className: _,
      onMouseLeave: _.fnClose,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            _.photo &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _.name,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _.title,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _.company,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        _.bio &&
          (0, _.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              _.bio,
              _.bioString &&
                (0, _.jsx)(_, {
                  text: _.bioString,
                }),
            ],
          }),
      ],
    });
  }),
  _ = class _ extends _.Component {
    static sm_embeddedElements = new _(`presenter-hover-source-elements`);
    m_refAnchor = _.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      _() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(_) {
      let _ = this.m_refAnchor.current;
      if (!_) return;
      let _ = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: {
            maxWidth: 640,
            minHeight: _.clientHeight,
          },
          target: _,
        },
        _ = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        _.sm_embeddedElements.HideElement(_.ownerDocument, _)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        _.sm_embeddedElements.ShowElementDelayed(
          _.ownerDocument,
          150,
          (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_, {
              ...this.props,
              fnClose: this.OnLeave,
            }),
          }),
          _,
        ));
    }
    OnLeave(_) {
      this.ClosePopup();
    }
    render() {
      return (0, _.jsx)(`div`, {
        className: _,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(_([_], _.prototype, `ClosePopup`, null),
  _([_], _.prototype, `OnScroll`, null),
  _([_], _.prototype, `OnHover`, null),
  _([_], _.prototype, `OnLeave`, null));
function _(_) {
  let {
      photo: _,
      name: _,
      title: _,
      company: _,
      hidePhotoInCompactView: _,
    } = _,
    _ = _(_, _(_.LANGUAGE)),
    _ = _ && !_ ? (typeof _ == `string` ? _ : _[1]) : null,
    _ = !!_,
    _ = !!_;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            !!_ &&
              (0, _.jsx)(`img`, {
                src: _,
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _,
                }),
                (_ || _) &&
                  (0, _.jsxs)(`div`, {
                    children: [
                      _ &&
                        (0, _.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: _,
                        }),
                      _ &&
                        _ &&
                        (0, _.jsx)(`span`, {
                          children: `, `,
                        }),
                      _ &&
                        (0, _.jsx)(`span`, {
                          children: _,
                        }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}

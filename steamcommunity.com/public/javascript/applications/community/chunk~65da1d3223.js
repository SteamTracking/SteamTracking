/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { C as t, Ft as n, ot as r } from "./chunk~01cfc309bf.js";
import { dt as i } from "./chunk~05a38bc848.js";
import { t as a } from "./chunk~0278ae6236.js";
import { n as o } from "./chunk~a35e3605eb.js";
import { Su as s, eg as c, hm as l, kf as u } from "./main.js";
var d = e(n()),
  f = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=`,
  p = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==`,
  m = new URL(
    `../../../images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  h = `smhvevvCFp8-`,
  g = `EeWmhKXgAF8-`,
  _ = `_2KbeoaNSkCU-`,
  v = `I42isOrglng-`,
  y = r();
function b(e) {
  switch (e) {
    case `X-Small`:
    case `Small`:
      return f;
    case `Medium`:
    case `MediumLarge`:
      return p;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      return m;
    default:
      return (c(e, `Unhandled size ${e}`), p);
  }
}
var x = d.memo(function (e) {
    let {
        strAvatarURL: t,
        size: n = `Medium`,
        className: r,
        statusStyle: o,
        statusPosition: c,
        children: l,
        ...u
      } = e,
      { rgSources: f, bClientAsset: p } = d.useMemo(() => {
        if (a(t)) return { rgSources: [t], bClientAsset: !0 };
        let e = [];
        return (
          t && e.push(t), e.push(b(n)), { rgSources: e, bClientAsset: !1 }
        );
      }, [t, n]);
    return (0, y.jsxs)(`div`, {
      className: s(h, `avatarHolder`, `no-drag`, n, r),
      ...u,
      children: [
        (0, y.jsx)(`div`, { className: s(g, `avatarStatus`, c), style: o }),
        p &&
          (0, y.jsx)(`img`, {
            className: s(`SZjygYPGg9E-`, `avatar`),
            src: f[0],
            draggable: !1,
          }),
        !p &&
          (0, y.jsx)(i, {
            className: s(`SZjygYPGg9E-`, `avatar`),
            rgSources: f,
            draggable: !1,
          }),
        l,
      ],
    });
  }),
  S = class extends d.Component {
    render() {
      let {
          persona: e,
          size: t = `Medium`,
          animatedAvatar: n,
          className: r,
          strBackupAvatarURL: i,
          ...a
        } = this.props,
        c = ``;
      return (
        n && n.image_small && n.image_small.length != 0
          ? (c = l.MEDIA_CDN_COMMUNITY_URL + `images/` + n.image_small)
          : e
            ? ((c = e.avatar_url_medium),
              t == `Small` || t == `X-Small`
                ? (c = e.avatar_url)
                : (t == `Large` || t == `X-Large` || t == `FillArea`) &&
                  (c = e.avatar_url_full))
            : i && (c = i),
        (0, y.jsx)(x, { strAvatarURL: c, size: t, className: s(o(e), r), ...a })
      );
    }
  };
S = u([t], S);
var C = t((e) => {
    let { profileItem: t, className: n, bDisableAnimation: r, ...i } = e;
    if (!t || !t.image_small || t.image_small.length == 0) return null;
    let a = r ? t.image_large : t.image_small;
    return (
      (a ||= t.image_small),
      a.startsWith(`https://`) ||
        (a = l.MEDIA_CDN_COMMUNITY_URL + `images/` + a),
      (0, y.jsx)(`div`, {
        className: s(_, n, `avatarFrame`),
        ...i,
        children: (0, y.jsx)(`img`, { className: v, src: a }),
      })
    );
  }),
  w = class extends d.Component {
    m_timer;
    constructor(e) {
      (super(e),
        (this.state = { bAnimate: this.props.loopDuration != `None` }),
        (this.m_timer = 0));
    }
    componentDidMount() {
      this.props.bParentHovered || this.SetupAnimationTimer();
    }
    SetupAnimationTimer() {
      let e = 0;
      switch (this.props.loopDuration) {
        case `Short`:
          e = 2500;
          break;
        case `Medium`:
          e = 5e3;
          break;
        case `Long`:
          e = 1e4;
      }
      e != 0 &&
        (this.setState({ bAnimate: this.props.loopDuration != `None` }),
        (this.m_timer = window.setTimeout(
          () => this.setState({ bAnimate: !1 }),
          e,
        )));
    }
    StopAnimationTimer() {
      this.m_timer &&= (window.clearTimeout(this.m_timer), 0);
    }
    onHover() {
      this.SetupAnimationTimer();
    }
    componentWillUnmount() {
      this.StopAnimationTimer();
    }
    componentDidUpdate(e) {
      (this.props.loopDuration != e.loopDuration &&
        (this.props.loopDuration == `None`
          ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
          : this.props.loopDuration == `Infinite`
            ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
            : (this.setState({ bAnimate: !0 }), this.SetupAnimationTimer())),
        this.props.bParentHovered != e.bParentHovered &&
          (this.props.bParentHovered &&
          this.props.loopDuration != `None` &&
          this.props.loopDuration != `Infinite`
            ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
            : this.state.bAnimate && this.SetupAnimationTimer()));
    }
    render() {
      let {
        loopDuration: e,
        animatedAvatar: t,
        avatarFrame: n,
        children: r,
        style: i,
        bLimitProfileFrameAnimationTime: a,
        bParentHovered: o,
        ...s
      } = this.props;
      s.onClick && (i = { ...i, cursor: `pointer` });
      let c = this.state.bAnimate ? (t ?? void 0) : void 0;
      return (0, y.jsx)(`div`, {
        onMouseEnter: () =>
          this.setState({ bAnimate: this.props.loopDuration != `None` }),
        onMouseLeave: () => this.SetupAnimationTimer(),
        children: (0, y.jsxs)(S, {
          animatedAvatar: c,
          ...s,
          children: [
            r,
            (0, y.jsx)(C, {
              profileItem: n ?? null,
              bDisableAnimation: a && !this.state.bAnimate,
            }),
          ],
        }),
      });
    }
  };
w = u([t], w);
export { S as n, x as t };

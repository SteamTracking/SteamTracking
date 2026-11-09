import { _ } from "./rolldown-runtime.js";
import { _, _, _ } from "./libraries.js";
import { _ } from "./emoticonbutton.js";
import { _ } from "./personautils.js";
import { _ } from "./persona.js";
import { _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=`,
  _ = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==`,
  _ = new URL(
    `../../../images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = `smhvevvCFp8-`,
  _ = `EeWmhKXgAF8-`,
  _ = `_2KbeoaNSkCU-`,
  _ = `I42isOrglng-`,
  _ = _();
function _(_) {
  switch (_) {
    case `X-Small`:
    case `Small`:
      return _;
    case `Medium`:
    case `MediumLarge`:
      return _;
    case `Large`:
    case `X-Large`:
    case `FillArea`:
      return _;
    default:
      return _(_, `Unhandled size ${_}`), _;
  }
}
var _ = _.memo(function (_) {
    let {
        strAvatarURL: _,
        size: _ = `Medium`,
        className: _,
        statusStyle: _,
        statusPosition: _,
        children: _,
        ..._
      } = _,
      { rgSources: _, bClientAsset: _ } = _.useMemo(() => {
        if (_(_))
          return {
            rgSources: [_],
            bClientAsset: !0,
          };
        let _ = [];
        return (
          _ && _.push(_),
          _.push(_(_)),
          {
            rgSources: _,
            bClientAsset: !1,
          }
        );
      }, [_, _]);
    return (0, _.jsxs)(`div`, {
      className: _(_, `avatarHolder`, `no-drag`, _, _),
      ..._,
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, `avatarStatus`, _),
          style: _,
        }),
        _ &&
          (0, _.jsx)(`img`, {
            className: _(`SZjygYPGg9E-`, `avatar`),
            src: _[0],
            draggable: !1,
          }),
        !_ &&
          (0, _.jsx)(_, {
            className: _(`SZjygYPGg9E-`, `avatar`),
            rgSources: _,
            draggable: !1,
          }),
        _,
      ],
    });
  }),
  _ = class extends _.Component {
    render() {
      let {
          persona: _,
          size: _ = `Medium`,
          animatedAvatar: _,
          className: _,
          strBackupAvatarURL: _,
          ..._
        } = this.props,
        _ = ``;
      return (
        _ && _.image_small && _.image_small.length != 0
          ? (_ = _.MEDIA_CDN_COMMUNITY_URL + `images/` + _.image_small)
          : _
            ? ((_ = _.avatar_url_medium),
              _ == `Small` || _ == `X-Small`
                ? (_ = _.avatar_url)
                : (_ == `Large` || _ == `X-Large` || _ == `FillArea`) &&
                  (_ = _.avatar_url_full))
            : _ && (_ = _),
        (0, _.jsx)(_, {
          strAvatarURL: _,
          size: _,
          className: _(_(_), _),
          ..._,
        })
      );
    }
  };
_ = _([_], _);
var _ = _((_) => {
    let { profileItem: _, className: _, bDisableAnimation: _, ..._ } = _;
    if (!_ || !_.image_small || _.image_small.length == 0) return null;
    let _ = _ ? _.image_large : _.image_small;
    return (
      (_ ||= _.image_small),
      _.startsWith(`https://`) ||
        (_ = _.MEDIA_CDN_COMMUNITY_URL + `images/` + _),
      (0, _.jsx)(`div`, {
        className: _(_, _, `avatarFrame`),
        ..._,
        children: (0, _.jsx)(`img`, {
          className: _,
          src: _,
        }),
      })
    );
  }),
  _ = class extends _.Component {
    m_timer;
    constructor(_) {
      super(_),
        (this.state = {
          bAnimate: this.props.loopDuration != `None`,
        }),
        (this.m_timer = 0);
    }
    componentDidMount() {
      this.props.bParentHovered || this.SetupAnimationTimer();
    }
    SetupAnimationTimer() {
      let _ = 0;
      switch (this.props.loopDuration) {
        case `Short`:
          _ = 2500;
          break;
        case `Medium`:
          _ = 5e3;
          break;
        case `Long`:
          _ = 1e4;
      }
      _ != 0 &&
        (this.setState({
          bAnimate: this.props.loopDuration != `None`,
        }),
        (this.m_timer = window.setTimeout(
          () =>
            this.setState({
              bAnimate: !1,
            }),
          _,
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
    componentDidUpdate(_) {
      this.props.loopDuration != _.loopDuration &&
        (this.props.loopDuration == `None`
          ? (this.setState({
              bAnimate: !1,
            }),
            this.StopAnimationTimer())
          : this.props.loopDuration == `Infinite`
            ? (this.setState({
                bAnimate: !0,
              }),
              this.StopAnimationTimer())
            : (this.setState({
                bAnimate: !0,
              }),
              this.SetupAnimationTimer())),
        this.props.bParentHovered != _.bParentHovered &&
          (this.props.bParentHovered &&
          this.props.loopDuration != `None` &&
          this.props.loopDuration != `Infinite`
            ? (this.setState({
                bAnimate: !0,
              }),
              this.StopAnimationTimer())
            : this.state.bAnimate && this.SetupAnimationTimer());
    }
    render() {
      let {
        loopDuration: _,
        animatedAvatar: _,
        avatarFrame: _,
        children: _,
        style: _,
        bLimitProfileFrameAnimationTime: _,
        bParentHovered: _,
        ..._
      } = this.props;
      _.onClick &&
        (_ = {
          ..._,
          cursor: `pointer`,
        });
      let _ = this.state.bAnimate ? (_ ?? void 0) : void 0;
      return (0, _.jsx)(`div`, {
        onMouseEnter: () =>
          this.setState({
            bAnimate: this.props.loopDuration != `None`,
          }),
        onMouseLeave: () => this.SetupAnimationTimer(),
        children: (0, _.jsxs)(_, {
          animatedAvatar: _,
          ..._,
          children: [
            _,
            (0, _.jsx)(_, {
              profileItem: _ ?? null,
              bDisableAnimation: _ && !this.state.bAnimate,
            }),
          ],
        }),
      });
    }
  };
_ = _([_], _);
export { _, _ };

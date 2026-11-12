import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~cf3721cc1c.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~eefd71512b.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = _(),
  _ = (_) => {
    let { bShowOnlyInitialEvent: _ } = _,
      _ = _(),
      _ = _();
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bShowOnlyInitialEvent: _ || _,
        tracker: _,
      }),
    });
  },
  _ = class extends _.Component {
    state = {
      bLoading: !1,
      eventModel: this.props.eventModel,
    };
    m_refParent = _.createRef();
    m_cancelSignal = _.default.CancelToken.source();
    componentDidMount() {
      this.state.eventModel ||
        this.setState(
          {
            bLoading: !0,
          },
          this.LoadEvent,
        );
      let _ = this.GetBodyElement();
      _ && this.props.bPrimaryPageFeature && _.classList.add(_);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let _ = this.GetBodyElement();
      _ && this.props.bPrimaryPageFeature && _.classList.remove(_);
    }
    GetBodyElement() {
      return this.m_refParent.current
        ? this.m_refParent.current.closest(`body`)
        : null;
    }
    async LoadEvent() {
      let {
        appid: _,
        clanSteamID: _,
        announcementGID: _,
        partnerEventStore: _,
        additionalParams: _,
      } = this.props;
      _.LoadAdjacentPartnerEventsByAnnouncement(
        _,
        _,
        _,
        0,
        3,
        _,
        this.m_cancelSignal,
      )
        .then((_) => {
          _.length > 0
            ? this.setState(
                {
                  bLoading: !1,
                  eventModel: _[0],
                },
                this.HandleReadEvent,
              )
            : (this.props.onEventNotFound && this.props.onEventNotFound(),
              this.setState({
                bLoading: !1,
              }));
        })
        .catch((_) => {
          let _ = _(_);
          (console.error(`EventInfiniteScrollModal failed ` + _.strErrorMsg, _),
            this.setState({
              bLoading: !1,
            }));
        });
    }
    async HandleReadEvent() {
      let { eventModel: _ } = this.state,
        { trackingLocation: _, tracker: _ } = this.props;
      _ && _.BIsPartnerEvent() && (_.RecordEventRead(_, _ ?? 0), _.Flush());
    }
    render() {
      let { bShowOnlyInitialEvent: _ } = this.props,
        { bLoading: _, eventModel: _ } = this.state;
      if (_)
        return (0, _.jsx)(_, {
          active: !0,
          children: (0, _.jsx)(`div`, {
            className: _,
            style: {
              height: `400px`,
            },
            children: (0, _.jsx)(_, {}),
          }),
        });
      let {
          closeModal: _,
          appid: _,
          clanSteamID: _,
          className: _,
          partnerEventStore: _,
          showAppHeader: _,
          bPrimaryPageFeature: _,
          additionalParams: _,
          eventClassName: _,
        } = this.props,
        _;
      _.IN_CLIENT &&
        _?.appid &&
        (_.Get().HintLoad(),
        _.Get().BOwnsApp(_.appid) &&
          (_ = (_) => _(_, `steam://nav/games/details/` + _.appid)));
      let _ = (0, _.jsx)(_, {
        children: (_) =>
          (0, _.jsx)(_, {
            initialEvent: _,
            appid: _,
            clanSteamID: _,
            partnerEventStore: _,
            emoticonStore: _,
            closeModal: _ ? void 0 : _,
            showAppHeader: _,
            bShowOnlyInitialEvent: _,
            additionalParams: _,
            eventClassName: _,
            onAppIconClick: _,
          }),
      });
      return _
        ? _
        : (0, _.jsx)(_, {
            active: !0,
            children: (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
          });
    }
  };
_ = _([_], _);

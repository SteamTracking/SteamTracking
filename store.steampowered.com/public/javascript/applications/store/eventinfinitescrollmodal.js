/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r, tt as i } from "./libraries.js";
import { t as a } from "./apppartnereventspage.js";
import "./modals.js";
import { t as o } from "./throbber.js";
import {
  Fu as s,
  Hb as c,
  Jc as l,
  L as u,
  Mb as d,
  Rn as f,
  Sr as p,
  i as m,
  pn as h,
  t as g,
  yu as _,
  zb as v,
} from "./main.js";
var y = e(i()),
  b = e(t()),
  x = n(),
  S = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = v(),
      r = u();
    return (0, x.jsx)(l, {
      children: (0, x.jsx)(C, {
        ...e,
        bShowOnlyInitialEvent: t || n,
        tracker: r,
      }),
    });
  },
  C = class extends b.Component {
    state = { bLoading: !1, eventModel: this.props.eventModel };
    m_refParent = b.createRef();
    m_cancelSignal = y.default.CancelToken.source();
    componentDidMount() {
      this.state.eventModel || this.setState({ bLoading: !0 }, this.LoadEvent);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.add(f);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(f);
    }
    GetBodyElement() {
      return this.m_refParent.current
        ? this.m_refParent.current.closest(`body`)
        : null;
    }
    async LoadEvent() {
      let {
        appid: e,
        clanSteamID: t,
        announcementGID: n,
        partnerEventStore: r,
        additionalParams: i,
      } = this.props;
      r.LoadAdjacentPartnerEventsByAnnouncement(
        n,
        t,
        e,
        0,
        3,
        i,
        this.m_cancelSignal,
      )
        .then((e) => {
          e.length > 0
            ? this.setState(
                { bLoading: !1, eventModel: e[0] },
                this.HandleReadEvent,
              )
            : (this.props.onEventNotFound && this.props.onEventNotFound(),
              this.setState({ bLoading: !1 }));
        })
        .catch((e) => {
          let t = s(e);
          console.error(`EventInfiniteScrollModal failed ` + t.strErrorMsg, t),
            this.setState({ bLoading: !1 });
        });
    }
    async HandleReadEvent() {
      let { eventModel: e } = this.state,
        { trackingLocation: t, tracker: n } = this.props;
      e && e.BIsPartnerEvent() && (n.RecordEventRead(e, t ?? 0), n.Flush());
    }
    render() {
      let { bShowOnlyInitialEvent: e } = this.props,
        { bLoading: t, eventModel: n } = this.state;
      if (t)
        return (0, x.jsx)(h, {
          active: !0,
          children: (0, x.jsx)(`div`, {
            className: g,
            style: { height: `400px` },
            children: (0, x.jsx)(o, {}),
          }),
        });
      let {
          closeModal: r,
          appid: i,
          clanSteamID: s,
          className: l,
          partnerEventStore: u,
          showAppHeader: d,
          bPrimaryPageFeature: f,
          additionalParams: v,
          eventClassName: y,
        } = this.props,
        b;
      c.IN_CLIENT &&
        n?.appid &&
        (_.Get().HintLoad(),
        _.Get().BOwnsApp(n.appid) &&
          (b = (e) => p(e, `steam://nav/games/details/` + n.appid)));
      let S = (0, x.jsx)(m, {
        children: (t) =>
          (0, x.jsx)(a, {
            initialEvent: n,
            appid: i,
            clanSteamID: s,
            partnerEventStore: u,
            emoticonStore: t,
            closeModal: f ? void 0 : r,
            showAppHeader: d,
            bShowOnlyInitialEvent: e,
            additionalParams: v,
            eventClassName: y,
            onAppIconClick: b,
          }),
      });
      return f
        ? S
        : (0, x.jsx)(h, {
            active: !0,
            children: (0, x.jsx)(`div`, { className: l, children: S }),
          });
    }
  };
C = d([r], C);
export { S as t };

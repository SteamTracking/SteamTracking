/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, l as r, tt as i } from "./libraries.js";
import { t as a } from "./apppartnereventspage.js";
import "./modals.js";
import { t as o } from "./throbber.js";
import {
  Bb as s,
  Cr as c,
  Iu as l,
  L as u,
  Nb as d,
  Ub as f,
  Yc as p,
  bu as m,
  i as h,
  mn as g,
  t as _,
  zn as v,
} from "./main.js";
var y = e(i()),
  b = e(t()),
  x = n(),
  S = (e) => {
    let { bShowOnlyInitialEvent: t } = e,
      n = s(),
      r = u();
    return (0, x.jsx)(p, {
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
      e && this.props.bPrimaryPageFeature && e.classList.add(v);
    }
    componentWillUnmount() {
      this.m_cancelSignal.cancel(`EventInfiniteScrollModal unmounting`);
      let e = this.GetBodyElement();
      e && this.props.bPrimaryPageFeature && e.classList.remove(v);
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
          let t = l(e);
          (console.error(`EventInfiniteScrollModal failed ` + t.strErrorMsg, t),
            this.setState({ bLoading: !1 }));
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
        return (0, x.jsx)(g, {
          active: !0,
          children: (0, x.jsx)(`div`, {
            className: _,
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
          bPrimaryPageFeature: p,
          additionalParams: v,
          eventClassName: y,
        } = this.props,
        b;
      f.IN_CLIENT &&
        n?.appid &&
        (m.Get().HintLoad(),
        m.Get().BOwnsApp(n.appid) &&
          (b = (e) => c(e, `steam://nav/games/details/` + n.appid)));
      let S = (0, x.jsx)(h, {
        children: (t) =>
          (0, x.jsx)(a, {
            initialEvent: n,
            appid: i,
            clanSteamID: s,
            partnerEventStore: u,
            emoticonStore: t,
            closeModal: p ? void 0 : r,
            showAppHeader: d,
            bShowOnlyInitialEvent: e,
            additionalParams: v,
            eventClassName: y,
            onAppIconClick: b,
          }),
      });
      return p
        ? S
        : (0, x.jsx)(g, {
            active: !0,
            children: (0, x.jsx)(`div`, { className: l, children: S }),
          });
    }
  };
C = d([r], C);
export { S as t };
